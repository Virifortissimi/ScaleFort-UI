import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { ApiService, PayoutRequestItem } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-payout-requests',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white">
      <div class="container-base max-w-6xl">
        <h1 class="text-h1 font-bold text-text-primary mb-4">Payout Requests</h1>
        <p class="text-text-muted mb-8">Approve, reject, or mark payout requests as paid.</p>

        <div class="card-base mb-6">
          <div class="flex flex-wrap gap-3 items-center">
            <label class="text-sm font-medium text-text-body" for="status-filter">Filter by status</label>
            <select id="status-filter" class="rounded-[10px] border border-border-base bg-bg-white px-4 py-2 text-text-body" [value]="statusFilter()" (change)="onStatusChange($event)">
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Paid">Paid</option>
            </select>
            <button class="btn-secondary !px-4 !py-2 text-sm" type="button" (click)="refresh()" [disabled]="loading()">
              {{ loading() ? 'Refreshing...' : 'Refresh' }}
            </button>
          </div>
        </div>

        @if (forbidden()) {
          <div class="card-base">
            <p class="text-sm text-error">You do not have permission to view payout requests.</p>
          </div>
        } @else if (loading()) {
          <p class="text-sm text-text-muted">Loading payout requests...</p>
        } @else if (!requests().length) {
          <p class="text-sm text-text-muted">No payout requests found.</p>
        } @else {
          <div class="card-base overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="text-text-muted border-b border-border-base">
                  <th class="py-2 pr-4">Requested</th>
                  <th class="py-2 pr-4">Affiliate</th>
                  <th class="py-2 pr-4">Amount</th>
                  <th class="py-2 pr-4">Method</th>
                  <th class="py-2 pr-4">Account</th>
                  <th class="py-2 pr-4">Status</th>
                  <th class="py-2 pr-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (request of requests(); track request.id) {
                  <tr class="border-b border-border-base">
                    <td class="py-2 pr-4">{{ request.requestedAt | date: 'MMM d, y, h:mm a' }}</td>
                    <td class="py-2 pr-4">
                      <div class="font-medium text-text-primary">{{ request.fullName }}</div>
                      <div class="text-xs text-text-muted">{{ request.email }}</div>
                    </td>
                    <td class="py-2 pr-4">NGN {{ request.amount | number }}</td>
                    <td class="py-2 pr-4">{{ request.payoutMethod }}</td>
                    <td class="py-2 pr-4">
                      <div>{{ request.bankName }}</div>
                      <div class="text-xs text-text-muted">{{ request.accountName }} • {{ request.accountNumber || request.accountNumberMasked }}</div>
                      <div class="text-xs text-text-muted">Code: {{ request.bankCode || 'N/A' }}</div>
                    </td>
                    <td class="py-2 pr-4 capitalize">{{ request.status }}</td>
                    <td class="py-2 pr-4">
                      <div class="flex flex-wrap gap-2">
                        <button class="btn-secondary !px-3 !py-1 text-xs" type="button" (click)="updateStatus(request, 'Approved')" [disabled]="busyId() === request.id">
                          Approve
                        </button>
                        <button class="btn-secondary !px-3 !py-1 text-xs" type="button" (click)="updateStatus(request, 'Rejected')" [disabled]="busyId() === request.id">
                          Reject
                        </button>
                        <button class="btn-primary !px-3 !py-1 text-xs" type="button" (click)="updateStatus(request, 'Paid')" [disabled]="busyId() === request.id">
                          Mark paid
                        </button>
                      </div>
                      <div class="mt-2">
                        <label class="sr-only" [attr.for]="'admin-note-' + request.id">Admin note</label>
                        <input
                          class="w-full rounded-[8px] border border-border-base bg-bg-white px-3 py-2 text-xs text-text-body"
                          [id]="'admin-note-' + request.id"
                          type="text"
                          placeholder="Add admin note"
                          maxlength="240"
                          [value]="noteFor(request.id)"
                          (input)="setNote(request.id, $event)"
                        />
                        <div class="mt-1 text-[11px]" [class.text-error]="noteLength(request.id) > 220" [class.text-text-muted]="noteLength(request.id) <= 220">
                          {{ noteLength(request.id) }}/240
                        </div>
                      </div>
                      @if (request.updatedAt || request.adminNote || request.history?.length) {
                        <div class="mt-2 text-xs text-text-muted">
                          @if (request.updatedAt) {
                            <div>Last update: {{ request.updatedAt | date: 'MMM d, y, h:mm a' }}</div>
                          }
                          @if (request.adminNote) {
                            <div>Note: {{ request.adminNote }}</div>
                          }
                          @if (request.history?.length) {
                            <div>History:</div>
                            <ul class="mt-1 space-y-1">
                              @for (entry of request.history; track entry.updatedAt) {
                                <li>{{ entry.updatedAt | date: 'MMM d, y' }} • {{ entry.status }} • {{ entry.adminNote || 'No note' }}</li>
                              }
                            </ul>
                          }
                        </div>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <div class="flex flex-wrap gap-3 mt-4">
            <button type="button" class="btn-secondary" (click)="changePage(pageIndex() - 1)" [disabled]="pageIndex() <= 1">
              Previous
            </button>
            <button type="button" class="btn-secondary" (click)="changePage(pageIndex() + 1)" [disabled]="pageIndex() >= pageCount()">
              Next
            </button>
            <span class="text-sm text-text-muted self-center">Page {{ pageIndex() }} of {{ pageCount() }}</span>
          </div>
        }
      </div>
    </section>
  `,
})
export class PayoutRequestsComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly toast = inject(ToastService);

  readonly requests = signal<PayoutRequestItem[]>([]);
  readonly loading = signal(false);
  readonly forbidden = signal(false);
  readonly statusFilter = signal('');
  readonly pageIndex = signal(1);
  readonly pageCount = signal(1);
  readonly busyId = signal<string | null>(null);
  readonly adminNotes = signal<Record<string, string>>({});

  ngOnInit(): void {
    this.loadRequests();
  }

  refresh(): void {
    this.loadRequests();
  }

  changePage(nextPage: number): void {
    const clamped = Math.min(Math.max(nextPage, 1), Math.max(this.pageCount(), 1));
    if (clamped === this.pageIndex()) {
      return;
    }

    this.pageIndex.set(clamped);
    this.loadRequests();
  }

  onStatusChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    this.statusFilter.set(target?.value ?? '');
    this.pageIndex.set(1);
    this.loadRequests();
  }

  updateStatus(request: PayoutRequestItem, status: string): void {
    if (this.busyId()) {
      return;
    }

    this.busyId.set(request.id);
    const adminNote = this.noteFor(request.id) || undefined;
    this.api
      .updatePayoutRequestStatus(request.id, status, adminNote)
      .pipe(finalize(() => this.busyId.set(null)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to update payout status.');
            return;
          }

          this.toast.success(response.message ?? `Payout marked as ${status}.`);
          this.loadRequests();
        },
        error: () => {
          this.toast.error('Unable to update payout status.');
        },
      });
  }

  private loadRequests(): void {
    this.loading.set(true);
    this.forbidden.set(false);
    const pageIndex = this.pageIndex();
    const status = this.statusFilter();
    this.api
      .getAdminPayoutRequests(status || undefined, pageIndex)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.success) {
            this.toast.error(response.message ?? 'Unable to load payout requests.');
            return;
          }

          if (!response.data) {
            this.requests.set([]);
            this.pageCount.set(1);
            return;
          }

          this.requests.set(response.data.data ?? []);
          this.pageCount.set(response.data.pageCount || 1);
          this.adminNotes.set(
            (response.data.data ?? []).reduce<Record<string, string>>((acc, item) => {
              acc[item.id] = item.adminNote ?? '';
              return acc;
            }, {})
          );
        },
        error: (error) => {
          if (error?.status === 403) {
            this.forbidden.set(true);
            return;
          }
          this.toast.error('Unable to load payout requests.');
        },
      });
  }

  setNote(requestId: string, event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value ?? '';
    this.adminNotes.update((current) => ({ ...current, [requestId]: value }));
  }

  noteFor(requestId: string): string {
    return this.adminNotes()[requestId] ?? '';
  }

  noteLength(requestId: string): number {
    return this.noteFor(requestId).length;
  }
}


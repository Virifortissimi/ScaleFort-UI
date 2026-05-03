import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ApiService, PaymentStatusData } from '../../core/services/api.service';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white">
      <div class="container-base max-w-3xl">
        <div class="card-base">
          <h1 class="text-h2 font-bold text-text-primary mb-2">Payment Confirmation</h1>
          <p class="text-text-muted mb-8">Your application and payment status from our database is shown below.</p>

          @if (loading()) {
            <div class="border border-border-base rounded-card p-5 bg-bg-subtle">
              <p class="text-text-body m-0">Checking payment status...</p>
            </div>
          } @else {
            @if (error()) {
              <div class="border border-error rounded-card p-5 bg-red-50">
                <p class="text-error font-semibold mb-2">Unable to confirm payment yet.</p>
                <p class="text-text-body m-0">{{ error() }}</p>
              </div>
            } @else {
              @if (paymentStatus(); as status) {
                <div
                  class="rounded-card p-5 border mb-6"
                  [class.border-success]="status.isPaid"
                  [class.bg-green-50]="status.isPaid"
                  [class.border-border-base]="!status.isPaid"
                  [class.bg-bg-subtle]="!status.isPaid"
                >
                  <p class="font-semibold text-text-primary m-0">
                    {{ status.isPaid ? 'Payment Successful' : 'Payment Pending' }}
                  </p>
                  <p class="text-sm text-text-muted mt-2 mb-0">
                    {{ status.isPaid ? 'Your slot is confirmed.' : 'We have your application. Complete or verify payment to continue.' }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div class="border border-border-base rounded-[10px] p-4">
                    <p class="text-text-muted mb-1">Application ID</p>
                    <p class="text-text-primary font-medium break-all m-0">{{ status.applicationId }}</p>
                  </div>
                  <div class="border border-border-base rounded-[10px] p-4">
                    <p class="text-text-muted mb-1">Amount</p>
                    <p class="text-text-primary font-medium m-0">NGN {{ formatAmount(status.amount) }}</p>
                  </div>
                  <div class="border border-border-base rounded-[10px] p-4">
                    <p class="text-text-muted mb-1">Verified</p>
                    <p class="text-text-primary font-medium m-0">{{ status.isVerified ? 'Yes' : 'No' }}</p>
                  </div>
                  <div class="border border-border-base rounded-[10px] p-4">
                    <p class="text-text-muted mb-1">Payment Date</p>
                    <p class="text-text-primary font-medium m-0">{{ formatDate(status.dateOfPayment || status.paidAt) }}</p>
                  </div>
                  <div class="border border-border-base rounded-[10px] p-4 sm:col-span-2">
                    <p class="text-text-muted mb-1">Reference</p>
                    <p class="text-text-primary font-medium break-all m-0">{{ status.paymentReferenceCode || 'N/A' }}</p>
                  </div>
                </div>
              }
            }
          }

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <a routerLink="/tech-school/courses" class="btn-primary text-center">Back to Courses</a>
            <a routerLink="/tech-school/apply" class="btn-secondary text-center">Start New Application</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PaymentSuccessComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly paymentStatus = signal<PaymentStatusData | null>(null);

  constructor() {
    const statePayment = history.state?.paymentStatus as PaymentStatusData | undefined;
    if (statePayment?.applicationId) {
      this.paymentStatus.set(statePayment);
      this.loading.set(false);
      return;
    }

    const applicationId = this.route.snapshot.queryParamMap.get('applicationId');
    if (!applicationId) {
      this.error.set('Missing application ID. Please verify payment from the application form.');
      this.loading.set(false);
      return;
    }

    this.api.getPaymentStatus(applicationId).subscribe({
      next: (response) => {
        if (!response.success || !response.data) {
          this.error.set(response.message || 'Payment status not found.');
          this.loading.set(false);
          return;
        }

        this.paymentStatus.set(response.data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load payment status. Please try again.');
        this.loading.set(false);
      },
    });
  }

  formatDate(value?: string | null): string {
    if (!value) return 'N/A';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'N/A';
    return date.toLocaleString();
  }

  formatAmount(value: number): string {
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(value || 0);
  }
}


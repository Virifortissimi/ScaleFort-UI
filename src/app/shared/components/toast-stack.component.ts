import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast-stack',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed top-20 right-4 z-[2000] flex flex-col gap-3 w-[min(22rem,calc(100vw-2rem))] pointer-events-none">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          class="pointer-events-auto rounded-xl border px-4 py-3 shadow-lg text-sm animate-fade-up"
          [ngClass]="
            toast.type === 'success'
              ? 'bg-green-50 text-green-900 border-green-200'
              : toast.type === 'error'
              ? 'bg-red-50 text-red-900 border-red-200'
              : 'bg-blue-50 text-blue-900 border-blue-200'
          "
        >
          <div class="flex items-start justify-between gap-3">
            <p class="m-0 leading-snug">{{ toast.message }}</p>
            <button type="button" class="text-current/70 hover:text-current" (click)="toastService.remove(toast.id)" aria-label="Dismiss notification">
              ×
            </button>
          </div>
        </div>
      }
    </div>
  `,
})
export class ToastStackComponent {
  readonly toastService = inject(ToastService);
}

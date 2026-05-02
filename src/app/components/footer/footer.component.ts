import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="section-dark bg-[var(--surface-dark)] text-white relative z-[1]">
      <div class="container-base">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <section>
            <img src="https://res.cloudinary.com/virifortissimi/image/upload/v1737720710/Goals/SCALE-small.png" alt="Scalefort" class="h-9 w-auto mb-4" />
            <p class="text-white/75 leading-relaxed">Scale with Confidence. Scale with ScaleFort. Empowering Africa's tech ecosystem through world-class education, mentorship, and innovative solutions.</p>
          </section>

          <section>
            <h2 class="text-xs font-semibold uppercase tracking-overline text-white/75 mb-4">Services</h2>
            <ul class="space-y-3 text-white/75">
              <li><a routerLink="/tech-school" class="hover:text-white no-underline">Tech School</a></li>
              <li><a routerLink="/it-services" class="hover:text-white no-underline">IT Services</a></li>
              <li><a routerLink="/corporate-training" class="hover:text-white no-underline">Corporate Training</a></li>
            </ul>
          </section>

          <section>
            <h2 class="text-xs font-semibold uppercase tracking-overline text-white/75 mb-4">Company</h2>
            <ul class="space-y-3 text-white/75">
              <li><a routerLink="/about" class="hover:text-white no-underline">About Us</a></li>
              <li><a routerLink="/faq" class="hover:text-white no-underline">FAQs</a></li>
              <li><a routerLink="/contact" class="hover:text-white no-underline">Get in Touch</a></li>
              <li><a routerLink="/affiliate-policy" class="hover:text-white no-underline">Affiliate Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 class="text-xs font-semibold uppercase tracking-overline text-white/75 mb-4">Newsletter</h2>
            <p class="text-white/75 text-sm mb-3">Get updates on events, new cohorts, and resources.</p>
            <form [formGroup]="newsletterForm" (ngSubmit)="submitNewsletter()" class="space-y-3 footer-newsletter-form">
              <input type="email" formControlName="email" class="w-full px-3 py-2 rounded-[10px] border border-border-base text-text-primary placeholder:text-text-disabled" placeholder="you@example.com" />
              <button type="submit" class="btn-primary w-full" [disabled]="newsletterForm.invalid || submitting()">{{ submitting() ? 'Submitting...' : 'Subscribe' }}</button>
            </form>
            @if (subscribed()) {
              <p class="text-xs text-green-300 mt-2">Thanks for subscribing.</p>
            }
            <ul class="space-y-2 text-white/75 mt-6 text-sm">
              <li>support&#64;scalefort.org</li>
              <li>+234-815-840-6306</li>
              <li>Road 4, Lekki Atlantic Gardens Estate, Ajah, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>

        <div class="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p class="text-sm text-white/60">&copy; {{ currentYear }} ScaleFort. All rights reserved. Empowering tech careers worldwide.</p>
          <div class="flex gap-5 text-sm">
            <a routerLink="/privacy-policy" class="text-white/75 hover:text-white no-underline">Privacy Policy</a>
            <a routerLink="/terms-of-service" class="text-white/75 hover:text-white no-underline">Terms of Service</a>
            <a routerLink="/cookie-policy" class="text-white/75 hover:text-white no-underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly toast = inject(ToastService);

  readonly submitting = signal(false);
  readonly subscribed = signal(false);
  readonly currentYear = new Date().getFullYear();

  readonly newsletterForm = this.fb.nonNullable.group({
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
  });

  submitNewsletter(): void {
    if (this.newsletterForm.invalid || this.submitting()) {
      this.newsletterForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.api.submitNewsletter({ email: this.newsletterForm.controls.email.value }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.subscribed.set(true);
        this.newsletterForm.reset({ email: '' });
        this.toast.success('Subscribed successfully.');
      },
      error: () => {
        this.submitting.set(false);
        this.toast.error('Unable to subscribe right now.');
      },
    });
  }
}



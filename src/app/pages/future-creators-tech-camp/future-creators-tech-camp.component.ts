import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { CohortCountdownComponent } from '../../shared/components/cohort-countdown.component';
import { SchemaService } from '../../core/services/schema.service';
import { ApiService, FutureCreatorsTechCampPayload } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';

interface CampTheme {
  week: string;
  title: string;
  items: readonly string[];
  projects: readonly string[];
  accentClass: string;
}

interface CampDetail {
  label: string;
  value: string;
  note: string;
}

@Component({
  selector: 'app-future-creators-tech-camp',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AnimateOnScrollDirective, CohortCountdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="camp-hero section-hero relative overflow-hidden">
      <!-- Premium ambient background decoration -->
      <div class="camp-hero-glow" aria-hidden="true">
        <div class="ambient-blob blob-green"></div>
        <div class="ambient-blob blob-amber"></div>
        <div class="ambient-blob blob-purple"></div>
      </div>

      <div class="container-base grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <!-- Hero Left Column Content -->
        <div appAnimateOnScroll class="text-center lg:text-left relative z-[2]">
          <p class="camp-eyebrow overline animate-fade-in">
            Maiden Edition Starts August 3, 2026
          </p>
          <h1 class="camp-title type-display-xl mb-6">
            Future Creators <span class="accent-title">Tech Camp</span>
          </h1>
          <p class="camp-copy type-body-l">
            A fun, practical 3-week virtual holiday program that introduces children to technology, creativity, and problem-solving on Zoom.
          </p>

          <div class="mb-8 flex justify-center lg:justify-start">
            <app-cohort-countdown
              nextCohortDate="2026-08-03T09:00:00+01:00"
              label="Camp starts in"
              scarcityLabel="Limited slots available"
            />
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button type="button" (click)="scrollToSection('register')" class="btn-primary-camp">Register Now</button>
            <button type="button" (click)="scrollToSection('themes')" class="btn-secondary-camp">View Camp Themes</button>
          </div>

          <!-- Glassmorphic Details Grid -->
          <dl class="camp-details-grid mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            @for (detail of details; track detail.label) {
              <div class="detail-card glass-card">
                <dt class="detail-label">{{ detail.label }}</dt>
                <dd class="detail-value">{{ detail.value }}</dd>
                <dd class="detail-note">{{ detail.note }}</dd>
              </div>
            }
          </dl>
        </div>

        <!-- Hero Right Column Flyer Image -->
        <figure appAnimateOnScroll [animateDelay]="120" class="relative z-[2]">
          <div class="camp-flyer-frame">
            <div class="frame-shimmer" aria-hidden="true"></div>
            <img
              src="assets/images/camps/future-creators-tech-camp.jpeg"
              alt="Scalefort Future Creators Tech Camp flyer showing children learning with a laptop"
              class="camp-flyer-img"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <figcaption class="sr-only">Scalefort Future Creators Tech Camp flyer.</figcaption>
        </figure>
      </div>
    </section>

    <!-- Interactive Benefits Section -->
    <section class="section-compact relative z-[2] bg-transparent">
      <div class="container-base">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (benefit of benefits; track benefit.title; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="i * 80" class="benefit-card glass-card">
              <div class="benefit-icon-wrapper">
                <svg class="h-5 w-5 icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="benefit.path" />
                </svg>
              </div>
              <h2 class="benefit-title">{{ benefit.title }}</h2>
              <p class="benefit-body">{{ benefit.body }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Weekly Themes Section -->
    <section id="themes" class="section section-themes relative overflow-hidden">
      <div class="container-base">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <p class="overline overline-amber mb-2">3 Weeks. 3 Exciting Themes.</p>
          <h2 class="type-h1 section-themes-title">What Children Will Learn</h2>
          <p class="type-body themes-section-copy mt-3">
            Each week gives young learners a practical theme, a clear set of skills, and creative projects they can show proudly.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          @for (theme of themes; track theme.week; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="i * 100" [ngClass]="'theme-card glass-card theme-card--' + i">
              <!-- Week Tag Badge -->
              <p [class]="'theme-badge ' + theme.accentClass">
                {{ theme.week }}
              </p>
              <h3 class="theme-card-title">{{ theme.title }}</h3>
              
              <!-- Redesigned Checkmark List -->
              <ul class="theme-items-list">
                @for (item of theme.items; track item) {
                  <li>
                    <svg class="item-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
              
              <!-- Projects Box -->
              <div class="projects-box glass-card">
                <p class="projects-title">Fun Projects</p>
                <p class="projects-list">{{ theme.projects.join(' • ') }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Registration Section -->
    <section class="section section-register relative overflow-hidden">
      <div id="register" class="container-base max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 items-start">
          
          <!-- Redesigned Pricing Ticket -->
          <aside class="registration-ticket glass-card">
            <div class="ticket-header">
              <p class="ticket-overline">Limited Slots Available</p>
              <h2 class="ticket-title">Secure a Spot</h2>
            </div>
            
            <div class="ticket-price-wrapper">
              <span class="currency-tag">NGN</span>
              <span class="price-value">{{ formatAmount(campPrice) }}</span>
            </div>
            
            <p class="ticket-description">
              Complete the form and continue to Paystack checkout. Zoom access details will be shared after payment confirmation.
            </p>
            
            <div class="mb-6">
              <app-cohort-countdown
                nextCohortDate="2026-08-03T09:00:00+01:00"
                label="Camp starts in"
                scarcityLabel="Limited slots available"
              />
            </div>
            
            <div class="ticket-divider"></div>
            
            <dl class="ticket-details-list">
              <div>
                <dt>Format</dt>
                <dd>Virtual on Zoom</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>NGN {{ formatAmount(campPrice) }}</dd>
              </div>
              <div>
                <dt>Starts</dt>
                <dd>August 3, 2026</dd>
              </div>
            </dl>
          </aside>

          <!-- Dynamic Form Card -->
          <form [formGroup]="form" (ngSubmit)="submit()" class="form-card glass-card grid grid-cols-1 md:grid-cols-2 gap-6" novalidate>
            <div class="md:col-span-2">
              <label for="parentName" class="form-label">Parent or Guardian Name</label>
              <input id="parentName" type="text" formControlName="parentName" class="form-input" placeholder="e.g. John Doe" />
              @if (isInvalid('parentName')) {
                <p class="form-error-msg" role="alert">Please enter the parent or guardian name.</p>
              }
            </div>

            <div>
              <label for="email" class="form-label">Email Address</label>
              <input id="email" type="email" formControlName="email" class="form-input" placeholder="e.g. parent@example.com" />
              @if (isInvalid('email')) {
                <p class="form-error-msg" role="alert">Please enter a valid email address.</p>
              }
            </div>

            <div>
              <label for="phone" class="form-label">Phone Number</label>
              <input id="phone" type="tel" formControlName="phone" class="form-input" placeholder="e.g. 08012345678" />
              @if (isInvalid('phone')) {
                <p class="form-error-msg" role="alert">Enter a valid Nigerian phone number.</p>
              }
            </div>

            <div>
              <label for="childName" class="form-label">Child's Name</label>
              <input id="childName" type="text" formControlName="childName" class="form-input" placeholder="e.g. Alex Doe" />
              @if (isInvalid('childName')) {
                <p class="form-error-msg" role="alert">Please enter the child's name.</p>
              }
            </div>

            <div>
              <label for="ageGroup" class="form-label">Age Group</label>
              <select id="ageGroup" formControlName="ageGroup" class="form-input select-input">
                <option value="">Select age group</option>
                <option value="7-10">7-10 years</option>
                <option value="11-15">11-15 years</option>
              </select>
              @if (isInvalid('ageGroup')) {
                <p class="form-error-msg" role="alert">Please choose an age group.</p>
              }
            </div>

            <div class="md:col-span-2">
              <label for="message" class="form-label">Notes / Dietary / Accessibility Requirements (Optional)</label>
              <textarea id="message" rows="4" formControlName="message" class="form-input" placeholder="Any specific requirements or comments..."></textarea>
            </div>

            @if (status() === 'error') {
              <p class="md:col-span-2 form-submit-error" role="alert">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                We couldn't submit the camp registration right now. Please try again.
              </p>
            }

            <div class="md:col-span-2 ticket-footer-block">
              <p class="ticket-footer-text">Pay securely with Paystack: NGN {{ formatAmount(campPrice) }}.</p>
              <button type="submit" [disabled]="form.invalid || loading()" [attr.aria-busy]="loading()" class="btn-submit-camp">
                {{ loading() ? 'Preparing Payment...' : 'Submit & Pay' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Paystack Checkout Overlay -->
    @if (paymentModalOpen() && paymentIframeUrl()) {
      <div class="camp-payment-overlay animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="camp-payment-title">
        <div class="camp-payment-dialog glass-card animate-slide-up" [style.top.px]="paymentDialogTop()" [style.left.px]="paymentDialogLeft()">
          <div class="camp-payment-header">
            <h3 id="camp-payment-title" class="text-base font-bold text-text-primary m-0">Pay with Paystack</h3>
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="btn-primary-camp !px-4 !py-2 text-xs"
                [disabled]="paymentVerificationStatus() === 'verifying'"
                (click)="verifyPaymentAndContinue()"
              >
                {{ paymentVerificationStatus() === 'verifying' ? 'Verifying...' : 'I have completed payment' }}
              </button>
              <button type="button" (click)="closePaymentModal()" class="close-modal-btn" aria-label="Close payment modal">&times;</button>
            </div>
          </div>
          <div class="px-4 py-2 border-b border-border-base bg-bg-subtle text-xs text-text-muted">
            Complete checkout in Paystack, then click "I have completed payment" to verify and continue.
          </div>
          <iframe class="w-full h-[calc(82svh-97px)]" [src]="paymentIframeUrl()" title="Paystack Checkout"></iframe>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      background-color: var(--surface-base);
    }

    /* Premium Ambient Background */
    .camp-hero {
      min-height: 90svh;
      padding-block-start: 140px;
      padding-block-end: 80px;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
      position: relative;
    }

    .camp-hero-glow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .ambient-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(130px);
      opacity: 0.5;
    }

    .blob-green {
      top: -10%;
      left: 5%;
      width: 40vw;
      height: 40vw;
      background: rgba(22, 198, 90, 0.08);
    }

    .blob-amber {
      top: 15%;
      right: 5%;
      width: 35vw;
      height: 35vw;
      background: rgba(245, 158, 11, 0.06);
    }

    .blob-purple {
      bottom: -10%;
      left: 20%;
      width: 45vw;
      height: 45vw;
      background: rgba(107, 116, 232, 0.05);
    }

    /* Custom Glassmorphism styles */
    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(226, 232, 240, 0.8);
      border-radius: 1.5rem;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 4px 30px rgba(15, 23, 42, 0.015);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.88);
      border-color: rgba(203, 213, 225, 0.9);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
    }

    /* Hero Text Styles */
    .camp-eyebrow {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      margin-bottom: 1.4rem;
      padding: 0.55rem 1.25rem;
      border: 1px solid var(--border-default);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.85);
      color: var(--green-600);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
      font-weight: 700;
    }

    .camp-title {
      font-size: clamp(2.8rem, 5.5vw, 4.5rem);
      line-height: 1.05;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.035em;
    }

    .camp-title .accent-title {
      color: var(--green-600);
      background: linear-gradient(135deg, var(--green-600) 0%, var(--green-500) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: block;
      margin-top: 0.08em;
    }

    .camp-copy {
      color: #475569; /* slate-600 */
      margin-bottom: 2.2rem;
      max-width: 38rem;
    }

    /* Custom Camp Buttons */
    .btn-primary-camp, .btn-secondary-camp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.95rem 2.5rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .btn-primary-camp {
      color: #ffffff;
      background: linear-gradient(90deg, var(--green-600) 0%, var(--green-500) 100%);
      box-shadow: 0 10px 25px rgba(22, 198, 90, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-primary-camp:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(22, 198, 90, 0.35);
      background: linear-gradient(90deg, var(--green-500) 0%, var(--green-400) 100%);
    }

    .btn-primary-camp:active {
      transform: scale(0.97);
    }

    .btn-secondary-camp {
      color: #334155; /* slate-700 */
      background: rgba(255, 255, 255, 0.8);
      border: 1.5px solid var(--border-default);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    }

    .btn-secondary-camp:hover {
      transform: translateY(-2px);
      background: #ffffff;
      border-color: var(--border-strong);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    }

    /* Details Grid */
    .camp-details-grid {
      margin-top: 2.8rem;
    }

    .detail-card {
      padding: 1.25rem 1.5rem;
    }

    .detail-label {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--green-600);
      margin-bottom: 0.35rem;
    }

    .detail-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    .detail-note {
      font-size: 0.85rem;
      color: #64748b; /* slate-500 */
      margin: 0.25rem 0 0 0;
      line-height: 1.4;
    }

    /* Flyer frame with double border & hover effect */
    .camp-flyer-frame {
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
      background: #ffffff;
      padding: 0.65rem;
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: 0 35px 85px rgba(15, 23, 42, 0.12);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .camp-flyer-frame:hover {
      transform: translateY(-6px) scale(1.01) rotate(0.5deg);
      box-shadow: 0 45px 100px rgba(15, 23, 42, 0.18);
    }

    .frame-shimmer {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 50%);
      pointer-events: none;
    }

    .camp-flyer-img {
      width: 100%;
      border-radius: 1.5rem;
      object-fit: cover;
      transition: transform 0.8s ease;
    }

    /* Benefit Cards */
    .benefit-card {
      padding: 1.8rem;
    }

    .benefit-icon-wrapper {
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      background: rgba(22, 198, 90, 0.08);
      border: 1px solid rgba(22, 198, 90, 0.15);
      color: var(--green-600);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      transition: all 0.3s ease;
    }

    .benefit-card:hover .benefit-icon-wrapper {
      transform: scale(1.1) rotate(5deg);
      background: var(--green-500);
      color: #ffffff;
    }

    .benefit-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 0.6rem 0;
    }

    .benefit-body {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #64748b;
      margin: 0;
    }

    /* Themes Section */
    .section-themes {
      background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
    }

    .section-themes-title {
      color: #0f172a;
      font-weight: 800;
      letter-spacing: -0.025em;
    }

    .themes-section-copy {
      color: #64748b;
    }

    .theme-card {
      padding: 2rem;
      background: rgba(255, 255, 255, 0.7);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .theme-card--0 { border-top: 4px solid var(--green-500); }
    .theme-card--1 { border-top: 4px solid var(--amber-500); }
    .theme-card--2 { border-top: 4px solid var(--rose-500); }

    .theme-badge {
      display: inline-flex;
      border-radius: 9999px;
      padding: 0.35rem 1.15rem;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 1.2rem;
      align-self: flex-start;
    }

    .theme-card-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 1.25rem 0;
      line-height: 1.2;
    }

    .theme-items-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2.2rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      flex-grow: 1;
    }

    .theme-items-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      font-size: 0.92rem;
      line-height: 1.4;
      color: #475569; /* slate-600 */
    }

    .item-check-icon {
      width: 1.05rem;
      height: 1.05rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .theme-card--0 .item-check-icon { color: var(--green-500); }
    .theme-card--1 .item-check-icon { color: var(--amber-500); }
    .theme-card--2 .item-check-icon { color: var(--rose-500); }

    /* Fun Projects inside Themes */
    .projects-box {
      padding: 1.1rem 1.35rem;
      border-radius: 1rem;
      background: rgba(248, 250, 252, 0.8);
      border-color: rgba(226, 232, 240, 0.6);
    }

    .theme-card:hover .projects-box {
      background: #ffffff;
      border-color: var(--border-default);
    }

    .projects-title {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #0f172a;
      margin: 0 0 0.45rem 0;
    }

    .projects-list {
      font-size: 0.85rem;
      font-weight: 600;
      color: #64748b;
      margin: 0;
      line-height: 1.4;
    }

    /* Registration Ticket Box */
    .section-register {
      background: #ffffff;
    }

    .registration-ticket {
      padding: 2.2rem;
      background: linear-gradient(135deg, rgba(239, 253, 245, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
      border: 1px solid rgba(22, 198, 90, 0.16);
      box-shadow: 0 25px 65px rgba(22, 198, 90, 0.05);
    }

    .ticket-header {
      margin-bottom: 1.8rem;
    }

    .ticket-overline {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--green-600);
      margin: 0 0 0.45rem 0;
    }

    .ticket-title {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color: #0f172a;
      margin: 0;
    }

    .ticket-price-wrapper {
      display: flex;
      align-items: baseline;
      gap: 0.6rem;
      margin-bottom: 1.25rem;
    }

    .currency-tag {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--green-600);
    }

    .price-value {
      font-size: 3.2rem;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .ticket-description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #475569;
      margin: 0 0 1.8rem 0;
    }

    .ticket-divider {
      height: 1px;
      background: rgba(22, 198, 90, 0.15);
      margin-block: 1.8rem;
    }

    .ticket-details-list {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
      margin: 0;
      padding: 0;
    }

    .ticket-details-list > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ticket-details-list dt {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #64748b;
    }

    .ticket-details-list dd {
      font-size: 1rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    /* Styled Form Card */
    .form-card {
      padding: 2.2rem;
      background: #ffffff;
      border: 1px solid rgba(226, 232, 240, 0.9);
      box-shadow: 0 25px 65px rgba(15, 23, 42, 0.04);
    }

    .form-label {
      font-size: 0.88rem;
      font-weight: 700;
      color: #334155; /* slate-700 */
      display: block;
      margin-bottom: 0.55rem;
    }

    .form-input {
      width: 100%;
      padding: 0.85rem 1.15rem;
      border-radius: 0.75rem;
      border: 1.5px solid var(--border-default);
      background: #ffffff;
      color: #0f172a;
      font-size: 0.95rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    .form-input::placeholder {
      color: #94a3b8;
    }

    .form-input:hover {
      border-color: var(--border-strong);
    }

    .form-input:focus-visible {
      border-color: var(--green-500);
      box-shadow: 0 0 0 4px rgba(22, 198, 90, 0.14);
      background: #ffffff;
      outline: none;
    }

    .select-input {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
      background-position: right 0.8rem center;
      background-repeat: no-repeat;
      background-size: 1.25rem;
      padding-right: 2.5rem;
    }

    .form-error-msg {
      color: var(--color-error);
      font-size: 0.75rem;
      margin: 0.35rem 0 0 0;
      font-weight: 600;
      animation: errorPop 0.2s ease forwards;
    }

    .form-submit-error {
      color: var(--color-error);
      background: rgba(239, 68, 68, 0.06);
      border: 1px solid rgba(239, 68, 68, 0.15);
      border-radius: 0.75rem;
      padding: 0.85rem 1.15rem;
      font-size: 0.88rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0;
    }

    .ticket-footer-block {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-faint);
    }

    @media (min-width: 640px) {
      .ticket-footer-block {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .ticket-footer-text {
      font-size: 0.88rem;
      color: #64748b;
      margin: 0;
      font-weight: 500;
    }

    .btn-submit-camp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.95rem 2.2rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ffffff;
      background: linear-gradient(90deg, var(--green-600) 0%, var(--green-500) 100%);
      box-shadow: 0 10px 25px rgba(22, 198, 90, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-submit-camp:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(22, 198, 90, 0.35);
      background: linear-gradient(90deg, var(--green-500) 0%, var(--green-400) 100%);
    }

    .btn-submit-camp:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    /* Modal styles */
    .camp-payment-overlay {
      position: fixed;
      inset: 0;
      z-index: 5000;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .camp-payment-overlay::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(8px);
    }

    .camp-payment-dialog {
      position: relative;
      z-index: 1;
      width: min(100%, 48rem);
      height: min(84svh, 45rem);
      overflow: hidden;
      background: #ffffff;
      border: 1px solid var(--border-default);
      box-shadow: 0 35px 100px rgba(0, 0, 0, 0.32);
    }

    .camp-payment-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.9rem 1.25rem;
      border-bottom: 1px solid var(--border-default);
    }

    .close-modal-btn {
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 1.8rem;
      line-height: 1;
      padding: 0 0.4rem;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .close-modal-btn:hover {
      color: #0f172a;
    }

    /* Anim Animations */
    .animate-fade-in {
      animation: fadeIn 0.4s ease forwards;
    }

    .animate-slide-up {
      animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes errorPop {
      from { transform: translateY(-4px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Dark Mode Styling Integration */
    :host-context(.dark) .camp-hero {
      background: linear-gradient(180deg, #09090b 0%, #121214 100%);
    }

    :host-context(.dark) .camp-hero-glow {
      opacity: 0.45;
    }

    :host-context(.dark) .glass-card {
      background: rgba(22, 22, 26, 0.75);
      border-color: rgba(61, 73, 104, 0.35);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    }

    :host-context(.dark) .glass-card:hover {
      background: rgba(30, 30, 36, 0.88);
      border-color: rgba(90, 103, 136, 0.45);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    }

    :host-context(.dark) .camp-eyebrow {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: #7df3b2;
      box-shadow: none;
    }

    :host-context(.dark) .camp-title {
      color: #f8fafc;
    }

    :host-context(.dark) .camp-title .accent-title {
      background: linear-gradient(135deg, #7df3b2 0%, #5ee49a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    :host-context(.dark) .camp-copy {
      color: #94a3b8;
    }

    :host-context(.dark) .btn-secondary-camp {
      color: #cbd5e1;
      background: rgba(255, 255, 255, 0.04);
      border-color: rgba(255, 255, 255, 0.1);
    }

    :host-context(.dark) .btn-secondary-camp:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
    }

    :host-context(.dark) .detail-value {
      color: #f1f5f9;
    }

    :host-context(.dark) .detail-note {
      color: #94a3b8;
    }

    :host-context(.dark) .camp-flyer-frame {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(22, 22, 26, 0.8);
      box-shadow: 0 35px 85px rgba(0, 0, 0, 0.45);
    }

    :host-context(.dark) .benefit-title {
      color: #f1f5f9;
    }

    :host-context(.dark) .benefit-body {
      color: #94a3b8;
    }

    :host-context(.dark) .section-themes {
      background: linear-gradient(180deg, #121214 0%, #09090b 100%);
    }

    :host-context(.dark) .section-themes-title {
      color: #f8fafc;
    }

    :host-context(.dark) .theme-card-title {
      color: #f1f5f9;
    }

    :host-context(.dark) .theme-items-list li {
      color: #94a3b8;
    }

    :host-context(.dark) .projects-box {
      background: rgba(9, 9, 11, 0.6);
      border-color: rgba(255, 255, 255, 0.05);
    }

    :host-context(.dark) .theme-card:hover .projects-box {
      background: rgba(22, 22, 26, 0.8);
    }

    :host-context(.dark) .projects-title {
      color: #cbd5e1;
    }

    :host-context(.dark) .projects-list {
      color: #94a3b8;
    }

    :host-context(.dark) .section-register {
      background: var(--surface-base);
    }

    :host-context(.dark) .registration-ticket {
      background: linear-gradient(135deg, rgba(22, 198, 90, 0.06) 0%, rgba(22, 22, 26, 0.95) 100%);
      border-color: rgba(22, 198, 90, 0.25);
    }

    :host-context(.dark) .ticket-title {
      color: #f8fafc;
    }

    :host-context(.dark) .price-value {
      color: #f1f5f9;
    }

    :host-context(.dark) .ticket-description {
      color: #94a3b8;
    }

    :host-context(.dark) .ticket-details-list dd {
      color: #f1f5f9;
    }

    :host-context(.dark) .form-card {
      background: rgba(22, 22, 26, 0.85);
      border-color: rgba(255, 255, 255, 0.06);
    }

    :host-context(.dark) .form-label {
      color: #cbd5e1;
    }

    :host-context(.dark) .form-input {
      background: rgba(9, 9, 11, 0.7);
      border-color: rgba(255, 255, 255, 0.1);
      color: #f1f5f9;
    }

    :host-context(.dark) .form-input:focus-visible {
      border-color: var(--green-500);
      box-shadow: 0 0 0 4px rgba(22, 198, 90, 0.2);
    }

    :host-context(.dark) .ticket-footer-text {
      color: #94a3b8;
    }

    :host-context(.dark) .camp-payment-dialog {
      background: rgba(22, 22, 26, 0.95);
      border-color: rgba(255, 255, 255, 0.1);
    }

    :host-context(.dark) .close-modal-btn:hover {
      color: #f8fafc;
    }

    /* Responsive grid layouts */
    @media (max-width: 1024px) {
      .camp-hero {
        padding-block-start: 120px;
        padding-block-end: 60px;
      }
      .camp-title {
        font-size: 3.2rem;
      }
      .camp-flyer-frame {
        max-width: 32rem;
        margin-inline: auto;
      }
    }

    @media (max-width: 640px) {
      .camp-hero {
        padding-block-start: 108px;
        padding-block-end: 48px;
      }
      .camp-title {
        font-size: 2.5rem;
      }
      .camp-flyer-frame {
        max-width: 100%;
      }
      .detail-card {
        padding: 1rem 1.2rem;
      }
      .benefit-card {
        padding: 1.4rem;
      }
      .theme-card {
        padding: 1.5rem;
      }
      .registration-ticket, .form-card {
        padding: 1.5rem;
      }
      .price-value {
        font-size: 2.5rem;
      }
      .ticket-title {
        font-size: 1.6rem;
      }
    }
  `],
})
export class FutureCreatorsTechCampComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly schema = inject(SchemaService);
  private readonly toast = inject(ToastService);

  readonly campPrice = 99999;
  readonly status = signal<'idle' | 'loading' | 'error'>('idle');
  readonly loading = computed(() => this.status() === 'loading');
  readonly paymentModalOpen = signal(false);
  readonly paymentIframeUrl = signal<SafeResourceUrl | null>(null);
  readonly paymentVerificationStatus = signal<'idle' | 'verifying'>('idle');
  readonly currentApplicationId = signal<string | null>(null);
  readonly currentPaymentReference = signal<string | null>(null);
  readonly paymentDialogTop = signal(0);
  readonly paymentDialogLeft = signal(0);

  readonly form = this.fb.nonNullable.group({
    parentName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)], updateOn: 'blur' }),
    email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    phone: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.pattern(/^(\+234|0)[789]\d{9}$/)], updateOn: 'blur' }),
    childName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)], updateOn: 'blur' }),
    ageGroup: this.fb.nonNullable.control<'7-10' | '11-15' | ''>('', { validators: [Validators.required], updateOn: 'change' }),
    message: this.fb.nonNullable.control('', { validators: [Validators.maxLength(500)], updateOn: 'blur' }),
  });

  readonly details: ReadonlyArray<CampDetail> = [
    { label: 'Age Groups', value: '7-10 and 11-15 years', note: 'Grouped for age-appropriate learning.' },
    { label: 'Duration', value: '3 weeks', note: 'A focused holiday learning experience.' },
    { label: 'Schedule', value: 'Weekdays', note: '2-4 hours per day.' },
    { label: 'Location', value: 'Virtual on Zoom', note: 'Live online practical sessions.' },
  ];

  readonly benefits = [
    {
      title: 'Boost Creativity',
      body: 'Children explore design, storytelling, and digital creation in a guided environment.',
      path: 'M12 3v3M12 18v3M4.22 5.64l2.12 2.12M17.66 16.24l2.12 2.12M3 12h3M18 12h3M4.22 18.36l2.12-2.12M17.66 7.76l2.12-2.12',
    },
    {
      title: 'Hands-On Learning',
      body: 'Learners build posters, games, quizzes, websites, and AI-assisted creative projects.',
      path: 'M4 5h16v11H4zM8 21h8M10 16v5M14 16v5',
    },
    {
      title: 'Teamwork',
      body: 'Small-group activities help children communicate, collaborate, and present their ideas.',
      path: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    },
    {
      title: 'Future-Ready Skills',
      body: 'The camp introduces practical technology habits early, with safety and curiosity at the center.',
      path: 'M5 13l4 4L19 7M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z',
    },
  ];

  readonly themes: ReadonlyArray<CampTheme> = [
    {
      week: 'Week 1',
      title: 'Digital & Creative Tech',
      items: ['Computer basics', 'Internet safety', 'Typing skills', 'Canva design', 'AI tools for kids', 'Digital storytelling', 'Creating presentations'],
      projects: ['Design a poster', 'Create your superhero brand', 'AI image generation'],
      accentClass: 'bg-green-50 text-green-700 border border-green-100',
    },
    {
      week: 'Week 2',
      title: 'Intro to Coding & Game Creation',
      items: ['Scratch programming', 'Logic building', 'Intro to websites', 'Animation basics', 'Game building'],
      projects: ['Build simple games', 'Animated stories', 'Interactive quiz'],
      accentClass: 'bg-amber-50 text-amber-700 border border-amber-100',
    },
    {
      week: 'Week 3',
      title: 'AI Explorers',
      items: ['What is AI?', 'ChatGPT for kids', 'AI image and art creation', 'Build simple websites with AI tools', 'Tech career exploration', 'Team presentations'],
      projects: ['Create with AI', 'Build a website', 'Team showcase'],
      accentClass: 'bg-rose-50 text-rose-700 border border-rose-100',
    },
  ];



  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'EducationEvent',
        name: 'Scalefort Future Creators Tech Camp',
        description: 'A 3-week holiday technology camp for children ages 7-15, starting August 2026.',
        startDate: '2026-08-03T09:00:00+01:00',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
          '@type': 'VirtualLocation',
          url: 'https://zoom.us',
        },
        offers: {
          '@type': 'Offer',
          price: '99999',
          priceCurrency: 'NGN',
          availability: 'https://schema.org/InStock',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Scalefort',
          url: 'https://www.scalefort.org',
        },
      },
      'schema-future-creators-tech-camp'
    );
  }

  ngOnDestroy(): void {
    this.unlockPageScroll();
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  updatePaymentDialogPosition(): void {
    if (!this.paymentModalOpen()) {
      return;
    }

    const hostTop = this.getHostDocumentTop();
    this.paymentDialogTop.set(window.scrollY + window.innerHeight / 2 - hostTop);
    this.paymentDialogLeft.set(window.innerWidth / 2);
  }

  isInvalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('loading');
    this.currentApplicationId.set(null);
    this.currentPaymentReference.set(null);

    const payload: FutureCreatorsTechCampPayload = {
      parentName: this.form.controls.parentName.value,
      email: this.form.controls.email.value,
      phone: this.form.controls.phone.value,
      childName: this.form.controls.childName.value,
      ageGroup: this.form.controls.ageGroup.value as '7-10' | '11-15',
      message: this.form.controls.message.value || undefined,
    };

    this.api.submitFutureCreatorsTechCamp(payload).subscribe({
      next: (response) => {
        const applicationId = response.data?.applicationId;
        if (!applicationId) {
          this.status.set('error');
          this.toast.error('Registration submitted but payment setup failed. Please contact support.');
          return;
        }

        this.initializePaystackCheckout(applicationId, payload.email);
      },
      error: () => {
        this.status.set('error');
        this.toast.error("We couldn't submit the camp registration right now. Please try again.");
      },
    });
  }

  verifyPaymentAndContinue(): void {
    const applicationId = this.currentApplicationId();
    const reference = this.currentPaymentReference();

    if (!applicationId || !reference) {
      this.toast.error('Missing payment reference. Please restart your payment.');
      return;
    }

    this.paymentVerificationStatus.set('verifying');
    this.api.verifyPaystackPayment(reference).subscribe({
      next: () => this.pollPaymentStatus(applicationId, 8),
      error: () => this.pollPaymentStatus(applicationId, 8),
    });
  }

  closePaymentModal(): void {
    this.paymentModalOpen.set(false);
    this.paymentIframeUrl.set(null);
    this.paymentVerificationStatus.set('idle');
    this.unlockPageScroll();
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(amount);
  }

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  private initializePaystackCheckout(applicationId: string, email: string): void {
    this.api
      .initializePaystackPayment(applicationId, {
        customerEmail: email,
        amount: this.campPrice,
        currency: 'NGN',
        orderReference: `SCF-CAMP-${Date.now()}`,
      })
      .subscribe({
        next: (payment) => {
          const trustedPaymentUrl = this.toTrustedPaystackUrl(payment.authorizationUrl);
          if (!trustedPaymentUrl) {
            this.status.set('error');
            this.toast.error('Invalid payment checkout URL returned. Please try again.');
            return;
          }

          this.currentApplicationId.set(applicationId);
          this.currentPaymentReference.set(payment.reference);
          this.paymentIframeUrl.set(trustedPaymentUrl);
          this.paymentModalOpen.set(true);
          this.lockPageScroll();
          this.updatePaymentDialogPosition();
          this.status.set('idle');
          this.toast.info('Complete payment in the modal to secure your child\'s spot.');
        },
        error: () => {
          this.status.set('error');
          this.toast.error('Unable to initialize payment right now. Please try again.');
        },
      });
  }

  private pollPaymentStatus(applicationId: string, remainingAttempts: number): void {
    this.api.getPaymentStatus(applicationId).subscribe({
      next: (statusResponse) => {
        if (statusResponse.success && statusResponse.data?.isPaid) {
          this.paymentVerificationStatus.set('idle');
          this.closePaymentModal();
          this.form.reset();
          this.toast.success('Payment verified. Your child\'s camp spot is confirmed.');
          return;
        }

        if (remainingAttempts > 0) {
          setTimeout(() => this.pollPaymentStatus(applicationId, remainingAttempts - 1), 2000);
          return;
        }

        this.paymentVerificationStatus.set('idle');
        this.toast.error('Payment not confirmed yet. Please wait a bit and click "I have completed payment" again.');
      },
      error: () => {
        if (remainingAttempts > 0) {
          setTimeout(() => this.pollPaymentStatus(applicationId, remainingAttempts - 1), 2000);
          return;
        }

        this.paymentVerificationStatus.set('idle');
        this.toast.error('Unable to confirm payment right now. Please try again.');
      },
    });
  }

  private toTrustedPaystackUrl(rawUrl: string): SafeResourceUrl | null {
    try {
      const parsed = new URL(rawUrl);
      const hostname = parsed.hostname.toLowerCase();
      const isPaystackHost = hostname === 'paystack.com' || hostname.endsWith('.paystack.com');

      if (parsed.protocol !== 'https:' || !isPaystackHost) {
        return null;
      }

      return this.sanitizer.bypassSecurityTrustResourceUrl(parsed.toString());
    } catch {
      return null;
    }
  }

  private lockPageScroll(): void {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('payment-modal-active');
  }

  private unlockPageScroll(): void {
    document.body.style.overflow = '';
    document.body.classList.remove('payment-modal-active');
  }

  private getHostDocumentTop(): number {
    const host = document.querySelector('app-future-creators-tech-camp');
    if (!host) {
      return 0;
    }

    return host.getBoundingClientRect().top + window.scrollY;
  }
}

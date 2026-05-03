import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-affiliate-policy',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-hero bg-bg-white relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

      <div class="container-base max-w-5xl">
        <header class="text-center mb-16" appAnimateOnScroll animateVariant="blur-up">
          <p class="overline overline-amber mb-4 inline-flex items-center rounded-pill border border-amber-200 bg-amber-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 shadow-sm">
            PARTNERSHIP PROGRAM
          </p>
          <h1 class="type-display text-text-primary mb-6 tracking-tight">ScaleFort Affiliate Policy</h1>
          <p class="type-body-l text-text-muted max-w-2xl mx-auto leading-relaxed">
            Empower the next generation of African tech talent while earning rewards.
            Partner with ScaleFort and earn for every successful referral.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 mt-10">
            @if (isAuthenticated()) {
              <a routerLink="/affiliate" class="btn-notify btn-lg">Go to Dashboard</a>
            } @else {
              <a routerLink="/register" class="btn-notify btn-lg">Become an Affiliate</a>
            }
            <a href="#how-it-works" class="btn-secondary btn-lg">How it Works</a>
          </div>
        </header>

        <!-- Dynamic Benefit Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          @for (stat of stats; track stat.label; let i = $index) {
          <article
            appAnimateOnScroll
            [animateDelay]="i * 100"
            animateVariant="scale-up"
            class="card-base text-center group active:scale-95 cursor-default"
          >
            <div
              class="w-14 h-14 bg-bg-subtle rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 group-hover:bg-amber-100 transition-colors duration-300"
            >
              {{ stat.icon }}
            </div>
            <p class="text-sm font-semibold overline overline-amber !mb-1 uppercase tracking-wider">{{ stat.label }}</p>
            <p class="text-h2 font-bold text-text-primary mb-1">{{ stat.value }}</p>
            <p class="text-sm text-text-muted">{{ stat.detail }}</p>
          </article>
          }
        </div>

        <div id="how-it-works" class="max-w-4xl mx-auto">
          <div class="space-y-6">
            @for (section of sections; track section.id; let i = $index) {
            <article
              appAnimateOnScroll
              [animateDelay]="150 + i * 50"
              [id]="section.id"
              class="card-base group hover:border-amber-500/30 transition-all duration-500"
            >
              <div class="flex items-start gap-5">
                <div
                  class="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center text-sm font-bold font-mono"
                >
                  {{ i + 1 }}
                </div>
                <div>
                  <h2 class="type-h3 text-text-primary mb-3">{{ section.title }}</h2>
                  <div class="type-body text-text-body leading-relaxed" [innerHTML]="section.content"></div>
                </div>
              </div>
            </article>
            }
          </div>

          <!-- Bottom CTA -->
          <div
            appAnimateOnScroll
            animateVariant="blur-up"
            class="card-base mt-12 bg-gradient-to-br from-amber-50 to-bg-white border-amber-100 text-center py-12"
          >
            <h2 class="type-h2 text-text-primary mb-3">
              {{ isAuthenticated() ? 'Review Your Stats' : 'Ready to Start Referring?' }}
            </h2>
            <p class="text-text-muted mb-8 max-w-lg mx-auto">
              {{ isAuthenticated() 
                ? 'Check your dashboard to track your current clicks, conversions, and earnings.' 
                : 'Join hundreds of affiliates already earning while building the tech ecosystem.' 
              }}
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              @if (isAuthenticated()) {
                <a routerLink="/affiliate" class="btn-notify">Go to Affiliate Dashboard</a>
              } @else {
                <a routerLink="/register" class="btn-notify">Create Free Affiliate Account</a>
              }
              <a href="mailto:support@scalefort.org" class="btn-ghost">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AffiliatePolicyComponent {
  private readonly auth = inject(AuthService);
  readonly isAuthenticated = this.auth.isAuthenticated;

  readonly stats = [
    { label: 'Commission', value: 'NGN 10k', detail: 'Per enrolled referral', icon: '💰' },
    { label: 'Tracking', value: '30 Days', detail: 'Persistent referral links', icon: '🔗' },
    { label: 'Payouts', value: 'Verified', detail: 'Secured after enrollment', icon: '✅' },
  ];

  readonly sections = [
    {
      id: 'overview',
      title: 'Program Overview',
      content:
        'The ScaleFort Affiliate Program allows individuals and organizations to earn rewards for contributing to the growth of our tech ecosystem. By referring talented individuals to our Tech School courses, you play a vital role in our mission to empower tech talent across Africa.',
    },
    {
      id: 'commission',
      title: 'Commission & Earnings',
      content:
        'Affiliates receive a flat commission of <strong>NGN 10,000</strong> for each referral who successfully enrolls and pays their course fees (full payment or consistent installments). Earnings are transparently tracked and accessible via your personal affiliate dashboard.',
    },
    {
      id: 'tracking',
      title: 'Tracking & Attribution',
      content:
        'We utilize persistent referral link parameters (e.g., <code>?ref=CODE</code>) to attribute enrollments to your account. When a user clicks your link and finishes their application, our system automatically links that enrollment to your affiliate profile.',
    },
    {
      id: 'payouts',
      title: 'Payout Schedule',
      content:
        'Payouts are processed after enrollment verification, typically following the first full week of classes. This ensuring that all referred students are successfully onboarded into their respective tech tracks.',
    },
    {
      id: 'marketing',
      title: 'Ethical Marketing',
      content:
        'We encourage authentic sharing on LinkedIn, WhatsApp, and other social channels. However, the use of automated spam, misleading advertisements, or representing yourself as a direct employee of ScaleFort is prohibited.',
    },
  ];
}



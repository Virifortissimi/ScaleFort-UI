import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../../shared/models/case-study.model';

interface PortfolioStat {
  value: string;
  label: string;
}

interface PortfolioCard extends CaseStudy {
  imageAlt: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
        <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-it/10 blur-3xl"></div>
        <div class="absolute top-[34rem] -left-20 h-72 w-72 rounded-full bg-particle/10 blur-3xl"></div>
      </div>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div class="max-w-2xl">
              <p class="overline mb-3">Portfolio</p>
              <h1 class="text-h1 font-bold text-text-primary mb-4">Selected IT Services Case Studies</h1>
              <p class="text-text-muted mb-8">
                Real delivery outcomes across product engineering, cloud, and enterprise integration projects.
              </p>
              <div class="flex flex-col gap-4 sm:flex-row">
                <a routerLink="/it-services/quote" class="btn-primary no-underline">Start Your Project</a>
                <a routerLink="/it-services" class="btn-secondary no-underline">Back to IT Services</a>
              </div>
              <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                @for (stat of portfolioStats; track stat.label) {
                  <article class="rounded-card border border-border-base bg-bg-subtle p-4 text-center">
                    <p class="text-xl font-extrabold tracking-tight text-text-primary">{{ stat.value }}</p>
                    <p class="mt-1 text-xs text-text-muted">{{ stat.label }}</p>
                  </article>
                }
              </div>
            </div>

            <div class="overflow-hidden rounded-[2rem] border border-border-base bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src="assets/images/services/hero-it-systems-board.svg"
                alt="IT services portfolio overview illustration"
                class="w-full rounded-[1.4rem] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 sm:py-10 bg-bg-subtle border-y border-border-base relative z-[1]">
        <div class="container-base">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-xs sm:text-sm font-semibold uppercase tracking-wide text-text-muted">Case Study Coverage</p>
              <h2 class="mt-2 text-h3 font-semibold text-text-primary">A focused sample of our client delivery work</h2>
            </div>
            <p class="max-w-2xl text-sm leading-7 text-text-muted">
              Some projects are presented in anonymised form to respect client confidentiality while still showing the kinds of delivery outcomes we help teams achieve.
            </p>
          </div>
        </div>
      </section>

      <section class="pb-16 pt-10 md:pb-24 bg-bg-subtle relative z-[1]">
        @if (loading()) {
          <div class="container-base grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            @for (item of [1, 2, 3]; track item) {
              <article class="card-base flex flex-col gap-4 animate-pulse" aria-hidden="true">
                <div class="h-44 rounded-xl bg-bg-white"></div>
                <div class="h-4 w-28 rounded bg-bg-white"></div>
                <div class="h-6 w-5/6 rounded bg-bg-white"></div>
                <div class="h-4 w-full rounded bg-bg-white"></div>
                <div class="h-4 w-11/12 rounded bg-bg-white"></div>
                <div class="h-4 w-4/6 rounded bg-bg-white"></div>
              </article>
            }
          </div>
        } @else if (caseStudies().length > 0) {
          <div class="container-base grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            @for (study of enrichedCaseStudies(); track study.client + study.sector) {
              <article class="card-base flex flex-col gap-4 overflow-hidden">
                <img
                  [src]="study.imageUrl"
                  [alt]="study.imageAlt"
                  class="h-44 w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div class="flex flex-wrap items-center gap-3">
                  <p class="text-xs font-semibold uppercase tracking-wide text-accent-it">{{ study.sector }}</p>
                  <span class="rounded-pill border border-border-base bg-bg-subtle px-3 py-1 text-[11px] text-text-muted">Confidential delivery</span>
                </div>
                <h2 class="text-h3 font-semibold text-text-primary">{{ study.client }}</h2>
                <div class="space-y-3 text-sm leading-7">
                  <p class="text-text-muted"><strong class="text-text-primary">Challenge:</strong> {{ study.challenge }}</p>
                  <p class="text-text-muted"><strong class="text-text-primary">Solution:</strong> {{ study.solution }}</p>
                  <p class="text-text-body"><strong class="text-text-primary">Result:</strong> {{ study.result }}</p>
                </div>
                <div class="mt-auto flex flex-wrap gap-2 pt-2">
                  @for (tech of study.techStack; track tech) {
                    <span class="rounded-pill border border-border-base bg-bg-subtle px-3 py-1 text-xs text-text-body">{{ tech }}</span>
                  }
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="container-base">
            <article class="card-base text-center">
              <h2 class="text-h3 font-semibold text-text-primary mb-2">No case studies published yet</h2>
              <p class="text-text-muted mb-6">Client-approved examples will appear here as soon as they are cleared.</p>
              <a routerLink="/it-services/quote" class="btn-secondary no-underline">Request a Consultation</a>
            </article>
          </div>
        }
      </section>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-5xl">
          <div class="rounded-[2rem] border border-border-base bg-bg-subtle p-8 sm:p-10">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div class="max-w-2xl">
                <p class="text-sm font-semibold text-accent-it">Ready to build with Scalefort?</p>
                <h2 class="mt-3 text-h2 font-bold text-text-primary">Let’s scope the right product, platform, or integration path for your business.</h2>
                <p class="mt-4 text-text-muted">
                  If you have an idea, an existing system to improve, or a delivery bottleneck to solve, we can help you shape the next step.
                </p>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a routerLink="/it-services/quote" class="btn-primary no-underline">Request Project Quote</a>
                <a routerLink="/contact" class="btn-secondary no-underline">Talk to Scalefort</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class PortfolioComponent implements OnInit {
  readonly loading = signal(true);
  readonly caseStudies = signal<ReadonlyArray<CaseStudy>>([]);
  readonly portfolioStats: ReadonlyArray<PortfolioStat> = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Business Clients' },
    { value: '3+', label: 'Years Building for Africa' },
  ];
  readonly enrichedCaseStudies = computed<ReadonlyArray<PortfolioCard>>(() =>
    this.caseStudies().map((study) => ({
      ...study,
      imageUrl: study.imageUrl ?? this.resolveImageForSector(study.sector),
      imageAlt: this.resolveAltForSector(study.sector),
    }))
  );

  private readonly initialCaseStudies: ReadonlyArray<CaseStudy> = [
    {
      client: 'Confidential Fintech Client',
      sector: 'Financial Services',
      challenge: 'Legacy onboarding flow caused drop-offs and delayed account activation.',
      solution:
        'Built a modern web onboarding flow, integrated secure KYC APIs, and introduced an automated verification pipeline.',
      result: 'Activation turnaround reduced from days to same-day onboarding for most applicants.',
      techStack: ['Angular', '.NET', 'REST APIs', 'PostgreSQL'],
      imageUrl: 'assets/images/services/service-api-development.svg',
    },
    {
      client: 'Confidential Retail Client',
      sector: 'E-Commerce',
      challenge: 'Checkout instability and fragmented payment logic impacted conversion reliability.',
      solution:
        'Re-architected checkout modules, integrated payment gateways with fallback logic, and hardened deployment pipelines.',
      result: 'Checkout reliability improved and customer support escalations dropped after release.',
      techStack: ['Angular', 'Node.js', 'Paystack', 'Docker'],
      imageUrl: 'assets/images/services/service-ecommerce.svg',
    },
    {
      client: 'Confidential Enterprise Client',
      sector: 'Corporate Training Operations',
      challenge: 'Manual reporting and disconnected systems slowed training programme delivery.',
      solution:
        'Implemented centralised APIs, reporting dashboards, and role-based workflows for training coordination.',
      result: 'Programme operations became measurable and reporting cycles shortened significantly.',
      techStack: ['Python', 'FastAPI', 'Power BI', 'Azure'],
      imageUrl: 'assets/images/services/service-cloud-devops.svg',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.caseStudies.set(this.initialCaseStudies);
      this.loading.set(false);
    }, 350);
  }

  private resolveImageForSector(sector: string): string {
    switch (sector) {
      case 'Financial Services':
        return 'assets/images/services/service-api-development.svg';
      case 'E-Commerce':
        return 'assets/images/services/service-ecommerce.svg';
      default:
        return 'assets/images/services/service-cloud-devops.svg';
    }
  }

  private resolveAltForSector(sector: string): string {
    switch (sector) {
      case 'Financial Services':
        return 'Financial services case study illustration';
      case 'E-Commerce':
        return 'E-commerce case study illustration';
      default:
        return 'Enterprise operations case study illustration';
    }
  }
}

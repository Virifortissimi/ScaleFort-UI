import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaService } from '../../core/services/schema.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface TrainingProgram {
  title: string;
  description: string;
  duration: string;
  size: string;
  image: string;
  imageAlt: string;
}

interface CorporateProofStat {
  value: number;
  suffix: string;
  label: string;
}

interface ApproachPoint {
  title: string;
  body: string;
}

@Component({
  selector: 'app-corporate-proof-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card-base text-center">
      <span class="block text-[clamp(2rem,5vw,3rem)] font-extrabold text-text-primary tracking-tighter leading-none">
        {{ count() }}{{ stat.suffix }}
      </span>
      <span class="mt-1 block text-sm text-text-muted">{{ stat.label }}</span>
    </div>
  `,
})
export class CorporateProofItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) stat!: CorporateProofStat;

  readonly count = signal(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.runCount();
        this.observer?.disconnect();
      },
      { threshold: 0.45 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private runCount(): void {
    const duration = 1400;
    const start = performance.now();

    const animate = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.count.set(Math.round(eased * this.stat.value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}

@Component({
  selector: 'app-corporate-training',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, CorporateProofItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
        <div class="absolute -top-24 left-0 h-72 w-72 rounded-full bg-accent-corporate/10 blur-3xl"></div>
        <div class="absolute top-[28rem] -right-28 h-[24rem] w-[24rem] rounded-full bg-particle/10 blur-3xl"></div>
        <div class="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-accent-school/10 blur-3xl"></div>
      </div>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div class="max-w-2xl">
              <div appAnimateOnScroll class="inline-flex items-center gap-2 rounded-full border border-border-base bg-bg-subtle px-4 py-2 text-sm font-semibold text-accent-corporate">
                <span class="inline-block h-2.5 w-2.5 rounded-full bg-accent-corporate"></span>
                Custom programs for teams of 5 to 100+
              </div>
              <h1 appAnimateOnScroll [animateDelay]="100" class="mt-5 text-h1 font-bold text-text-primary">
                Future-Proof Your Workforce
              </h1>
              <p appAnimateOnScroll [animateDelay]="170" class="mt-5 max-w-xl text-lg leading-8 text-text-muted">
                Transform your organisation's capabilities with tailored training solutions aligned directly with your business objectives and KPIs.
              </p>
              <div appAnimateOnScroll [animateDelay]="230" class="mt-8 flex flex-col gap-4 sm:flex-row">
                <a routerLink="/corporate-training/apply" class="btn-primary no-underline">Schedule a Consultation</a>
                <a [href]="corporateBrochurePath" download="Scalefort-Corporate-Training-Brochure.pdf" class="btn-secondary no-underline">
                  Download Corporate Brochure
                </a>
              </div>
              <div appAnimateOnScroll [animateDelay]="300" class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                @for (highlight of heroHighlights; track highlight.title) {
                  <article class="rounded-card border border-border-base bg-bg-subtle p-4">
                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-accent-corporate">{{ highlight.title }}</p>
                    <p class="mt-2 text-sm leading-6 text-text-muted">{{ highlight.body }}</p>
                  </article>
                }
              </div>
            </div>

            <div appAnimateOnScroll [animateDelay]="180" class="relative">
              <div class="relative overflow-hidden rounded-[2rem] border border-border-base bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <img
                  [src]="heroImage"
                  alt="Custom corporate training dashboard and workshop planning illustration"
                  class="w-full rounded-[1.4rem] object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-4">
                  @for (stat of proofStats; track stat.label) {
                    <div class="rounded-2xl bg-bg-subtle px-3 py-4 text-center">
                      <p class="text-xl font-extrabold tracking-tight text-text-primary">{{ stat.value }}{{ stat.suffix }}</p>
                      <p class="mt-1 text-xs text-text-muted">{{ stat.label }}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 sm:py-10 bg-bg-subtle border-y border-border-base relative z-[1]" aria-label="Corporate training proof points">
        <div class="container-base">
          <div appAnimateOnScroll class="text-center mb-8">
            <p class="text-xs sm:text-sm font-semibold uppercase tracking-wide text-text-muted">Upskilling Outcomes</p>
            <h2 class="text-h3 font-semibold text-text-primary mt-2">Training programs designed for measurable business impact</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            @for (stat of proofStats; track stat.label) {
              <app-corporate-proof-item [stat]="stat" />
            }
          </div>
        </div>
      </section>

      <section class="bg-bg-white py-4 border-b border-border-base sticky top-[72px] z-10">
        <div class="container-base flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-sm text-text-body text-center sm:text-left">Need a custom curriculum mapped to your team KPIs?</p>
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a routerLink="/corporate-training/apply" class="btn-primary no-underline w-full sm:w-auto">Request Team Assessment</a>
            <a routerLink="/contact" class="btn-secondary no-underline w-full sm:w-auto">Talk to Training Lead</a>
          </div>
        </div>
      </section>

      <section class="section bg-bg-subtle relative z-[1]">
        <div class="container-base">
          <h2 appAnimateOnScroll class="text-h2 font-bold text-text-primary mb-10 text-center">Training Programmes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (program of programs; track program.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="100 + (i * 70)" class="card-base overflow-hidden">
                <img
                  [src]="program.image"
                  [alt]="program.imageAlt"
                  class="w-full h-44 object-cover rounded-xl mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ program.title }}</h3>
                <p class="text-text-body mb-4">{{ program.description }}</p>
                <p class="text-sm text-text-muted">Duration: {{ program.duration }}</p>
                <p class="text-sm text-text-muted">Group Size: {{ program.size }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <article class="card-base p-3">
              <img
                [src]="approachImage"
                alt="Workshop planning and outcome tracking illustration for a corporate training engagement"
                class="h-[20rem] sm:h-[24rem] w-full rounded-card object-cover"
                loading="lazy"
                decoding="async"
              />
            </article>
            <div>
              <p class="text-sm font-semibold text-accent-corporate mb-2">Our Approach</p>
              <h2 class="text-h2 font-bold text-text-primary mb-4">Aligning learning outcomes with business goals</h2>
              <p class="text-text-muted mb-5">
                We design training programs that directly contribute to your organisational KPIs and team capability goals.
              </p>
              <div class="space-y-3">
                @for (point of approach; track point.title) {
                  <article class="rounded-card border border-border-base bg-bg-subtle p-4">
                    <h3 class="text-base font-semibold text-text-primary mb-1">{{ point.title }}</h3>
                    <p class="text-sm text-text-muted">{{ point.body }}</p>
                  </article>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-bg-subtle relative z-[1]">
        <div class="container-base max-w-6xl">
          <div appAnimateOnScroll class="text-center mb-10">
            <p class="overline mb-2">Why Scalefort</p>
            <h2 class="text-h2 font-bold text-text-primary mb-3">A delivery-oriented training partner</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            @for (point of differentiators; track point.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="120 + (i * 70)" class="card-base">
                <h3 class="text-base font-semibold text-text-primary mb-2">{{ point.title }}</h3>
                <p class="text-sm text-text-muted">{{ point.body }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-5xl">
          <div class="rounded-[2rem] border border-border-base bg-bg-subtle p-8 sm:p-10">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div class="max-w-2xl">
                <p class="text-sm font-semibold text-accent-corporate">Training scoped for your real roadmap</p>
                <h2 class="mt-3 text-h2 font-bold text-text-primary">Bring us your team goals. We’ll shape the right programme around them.</h2>
                <p class="mt-4 text-text-muted">
                  Start with a consultation, align on participants and outcomes, then choose a program that fits your business goals.
                </p>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a routerLink="/corporate-training/apply" class="btn-primary no-underline">Start Team Enquiry</a>
                <a routerLink="/contact" class="btn-secondary no-underline">Speak to Scalefort</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class CorporateTrainingComponent implements OnInit {
  private readonly schema = inject(SchemaService);
  readonly corporateBrochurePath = 'assets/pdf/Scalefort Corporate Training Professional Brochure Design.pdf.pdf';
  readonly heroImage = 'assets/images/corporate/hero-training-command-center.svg';
  readonly approachImage = 'assets/images/corporate/approach-workshop-floor.svg';

  readonly heroHighlights: ReadonlyArray<ApproachPoint> = [
    {
      title: 'Skills Gap Analysis',
      body: 'Map current capability levels and identify the highest-priority skill gaps to close first.',
    },
    {
      title: 'Custom Curriculum',
      body: 'Tailor training content to your stack, workflows, team maturity, and business objectives.',
    },
    {
      title: 'ROI Tracking',
      body: 'Use competency-based assessments and business-aligned outcomes to measure training impact.',
    },
  ];

  readonly proofStats: ReadonlyArray<CorporateProofStat> = [
    { value: 5, suffix: '+', label: 'Corporate Partners' },
    { value: 100, suffix: '+', label: 'Professionals Trained' },
    { value: 98, suffix: '%', label: 'Satisfaction Score' },
    { value: 6, suffix: '+', label: 'Training Tracks' },
  ];

  readonly programs: ReadonlyArray<TrainingProgram> = [
    {
      title: 'Technical Upskilling',
      description: 'Modern software development practices and cloud technologies for engineering teams.',
      duration: '3 Weekends',
      size: '5-50 Participants',
      image: 'assets/images/corporate/program-technical-upskilling.svg',
      imageAlt: 'Technical upskilling illustration with dashboards, progress charts, and workshop panels',
    },
    {
      title: 'Leadership in Tech',
      description: 'For tech leaders managing distributed teams and digital transformation initiatives across the organisation.',
      duration: '8 Hours',
      size: '5-20 Participants',
      image: 'assets/images/corporate/program-agentic-programming.svg',
      imageAlt: 'Leadership in tech illustration with planning boards and team coordination visuals',
    },
    {
      title: 'Agile Transformation',
      description: 'Implement agile practices across engineering and business teams. Covers Scrum, Kanban, and SAFe frameworks.',
      duration: '6 Hours',
      size: '10-100 Participants',
      image: 'assets/images/corporate/program-agile-transformation.svg',
      imageAlt: 'Agile transformation illustration with feedback loops and sprint planning visuals',
    },
    {
      title: 'Cloud Migration',
      description: 'Enterprise cloud strategy and migration training. Covers AWS, Azure, GCP, and best practices for cost-optimised cloud adoption.',
      duration: '6 Hours',
      size: '5-30 Participants',
      image: 'assets/images/corporate/program-cloud-migration.svg',
      imageAlt: 'Cloud migration illustration with server connections and cloud architecture view',
    },
    {
      title: 'Data Literacy',
      description: 'Building data-driven decision-making across departments. No coding required and focused on interpretation and business impact.',
      duration: '6 Hours',
      size: '10-100 Participants',
      image: 'assets/images/corporate/program-data-literacy.svg',
      imageAlt: 'Data literacy illustration with trend lines and analytics boards',
    },
    {
      title: 'Cybersecurity Awareness',
      description: 'Enterprise security best practices and threat management for technical and non-technical staff.',
      duration: '8 Hours',
      size: '5-50 Participants',
      image: 'assets/images/corporate/program-cybersecurity-awareness.svg',
      imageAlt: 'Cybersecurity awareness illustration with shield, lock, and secure system panels',
    },
  ];

  readonly approach: ReadonlyArray<ApproachPoint> = [
    {
      title: 'Skills Gap Analysis',
      body: 'Baseline team capability and prioritise modules that address the highest business-impact gaps first.',
    },
    {
      title: 'Custom Curriculum Design',
      body: 'Build focused training content around your stack, workflows, and delivery constraints.',
    },
    {
      title: 'Blended Delivery Model',
      body: 'Mix workshops, e-learning, and hands-on projects for stronger retention and application.',
    },
    {
      title: 'Outcome Tracking',
      body: 'Track competency improvements with assessments and business-aligned outcomes.',
    },
  ];

  readonly differentiators: ReadonlyArray<ApproachPoint> = [
    {
      title: 'Practitioner-Led',
      body: 'Facilitators are active industry operators with current delivery experience.',
    },
    {
      title: 'Fully Custom',
      body: 'Programs are adapted to your sector, team size, and capability goals.',
    },
    {
      title: 'ROI Focused',
      body: 'Learning plans map to measurable outcomes across engineering and operations.',
    },
    {
      title: 'Flexible Delivery',
      body: 'On-site, virtual, and hybrid options to fit your internal cadence.',
    },
  ];

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Scalefort Corporate Training',
        areaServed: 'Nigeria',
        provider: { '@type': 'Organization', name: 'Scalefort' },
      },
      'schema-corporate-training'
    );
  }
}



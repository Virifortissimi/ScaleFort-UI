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

interface ServiceItem {
  title: string;
  body: string;
  tags: readonly string[];
  image: string;
  imageAlt: string;
}

interface ServiceProofStat {
  value: number;
  suffix: string;
  label: string;
}

interface CaseStudySnapshot {
  title: string;
  sector: string;
  result: string;
  image: string;
  imageAlt: string;
}

interface ProcessStep {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-service-proof-item',
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
export class ServiceProofItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) stat!: ServiceProofStat;

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
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, ServiceProofItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
        <div class="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent-it/10 blur-3xl"></div>
        <div class="absolute top-[34rem] -left-24 h-80 w-80 rounded-full bg-particle/10 blur-3xl"></div>
        <div class="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent-corporate/10 blur-3xl"></div>
      </div>

      <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
        <div class="container-base">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div class="max-w-2xl">
              <p appAnimateOnScroll [animateDelay]="70" class="overline mb-3">
                50+ Projects Delivered | 98% Client Satisfaction
              </p>
              <h1 appAnimateOnScroll [animateDelay]="120" class="text-h1 font-bold text-text-primary mb-4">
                Full-Cycle IT Solutions for Modern Businesses
              </h1>
              <p appAnimateOnScroll [animateDelay]="180" class="text-text-muted mb-8">
                From concept to deployment, we deliver cutting-edge digital solutions that drive growth, innovation, and transformation for businesses of all sizes.
              </p>
              <div appAnimateOnScroll [animateDelay]="230" class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/it-services/quote" class="btn-primary no-underline">Start Your Project</a>
                <a routerLink="/contact" class="btn-secondary no-underline">Schedule a Free Consultation</a>
              </div>
            </div>
            <div appAnimateOnScroll [animateDelay]="180" class="overflow-hidden rounded-[2rem] border border-border-base bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                [src]="heroImage"
                alt="IT services planning board showing delivery, cloud, and product systems"
                class="w-full rounded-[1.4rem] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 sm:py-10 bg-bg-subtle border-y border-border-base relative z-[1]" aria-label="IT services proof points">
        <div class="container-base">
          <div appAnimateOnScroll class="text-center mb-8">
            <p class="text-xs sm:text-sm font-semibold uppercase tracking-wide text-text-muted">Delivery Confidence</p>
            <h2 class="text-h3 font-semibold text-text-primary mt-2">Measured impact from architecture to launch</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            @for (stat of proofStats; track stat.label) {
              <app-service-proof-item [stat]="stat" />
            }
          </div>
          <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none p-0">
            @for (chip of trustChips; track chip; let i = $index) {
              <li appAnimateOnScroll [animateDelay]="100 + (i * 60)" class="rounded-pill border border-border-base bg-bg-white px-4 py-2.5 text-sm text-text-body text-center">
                {{ chip }}
              </li>
            }
          </ul>
        </div>
      </section>

      <section class="bg-bg-white py-4 border-b border-border-base sticky top-[72px] z-10">
        <div class="container-base flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-sm text-text-body text-center sm:text-left">Need architecture guidance before committing to build?</p>
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a routerLink="/it-services/quote" class="btn-primary no-underline w-full sm:w-auto">Get Project Estimate</a>
            <a routerLink="/contact" class="btn-secondary no-underline w-full sm:w-auto">Book 30-Min Call</a>
          </div>
        </div>
      </section>

      <section class="section bg-bg-subtle relative z-[1]">
        <div class="container-base">
          <h2 appAnimateOnScroll class="text-h2 font-bold text-text-primary mb-10 text-center">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (item of services; track item.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="100 + (i * 70)" class="card-base flex flex-col gap-4 overflow-hidden">
                <img
                  [src]="item.image"
                  [alt]="item.imageAlt"
                  class="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="text-h3 font-semibold text-text-primary">{{ item.title }}</h3>
                <p class="text-text-body flex-1">{{ item.body }}</p>
                <p class="text-sm text-text-muted">{{ item.tags.join(' | ') }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-6xl">
          <div appAnimateOnScroll class="text-center mb-10">
            <p class="overline mb-2">Our Development Process</p>
            <h2 class="text-h2 font-bold text-text-primary mb-3">A clear delivery path from idea to launch</h2>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            @for (step of processSteps; track step.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="100 + (i * 70)" class="card-base overflow-hidden">
                <img
                  [src]="step.image"
                  [alt]="step.imageAlt"
                  class="mb-4 h-36 w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ step.title }}</h3>
                <p class="text-sm leading-7 text-text-muted">{{ step.body }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-6xl">
          <div appAnimateOnScroll class="text-center mb-10">
            <p class="overline mb-2">Technology Stack</p>
            <h2 class="text-h2 font-bold text-text-primary mb-3">Technologies we work with</h2>
            <p class="text-text-muted max-w-3xl mx-auto">
              We select technologies based on reliability, speed to value, and long-term maintainability.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            @for (stack of stackGroups; track stack.label; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="100 + (i * 70)" class="card-base">
                <p class="text-xs font-semibold uppercase tracking-wide text-text-muted mb-3">{{ stack.label }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (item of stack.items; track item) {
                    <span class="rounded-pill border border-border-base bg-bg-subtle px-3 py-1 text-xs text-text-body">{{ item }}</span>
                  }
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="section bg-bg-subtle relative z-[1]">
        <div class="container-base">
          <div appAnimateOnScroll class="text-center mb-10">
            <p class="text-sm font-semibold text-accent-it mb-2">Portfolio Snapshot</p>
            <h2 class="text-h2 font-bold text-text-primary mb-3">Recent delivery outcomes</h2>
            <p class="text-text-muted max-w-3xl mx-auto">A sample of projects where we moved teams from idea to production outcomes.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (caseStudy of caseStudies; track caseStudy.title; let i = $index) {
              <article appAnimateOnScroll [animateDelay]="120 + (i * 70)" class="card-base overflow-hidden">
                <img [src]="caseStudy.image" [alt]="caseStudy.imageAlt" class="w-full h-44 object-cover rounded-xl mb-4" loading="lazy" decoding="async" />
                <p class="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">{{ caseStudy.sector }}</p>
                <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ caseStudy.title }}</h3>
                <p class="text-sm text-text-body">{{ caseStudy.result }}</p>
              </article>
            }
          </div>
          <div class="mt-8 text-center">
            <a routerLink="/it-services/portfolio" class="btn-primary no-underline w-full sm:w-auto">View Full Portfolio</a>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ServicesComponent implements OnInit {
  private readonly schema = inject(SchemaService);
  readonly heroImage = 'assets/images/services/hero-it-systems-board.svg';

  readonly proofStats: ReadonlyArray<ServiceProofStat> = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 10, suffix: '+', label: 'Business Clients' },
    { value: 3, suffix: '+', label: 'Years Building for Africa' },
  ];

  readonly trustChips: ReadonlyArray<string> = [
    'Security-first architecture',
    'Cloud and DevOps enabled',
    'Product + engineering partnership',
    'Transparent sprint reporting',
  ];

  readonly services: ReadonlyArray<ServiceItem> = [
    {
      title: 'Custom Web Development',
      body: 'Tailored web applications built with modern frameworks and scalable architectures. Responsive, fast, and SEO-friendly.',
      tags: ['Angular', 'Node.js', '.NET', 'TypeScript'],
      image: 'assets/images/services/service-web-development.svg',
      imageAlt: 'Custom web development illustration with interface panels and code views',
    },
    {
      title: 'E-Commerce Solutions',
      body: 'Complete online store development with secure payment integration, inventory management, and shopping cart systems.',
      tags: ['WooCommerce', 'Shopify', 'Paystack', 'Flutterwave'],
      image: 'assets/images/services/service-ecommerce.svg',
      imageAlt: 'E-commerce illustration with storefront, payments, and cart workflow',
    },
    {
      title: 'Cloud Integration & DevOps',
      body: 'Cloud infrastructure setup, migration services, and automated deployment pipelines. AWS, Azure, and GCP experts.',
      tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'assets/images/services/service-cloud-devops.svg',
      imageAlt: 'Cloud integration and DevOps illustration with connected services and pipelines',
    },
    {
      title: 'API Development',
      body: 'Custom REST and GraphQL API development with third-party integrations and microservices architecture.',
      tags: ['REST', 'GraphQL', 'Node.js', '.NET', 'Python'],
      image: 'assets/images/services/service-api-development.svg',
      imageAlt: 'API development illustration with service nodes and integration mapping',
    },
    {
      title: 'Maintenance & Support',
      body: 'Ongoing performance optimisation, security updates, and 24/7 monitoring to keep your systems running at peak performance.',
      tags: ['24/7 Monitoring', 'Security Updates', 'Performance Optimisation'],
      image: 'assets/images/services/service-support.svg',
      imageAlt: 'Maintenance and support illustration with uptime monitoring and response tracking',
    },
    {
      title: 'UI/UX Design',
      body: 'User-centred interface design and prototyping. From wireframes to interactive prototypes validated through user testing.',
      tags: ['Figma', 'User Testing', 'Design Systems', 'Prototyping'],
      image: 'assets/images/services/service-uiux.svg',
      imageAlt: 'UI and UX design illustration with wireframes, layouts, and design system cards',
    },
  ];

  readonly stackGroups: ReadonlyArray<{ label: string; items: readonly string[] }> = [
    { label: 'Frontend', items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { label: 'Backend', items: ['Node.js', 'Python', '.NET', 'Django', 'FastAPI'] },
    { label: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
    { label: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
    { label: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { label: 'Design', items: ['Figma', 'Adobe XD'] },
  ];

  readonly processSteps: ReadonlyArray<ProcessStep> = [
    {
      title: 'Discovery & Planning',
      body: 'Requirement analysis, project scoping, and technical architecture planning.',
      image: 'assets/images/services/process-discovery-planning.svg',
      imageAlt: 'Discovery and planning illustration with planning cards and architecture mapping',
    },
    {
      title: 'Design & Prototyping',
      body: 'UI/UX design and interactive prototyping validated with stakeholders.',
      image: 'assets/images/services/process-design-prototyping.svg',
      imageAlt: 'Design and prototyping illustration with wireframes and interface panels',
    },
    {
      title: 'Development',
      body: 'Agile sprints with weekly demos, transparent progress, and iterative delivery.',
      image: 'assets/images/services/process-development.svg',
      imageAlt: 'Development illustration with code panels and sprint progress chart',
    },
    {
      title: 'Deployment & Support',
      body: 'CI/CD implementation, production launch, and ongoing maintenance.',
      image: 'assets/images/services/process-deployment-support.svg',
      imageAlt: 'Deployment and support illustration with release tracking and monitoring bars',
    },
  ];

  readonly caseStudies: ReadonlyArray<CaseStudySnapshot> = [
    {
      title: 'SME E-Commerce Platform Upgrade',
      sector: 'Retail',
      result: 'Built a faster checkout flow and integrated secure payment, reducing cart drop-offs and improving purchase completion.',
      image: 'assets/images/services/service-ecommerce.svg',
      imageAlt: 'E-commerce project case study illustration',
    },
    {
      title: 'Operations Dashboard for Service Team',
      sector: 'Logistics',
      result: 'Designed and deployed a real-time dashboard for task monitoring, improving decision speed and cross-team visibility.',
      image: 'assets/images/services/service-web-development.svg',
      imageAlt: 'Operations dashboard project case study illustration',
    },
    {
      title: 'Cloud Migration and API Consolidation',
      sector: 'Financial Services',
      result: 'Migrated legacy services to cloud infrastructure and streamlined API architecture for better reliability and maintainability.',
      image: 'assets/images/services/service-cloud-devops.svg',
      imageAlt: 'Cloud migration and API case study illustration',
    },
  ];

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Scalefort IT Services',
        areaServed: 'Nigeria',
        provider: { '@type': 'Organization', name: 'Scalefort' },
      },
      'schema-it-services'
    );
  }
}



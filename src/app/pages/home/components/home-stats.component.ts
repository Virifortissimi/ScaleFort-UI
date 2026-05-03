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
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-home-stat-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center py-6 card-base">
      <span class="block text-[clamp(2rem,5vw,3rem)] font-extrabold text-text-primary tracking-tighter leading-none mb-1">
        {{ count() }}{{ stat.suffix }}
      </span>
      <span class="text-sm text-text-muted">{{ stat.label }}</span>
    </div>
  `,
})
export class HomeStatItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) stat!: Stat;

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
  selector: 'app-home-stats',
  standalone: true,
  imports: [HomeStatItemComponent, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white relative z-[1]" aria-label="Scalefort proof and outcomes">
      <div class="dot-grid-section" aria-hidden="true"></div>
      <div class="container-base relative z-10">
        <div appAnimateOnScroll class="text-center mb-12">
          <p class="overline mb-4">Proof That Compounds</p>
          <h2 class="type-h3 text-text-primary">Reliable outcomes across training and delivery</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          @for (stat of stats; track stat.label) {
            <app-home-stat-item [stat]="stat" class="group hover:-translate-y-1 transition-transform" />
          }
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          @for (chip of trustChips; track chip; let i = $index) {
            <div 
              appAnimateOnScroll 
              [animateDelay]="80 + (i * 60)" 
              class="rounded-pill border border-border-base bg-bg-subtle/50 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-text-tertiary shadow-sm"
            >
              {{ chip }}
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HomeStatsComponent {
  readonly stats: ReadonlyArray<Stat> = [
    { value: 100, suffix: '+', label: 'Learners Served' },
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 5, suffix: '+', label: 'Corporate Partners' },
    { value: 3, suffix: '', label: 'Cohorts Completed' },
  ];

  readonly trustChips: ReadonlyArray<string> = [
    'NDPR/GDPR Compliant',
    'Enterprise-ready workflows',
    'Hands-on project delivery',
    'Lagos-based, Africa-focused',
  ];
}

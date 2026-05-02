import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { services, Service } from './services.data';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pt-16" *ngIf="service">
      <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
        <div class="container-base max-w-4xl text-center">
          <p class="overline overline-amber mb-2">IT Service Detail</p>
          <span class="text-5xl mb-5 block" aria-hidden="true">{{ service.icon }}</span>
          <h1 class="text-h1 font-bold text-text-primary mb-4">{{ service.title }}</h1>
          <p class="text-text-body max-w-3xl mx-auto">{{ service.description }}</p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a routerLink="/it-services/quote" class="btn-primary no-underline">Start a Project Discussion</a>
            <a routerLink="/contact" class="btn-secondary no-underline">Contact Us</a>
          </div>
        </div>
      </section>

      <section appAnimateOnScroll class="section-compact bg-bg-subtle">
        <div class="container-base">
          <div class="text-center mb-10">
            <p class="overline mb-2">Key Benefits</p>
            <h2 class="text-h2 font-bold text-text-primary">Why teams choose this service</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article *ngFor="let benefit of service.benefits" class="card-base bg-bg-white">
              <div class="flex items-start gap-3">
                <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-green-50 text-accent-school font-bold">+</span>
                <p class="text-text-body">{{ benefit }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section appAnimateOnScroll class="section bg-bg-white">
        <div class="container-base">
          <div class="text-center mb-10">
            <p class="overline overline-amber mb-2">Delivery Process</p>
            <h2 class="text-h2 font-bold text-text-primary">How we execute</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
            <article *ngFor="let step of service.process; let i = index" class="card-base text-center">
              <div class="w-12 h-12 mx-auto rounded-full bg-accent-school text-white flex items-center justify-center text-lg font-bold mb-4">
                {{ i + 1 }}
              </div>
              <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ step.title }}</h3>
              <p class="text-text-body text-sm">{{ step.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section appAnimateOnScroll class="section-compact bg-bg-subtle">
        <div class="container-base">
          <div class="text-center mb-10">
            <p class="overline mb-2">Competitive Edge</p>
            <h2 class="text-h2 font-bold text-text-primary">Why partner with Scalefort</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article *ngFor="let reason of service.whyUs" class="card-base bg-bg-white">
              <div class="flex items-start gap-3">
                <span class="inline-flex w-8 h-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">*</span>
                <p class="text-text-body">{{ reason }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section appAnimateOnScroll class="section bg-bg-white border-t border-border-base">
        <div class="container-base max-w-4xl text-center">
          <h2 class="text-h2 font-bold text-text-primary mb-4">Ready to move forward?</h2>
          <p class="text-text-body mb-8">
            Let us discuss how {{ service.title.toLowerCase() }} can accelerate your business outcomes.
          </p>
          <a href="mailto:sales@scalefort.org" class="btn-primary no-underline">Contact Sales</a>
        </div>
      </section>
    </div>
  `,
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service = services.find((s) => s.id === id);
  }
}

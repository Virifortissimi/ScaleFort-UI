import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home-video',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll [animateDelay]="80" class="text-center max-w-3xl mx-auto mb-16">
          <p class="overline mb-4 text-accent-school">Student Spotlight</p>
          <h2 class="type-h2 text-text-primary mb-6 tracking-tight">Inside the Scalefort Learning Experience</h2>
          <p class="type-body text-text-muted leading-relaxed">
            From live classes to mentorship and project reviews, these moments capture the energy and focus of our thriving tech community.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (video of [1, 2, 3]; track video; let i = $index) {
            <article 
              appAnimateOnScroll 
              [animateDelay]="140 + (i * 100)" 
              class="card-base bg-bg-white p-3 group hover:shadow-2xl transition-all duration-700 border-border-faint relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img
                [src]="'assets/images/home/home-video-' + video + '.png'"
                [alt]="'Scalefort learning moment ' + video"
                class="h-64 w-full rounded-card object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
                decoding="async"
              />
              <div class="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg">
                   <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class HomeVideoComponent {}



import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../shared/data/blog-posts.data';
import { BlogPost } from '../../shared/models/blog-post.model';
import { ParticleFieldComponent } from '../../shared/components/particle-field.component';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, ParticleFieldComponent, MagneticDirective, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <section appAnimateOnScroll class="relative overflow-hidden bg-bg-white section-hero z-[1]">
      <div class="hero-orbs" aria-hidden="true">
        <div class="orb orb-green"></div>
        <div class="orb orb-amber"></div>
        <div class="orb orb-violet"></div>
      </div>
      <div class="dot-grid-hero" aria-hidden="true"></div>
      <app-particle-field density="normal" variant="light" />

      <div class="container-base relative z-10">
        <div class="max-w-4xl">
          <p appAnimateOnScroll [animateDelay]="80" class="overline mb-6">Scalefort Insights</p>
          <h1 appAnimateOnScroll [animateDelay]="120" class="type-display text-text-primary mb-6">
            Tech Insights, Career Guidance, and Delivery Playbooks
          </h1>
          <p appAnimateOnScroll [animateDelay]="180" class="type-body-l text-text-muted max-w-2xl mb-10">
            Practical content for learners, founders, and teams building digital products across Africa.
          </p>
        </div>

        <!-- Featured Post -->
        @if (loading()) {
          <div class="animate-pulse card-base bg-bg-white/40 backdrop-blur-sm border border-border-base p-6 md:p-10 rounded-card grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="aspect-[16/10] bg-bg-subtle rounded-xl"></div>
            <div>
              <div class="h-4 w-32 bg-bg-subtle rounded mb-6"></div>
              <div class="h-10 w-full bg-bg-subtle rounded mb-4"></div>
              <div class="h-10 w-2/3 bg-bg-subtle rounded mb-6"></div>
              <div class="h-4 w-full bg-bg-subtle rounded mb-2"></div>
              <div class="h-4 w-full bg-bg-subtle rounded mb-8"></div>
              <div class="h-12 w-48 bg-bg-subtle rounded-pill"></div>
            </div>
          </div>
        } @else {
          @if (featuredPost(); as featured) {
            <article appAnimateOnScroll [animateDelay]="240" class="card-base bg-bg-white/40 backdrop-blur-sm border border-border-base p-6 md:p-10 rounded-card grid grid-cols-1 lg:grid-cols-2 gap-10 items-center group">
              <div class="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                <picture>
                  <source type="image/avif" [attr.srcset]="coverSrcset(featured, 'avif')" sizes="(max-width: 1280px) 100vw, 50vw" />
                  <source type="image/webp" [attr.srcset]="coverSrcset(featured, 'webp')" sizes="(max-width: 1280px) 100vw, 50vw" />
                  <img
                    [src]="coverImage(featured, 1280, 'webp')"
                    [alt]="featured.title"
                    class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    decoding="async"
                  />
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div>
                <p class="overline text-accent-school mb-4">Featured Playbook</p>
                <h2 class="type-h1 text-text-primary mb-5 group-hover:text-accent-it transition-colors">{{ featured.title }}</h2>
                <div class="flex items-center gap-4 mb-6 text-sm font-mono text-text-muted">
                  <span>{{ featured.publishedAt | date: 'mediumDate' }}</span>
                  <span class="w-1 h-1 rounded-full bg-border-strong"></span>
                  <span>{{ featured.readingTimeMinutes }} MIN READ</span>
                </div>
                <p class="type-body text-text-secondary mb-8 line-clamp-3">{{ featured.excerpt }}</p>
                <div class="flex flex-wrap gap-2 mb-8">
                  @for (tag of featured.tags; track tag) {
                    <span class="px-3 py-1 bg-bg-subtle border border-border-base rounded-pill text-[10px] font-bold uppercase tracking-wider text-text-muted">#{{ tag }}</span>
                  }
                </div>
                <a appMagnetic [routerLink]="['/blog', featured.slug]" class="btn-primary no-underline inline-flex items-center gap-3">
                  Read Full Insight
                  <span class="text-xl">→</span>
                </a>
              </div>
            </article>
          }
        }
      </div>
    </section>

    <!-- Post Grid Section -->
    <section class="section bg-bg-subtle/30 relative z-[1]">
      <div class="dot-grid-section" aria-hidden="true"></div>
      <div class="container-base relative z-10">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="overline text-amber-600 mb-2">Technical Tracks</p>
            <h2 class="type-h2 text-text-primary">Recent Articles</h2>
          </div>
          <div class="hidden md:flex gap-2">
            <!-- Filter chips placeholder -->
            <button class="px-4 py-2 rounded-pill bg-bg-white border border-border-strong text-xs font-semibold text-text-primary">All posts</button>
            <button class="px-4 py-2 rounded-pill bg-transparent border border-border-base text-xs font-semibold text-text-muted hover:bg-bg-white">Engineering</button>
            <button class="px-4 py-2 rounded-pill bg-transparent border border-border-base text-xs font-semibold text-text-muted hover:bg-bg-white">Design</button>
          </div>
        </div>

        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            @for (item of [1, 2, 3]; track item) {
              <div class="animate-pulse card-base bg-bg-white p-5 rounded-card border border-border-base">
                <div class="aspect-video bg-bg-subtle rounded-xl mb-6"></div>
                <div class="h-4 w-3/4 bg-bg-subtle rounded mb-4"></div>
                <div class="h-6 w-full bg-bg-subtle rounded mb-2"></div>
                <div class="h-6 w-2/3 bg-bg-subtle rounded mb-6"></div>
                <div class="h-4 w-full bg-bg-subtle rounded mb-8"></div>
                <div class="h-4 w-32 bg-bg-subtle rounded mb-2"></div>
              </div>
            }
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            @for (post of secondaryPosts(); track post.slug) {
              <article appAnimateOnScroll [animateDelay]="80 * ($index + 1)" class="card-base bg-bg-white p-5 rounded-card border border-border-base hover:shadow-2xl transition-all duration-500 group">
                <div class="aspect-video overflow-hidden rounded-xl mb-6 relative">
                  <picture>
                    <source type="image/avif" [attr.srcset]="coverSrcset(post, 'avif')" sizes="(max-width: 1280px) 100vw, 33vw" />
                    <source type="image/webp" [attr.srcset]="coverSrcset(post, 'webp')" sizes="(max-width: 1280px) 100vw, 33vw" />
                    <img
                      [src]="coverImage(post, 1280, 'webp')"
                      [alt]="post.title"
                      class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div class="absolute top-4 right-4 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-mono font-bold text-text-primary">
                    {{ post.readingTimeMinutes }} MIN
                  </div>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  @for (tag of post.tags.slice(0, 2); track tag) {
                    <span class="text-[10px] font-bold uppercase tracking-widest text-accent-school">{{ tag }}</span>
                  }
                </div>
                <h3 class="type-h3 text-text-primary mb-4 line-clamp-2 h-14 group-hover:text-accent-it transition-colors">{{ post.title }}</h3>
                <p class="type-body text-sm text-text-muted mb-6 line-clamp-3 flex-1">{{ post.excerpt }}</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-border-faint">
                  <span class="text-xs font-mono text-text-tertiary">{{ post.publishedAt | date: 'mediumDate' }}</span>
                  <a [routerLink]="['/blog', post.slug]" class="text-xs font-bold uppercase tracking-widest text-text-primary no-underline inline-flex items-center gap-2 group/link">
                    Read Article
                    <span class="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </article>
            }
          </div>
        }
      </div>
    </section>

    <!-- Newsletter / CTA -->
    <section class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll class="card-base bg-surface-dark p-10 md:p-16 rounded-card border border-white/10 text-center relative overflow-hidden">
          <div class="fb-particle-field" style="opacity: 0.15">
            <app-particle-field density="sparse" variant="dark" />
          </div>
          <div class="relative z-10">
            <p class="overline text-green-500 mb-4">Stay Informed</p>
            <h2 class="type-h2 text-white mb-6">Want More Career and Industry Insights?</h2>
            <p class="type-body text-white/70 max-w-2xl mx-auto mb-10">
              Get practical resources that help you choose the right track and make better career decisions delivered directly to your inbox.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <input type="email" placeholder="Enter your email" class="px-6 py-3 rounded-pill bg-white/5 border border-white/10 text-white focus:outline-none focus:border-green-500 w-full sm:w-80" />
              <button appMagnetic class="btn-green no-underline">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent implements OnInit {
  readonly loading = signal(true);
  readonly posts = signal<ReadonlyArray<BlogPost>>([]);
  readonly featuredPost = computed(() => this.posts()[0] ?? null);
  readonly secondaryPosts = computed(() => this.posts().slice(1));
  readonly fallbackCoverBase = 'assets/images/blog/blog-fallback';

  ngOnInit(): void {
    setTimeout(() => {
      this.posts.set(BLOG_POSTS);
      this.loading.set(false);
    }, 450);
  }

  coverSrcset(post: BlogPost, extension: 'avif' | 'webp'): string | null {
    const base = post.coverImage || this.fallbackCoverBase;
    if (this.hasExplicitExtension(base)) {
      return null;
    }
    if (base.startsWith('http')) {
      return base;
    }
    return `${base}-640.${extension} 640w, ${base}-1280.${extension} 1280w`;
  }

  coverImage(post: BlogPost, width: 640 | 1280, extension: 'avif' | 'webp'): string {
    const base = post.coverImage || this.fallbackCoverBase;
    if (base.startsWith('http') || this.hasExplicitExtension(base)) {
      return base;
    }
    return `${base}-${width}.${extension}`;
  }

  private hasExplicitExtension(path: string): boolean {
    return /\.[a-z0-9]+$/i.test(path);
  }
}



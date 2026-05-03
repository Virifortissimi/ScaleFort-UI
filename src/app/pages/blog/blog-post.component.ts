import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../shared/data/blog-posts.data';
import { BlogPost } from '../../shared/models/blog-post.model';
import { SeoService } from '../../core/services/seo.service';
import { ParticleFieldComponent } from '../../shared/components/particle-field.component';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, DatePipe, ParticleFieldComponent, MagneticDirective, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (post) {
      <section class="relative overflow-hidden bg-bg-white min-h-screen z-[1]">
        <div class="dot-grid-section opacity-40" aria-hidden="true"></div>
        <app-particle-field density="sparse" variant="light" />

        <article appAnimateOnScroll class="container-base max-w-4xl relative z-10 py-16 md:py-24">
          <a appMagnetic routerLink="/blog" class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent-school no-underline hover:text-text-primary transition-colors group mb-12">
            <span class="transform group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
            Back to Insights
          </a>

          <header class="mb-12">
            <div class="flex flex-wrap gap-3 mb-6">
              @for (tag of post.tags; track tag) {
                <span class="px-3 py-1 bg-bg-subtle border border-border-base rounded-pill text-[10px] font-bold uppercase tracking-wider text-text-muted">#{{ tag }}</span>
              }
            </div>
            <h1 class="type-display text-text-primary mb-6">{{ post.title }}</h1>
            <div class="flex items-center gap-6 text-sm font-mono text-text-muted">
              <div class="flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-accent-it/10 flex items-center justify-center text-accent-it font-bold text-[10px]">SF</span>
                <span>{{ post.author }}</span>
              </div>
              <span class="w-1 h-1 rounded-full bg-border-strong"></span>
              <span>{{ post.publishedAt | date: 'longDate' }}</span>
              <span class="w-1 h-1 rounded-full bg-border-strong hidden sm:block"></span>
              <span class="hidden sm:block">{{ post.readingTimeMinutes }} MIN READ</span>
            </div>
          </header>

          <div class="relative aspect-video mb-16 overflow-hidden rounded-card shadow-2xl">
            <picture>
              <source type="image/avif" [attr.srcset]="coverSrcset(post, 'avif')" sizes="(max-width: 1280px) 100vw, 80vw" />
              <source type="image/webp" [attr.srcset]="coverSrcset(post, 'webp')" sizes="(max-width: 1280px) 100vw, 80vw" />
              <img
                [src]="coverImage(post, 1280, 'webp')"
                [alt]="post.title"
                class="absolute inset-0 w-full h-full object-cover"
                decoding="async"
              />
            </picture>
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div class="prose-refined max-w-none text-text-body mb-16" [innerHTML]="post.content"></div>

          <footer class="pt-12 border-t border-border-faint">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <!-- Share Section -->
              <div class="rounded-card border border-border-base bg-bg-subtle/50 backdrop-blur-sm p-8">
                <p class="overline text-accent-it mb-6">Spread the insight</p>
                <div class="flex flex-col gap-3">
                  <a appMagnetic [href]="xShareUrl(post)" target="_blank" rel="noopener noreferrer" class="btn-outline !justify-start gap-4 no-underline">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Share on X
                  </a>
                  <a appMagnetic [href]="linkedinShareUrl(post)" target="_blank" rel="noopener noreferrer" class="btn-outline !justify-start gap-4 no-underline">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    Share on LinkedIn
                  </a>
                  <a appMagnetic [href]="whatsappShareUrl(post)" target="_blank" rel="noopener noreferrer" class="btn-outline !justify-start gap-4 no-underline">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.124 8.124 0 01-3.858-.969l-.277-.164-2.864.751.766-2.795-.18-.287a8.17 8.17 0 01-1.253-4.321c0-4.504 3.664-8.167 8.169-8.167 2.181 0 4.232.85 5.773 2.391 1.54 1.541 2.39 3.592 2.39 5.773 0 4.505-3.664 8.169-8.169 8.169m8.171-17.742A11.005 11.005 0 0012.651.75c-6.08 0-11.028 4.948-11.028 11.028 0 1.944.507 3.842 1.47 5.547L1.75 22.5l5.309-1.392a11.02 11.02 0 005.592 1.52h.005c6.079 0 11.026-4.947 11.026-11.027 0-2.946-1.147-5.716-3.231-7.802z"/></svg>
                    Share on WhatsApp
                  </a>
                </div>
              </div>

              <!-- Next Action Section -->
              <div class="rounded-card border border-border-base bg-bg-white p-8">
                <p class="overline text-accent-school mb-6">Take the next step</p>
                <h2 class="type-h3 text-text-primary mb-6">Apply what you learned with structured support</h2>
                <div class="flex flex-col gap-3">
                  <a appMagnetic routerLink="/tech-school/courses" class="btn-primary no-underline w-full !justify-center">Explore Tracks</a>
                  <a appMagnetic routerLink="/contact" class="btn-secondary no-underline w-full !justify-center">Talk to Our Team</a>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </section>
    } @else {
      <section class="section bg-bg-white relative min-h-screen z-[1]">
        <div class="dot-grid-section opacity-40" aria-hidden="true"></div>
        <div class="container-base max-w-3xl text-center relative z-10 pt-32">
          <p class="overline mb-4">Error 404</p>
          <h1 class="type-h1 text-text-primary mb-8">Insight not found</h1>
          <a appMagnetic routerLink="/blog" class="btn-primary no-underline">Back to all Insights</a>
        </div>
      </section>
    }
  `,
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  post?: BlogPost;
  readonly fallbackCoverBase = 'assets/images/blog/blog-fallback';

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      return;
    }

    this.post = BLOG_POSTS.find((item) => item.slug === slug);

    if (this.post) {
      this.seo.apply(
        {
          title: `${this.post.title} | Scalefort Blog`,
          description: this.post.excerpt,
          canonical: `/blog/${this.post.slug}`,
        },
        `/blog/${this.post.slug}`
      );
    }
  }

  xShareUrl(post: BlogPost): string {
    const url = encodeURIComponent(`https://www.scalefort.org/blog/${post.slug}`);
    const text = encodeURIComponent(post.title);
    return `https://x.com/intent/tweet?url=${url}&text=${text}`;
  }

  linkedinShareUrl(post: BlogPost): string {
    const url = encodeURIComponent(`https://www.scalefort.org/blog/${post.slug}`);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  }

  whatsappShareUrl(post: BlogPost): string {
    const shareText = encodeURIComponent(`${post.title} - https://www.scalefort.org/blog/${post.slug}`);
    return `https://wa.me/?text=${shareText}`;
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



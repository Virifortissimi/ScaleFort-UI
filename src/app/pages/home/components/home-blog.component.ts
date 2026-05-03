import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../../../shared/data/blog-posts.data';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { BlogPost } from '../../../shared/models/blog-post.model';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll [animateDelay]="80" class="text-center max-w-3xl mx-auto mb-16">
          <p class="overline mb-3">Insights and Updates</p>
          <h2 class="type-h2 text-text-primary mb-4">Practical reads for growth in tech</h2>
          <p class="type-body text-text-muted leading-relaxed">
            Career strategy, market insight, and execution guidance from the Scalefort team.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (post of posts; track post.slug; let i = $index) {
            <article
              appAnimateOnScroll
              [animateDelay]="120 + (i * 70)"
              class="card-base bg-bg-white p-8 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-border-faint"
            >
              <div class="relative h-48 w-full rounded-card overflow-hidden mb-8">
                <picture>
                  <source type="image/avif" [attr.srcset]="coverSrcset(post, 'avif')" sizes="(max-width: 1280px) 100vw, 33vw" />
                  <source type="image/webp" [attr.srcset]="coverSrcset(post, 'webp')" sizes="(max-width: 1280px) 100vw, 33vw" />
                  <img
                    [src]="coverImage(post, 1280, 'webp')"
                    [alt]="post.title"
                    class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p class="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-3">
                {{ post.publishedAt | date: 'mediumDate' }} • {{ post.readingTimeMinutes }} min read
              </p>
              <h3 class="type-h3 text-text-primary mb-4 group-hover:text-accent-school transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="type-body text-text-muted text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                {{ post.excerpt }}
              </p>
              <a [routerLink]="['/blog', post.slug]" class="text-xs font-bold uppercase tracking-widest text-text-primary no-underline group-hover:underline underline-offset-4 inline-flex items-center gap-2 group/link border-t border-border-faint pt-6 mt-auto">
                Read Article
                <span class="transform group-hover/link:translate-x-1 transition-transform">-></span>
              </a>
            </article>
          }
        </div>

        <div class="mt-16 text-center">
          <a routerLink="/blog" class="btn-secondary no-underline px-12">View All Articles</a>
        </div>
      </div>
    </section>
  `,
})
export class HomeBlogComponent {
  readonly posts = BLOG_POSTS.slice(0, 3);
  readonly fallbackCoverBase = 'assets/images/blog/blog-fallback';

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

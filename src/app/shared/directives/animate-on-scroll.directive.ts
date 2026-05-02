import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

type RevealVariant = 'up' | 'fade' | 'left' | 'right' | 'scale-up' | 'blur-up';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animateDelay = 0;
  @Input() animateDuration = 700;
  @Input() animateVariant: RevealVariant = 'up';

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.el.nativeElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const starts: Record<RevealVariant, Partial<CSSStyleDeclaration>> = {
      up: { opacity: '0', transform: 'translateY(32px)' },
      fade: { opacity: '0' },
      left: { opacity: '0', transform: 'translateX(-32px)' },
      right: { opacity: '0', transform: 'translateX(32px)' },
      'scale-up': { opacity: '0', transform: 'scale(0.92) translateY(20px)' },
      'blur-up': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(8px)' },
    };

    Object.assign(element.style, starts[this.animateVariant]);
    element.style.willChange = 'opacity, transform, filter';
    element.style.transition = [
      `opacity ${this.animateDuration}ms var(--ease-snap) ${this.animateDelay}ms`,
      `transform ${this.animateDuration}ms var(--ease-snap) ${this.animateDelay}ms`,
      this.animateVariant === 'blur-up'
        ? `filter ${this.animateDuration}ms var(--ease-snap) ${this.animateDelay}ms`
        : '',
    ]
      .filter(Boolean)
      .join(', ');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        element.style.opacity = '1';
        element.style.transform = 'none';
        element.style.filter = 'none';

        setTimeout(() => {
          element.style.willChange = 'auto';
        }, this.animateDuration + this.animateDelay + 100);

        this.observer?.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

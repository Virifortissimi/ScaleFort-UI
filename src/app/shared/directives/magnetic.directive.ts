import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective implements OnInit, OnDestroy {
  @Input() magneticStrength = 0.35;
  @Input() magneticRadius = 80;

  private readonly elRef = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  private onMove?: (event: MouseEvent) => void;
  private onLeave?: () => void;

  ngOnInit(): void {
    if (window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = this.elRef.nativeElement;
    el.style.willChange = 'transform';

    this.onLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    this.onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const insideRange = Math.sqrt(dx * dx + dy * dy) < this.magneticRadius;

      if (!insideRange) {
        this.onLeave?.();
        return;
      }

      this.zone.runOutsideAngular(() => {
        el.style.transform = `translate(${dx * this.magneticStrength}px, ${dy * this.magneticStrength}px)`;
      });
    };

    el.addEventListener('mousemove', this.onMove);
    el.addEventListener('mouseleave', this.onLeave);
  }

  ngOnDestroy(): void {
    const el = this.elRef.nativeElement;
    if (this.onMove) {
      el.removeEventListener('mousemove', this.onMove);
    }
    if (this.onLeave) {
      el.removeEventListener('mouseleave', this.onLeave);
    }
    el.style.willChange = 'auto';
    el.style.transform = 'translate(0, 0)';
  }
}

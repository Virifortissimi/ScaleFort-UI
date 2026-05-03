import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appCardShimmer]',
  standalone: true,
})
export class CardShimmerDirective implements OnInit, OnDestroy {
  private readonly elRef = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private onMove?: (event: MouseEvent) => void;

  ngOnInit(): void {
    if (window.matchMedia('(hover: none)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = this.elRef.nativeElement;
    this.onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      this.zone.runOutsideAngular(() => {
        el.style.setProperty('--mouse-x', `${x}%`);
        el.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    el.addEventListener('mousemove', this.onMove);
  }

  ngOnDestroy(): void {
    if (this.onMove) {
      this.elRef.nativeElement.removeEventListener('mousemove', this.onMove);
    }
  }
}

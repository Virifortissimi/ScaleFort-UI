import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnDestroy, ViewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  alpha: number;
  alphaTarget: number;
  alphaSpeed: number;
  alphaPulseTimer: number;
  alphaPulseInterval: number;
  color: string;
  isAmber: boolean;
}

@Component({
  selector: 'app-particle-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas aria-hidden="true" role="presentation"
    class="absolute inset-0 w-full h-full pointer-events-none" style="z-index:1;"></canvas>`,
})
export class ParticleFieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() density: 'sparse' | 'normal' | 'dense' = 'normal';
  @Input() variant: 'light' | 'dark' = 'light';

  private particles: Particle[] = [];
  private raf = 0;
  private ro?: ResizeObserver;

  private readonly palettes = {
    light: ['#6B74E8', '#9099F0', '#B5BAF6', '#7B83EC'],
    dark:  ['#9099F0', '#B5BAF6', '#D0D4FA', '#C0C5F8'],
  };

  constructor(private readonly zone: NgZone) {}

  private get targetCount(): number {
    const base = { sparse: 35, normal: 65, dense: 100 }[this.density];
    return window.innerWidth < 768 ? Math.floor(base * 0.4) : base;
  }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.opacity = '0.15';
      this.drawStaticSnapshot(canvas);
      return;
    }
    this.ro = new ResizeObserver(() => this.resize(canvas));
    this.ro.observe(canvas.parentElement!);
    this.resize(canvas);
    this.zone.runOutsideAngular(() => this.loop(canvas));
  }

  private resize(canvas: HTMLCanvasElement) {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const { clientWidth: w, clientHeight: h } = canvas.parentElement!;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);
    this.initParticles(w, h);
  }

  private initParticles(w: number, h: number) {
    const colors = this.palettes[this.variant];
    const n = this.targetCount;
    this.particles = Array.from({ length: n }, (_, i) => {
      const isAmber = i < Math.floor(n * 0.08);
      const baseAlpha = isAmber ? 0.20 + Math.random() * 0.20 : 0.18 + Math.random() * 0.35;
      const sizeRoll = Math.random();
      const r = isAmber ? 1 + Math.random() * 1.2
        : sizeRoll < 0.60 ? 1 + Math.random() * 1.2
        : sizeRoll < 0.88 ? 2.5 + Math.random() * 1.2
        : 4 + Math.random() * 1.4;
      return {
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * (isAmber ? 0.14 : 0.22),
        vy: (Math.random() - 0.5) * (isAmber ? 0.10 : 0.14),
        r, isAmber, baseAlpha, alpha: baseAlpha,
        alphaTarget: baseAlpha + 0.18 + Math.random() * 0.14,
        alphaSpeed: isAmber ? 0.0006 + Math.random() * 0.0008 : 0.0008 + Math.random() * 0.001,
        alphaPulseTimer: 0,
        alphaPulseInterval: isAmber ? 5000 + Math.random() * 6000 : 3000 + Math.random() * 5000,
        color: isAmber ? 'rgba(245,158,11,0.55)' : colors[Math.floor(Math.random() * colors.length)],
      };
    });
  }

  private loop(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = canvas.width / dpr, h = canvas.height / dpr;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of this.particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h + 10; if (p.y > h+10) p.y = -10;
        p.alphaPulseTimer += 16.67;
        if (p.alphaPulseTimer > p.alphaPulseInterval) {
          p.alphaPulseTimer = 0;
          p.alphaTarget = p.alphaTarget === p.baseAlpha
            ? p.baseAlpha + 0.18 + Math.random() * 0.14 : p.baseAlpha;
        }
        p.alpha += (p.alphaTarget - p.alpha) * p.alphaSpeed * 60;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha)); ctx.fill();
      }
      ctx.globalAlpha = 1;
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  private drawStaticSnapshot(canvas: HTMLCanvasElement) {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = canvas.parentElement!.clientWidth, h = canvas.parentElement!.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d')!; ctx.scale(dpr, dpr);
    this.initParticles(w, h);
    for (const p of this.particles) {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color; ctx.globalAlpha = p.baseAlpha * 0.5; ctx.fill();
    }
  }

  ngOnDestroy() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }
    this.ro?.disconnect();
  }
}

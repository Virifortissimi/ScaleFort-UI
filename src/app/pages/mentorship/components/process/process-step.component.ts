import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-step',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card-base relative">
      <div
        class="w-12 h-12 bg-accent-school rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg"
      >
        {{ stepNumber }}
      </div>

      <div class="space-y-2">
        <h3 class="text-h3 text-text-primary">{{ title }}</h3>
        <p class="text-text-body">{{ description }}</p>
      </div>

      @if (!isLast) {
        <div class="absolute top-6 left-14 right-[-2.75rem] h-px bg-border-default/80 -z-10 hidden xl:block"></div>
      }
    </div>
  `
})
export class ProcessStepComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() isLast = false;
}


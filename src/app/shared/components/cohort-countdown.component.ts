import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-cohort-countdown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
      <span class="flex items-center gap-1.5">
        <span class="w-2 h-2 bg-success rounded-full animate-pulse"></span>
        Next cohort starts in
      </span>
      <span class="font-semibold text-text-primary tabular-nums">
        {{ days() }}d {{ hours() }}h {{ minutes() }}m
      </span>
      @if (spotsRemaining > 0) {
        <span class="bg-bg-white text-text-body border border-border-base rounded-pill px-3 py-1 text-xs font-semibold">
          {{ spotsRemaining }} spot{{ spotsRemaining === 1 ? '' : 's' }} left
        </span>
      }
    </div>
  `,
})
export class CohortCountdownComponent implements OnInit, OnDestroy {
  @Input({ required: true }) nextCohortDate!: string;
  @Input() spotsRemaining = 0;

  readonly days = signal(0);
  readonly hours = signal(0);
  readonly minutes = signal(0);

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.update();
    this.timer = setInterval(() => this.update(), 60_000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private update(): void {
    const diff = new Date(this.nextCohortDate).getTime() - Date.now();
    if (diff <= 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      return;
    }

    this.days.set(Math.floor(diff / 86_400_000));
    this.hours.set(Math.floor((diff % 86_400_000) / 3_600_000));
    this.minutes.set(Math.floor((diff % 3_600_000) / 60_000));
  }
}

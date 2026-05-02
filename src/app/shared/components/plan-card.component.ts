import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanConfig } from '../models/plan.model';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article [ngClass]="cardClass" class="card-base flex h-full flex-col gap-6">
      <header class="flex items-start justify-between gap-4">
        <div class="flex flex-col gap-1">
          <span [ngClass]="badgeClass" class="inline-flex w-fit rounded-pill px-3 py-1 text-xs font-semibold">{{ plan.badge }}</span>
          <h3 class="text-h3 font-semibold text-text-primary m-0">{{ plan.title }}</h3>
          <p class="text-sm text-text-muted m-0">{{ plan.via }}</p>
        </div>
        <span [ngClass]="accentChipClass" class="shrink-0 rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
          {{ accentLabel }}
        </span>
      </header>

      <div [ngClass]="pricePanelClass" class="rounded-card border p-4">
        <p class="text-2xl font-bold text-text-primary m-0">
          {{ plan.price }}
          <span class="text-sm font-normal text-text-muted">{{ plan.period }}</span>
        </p>
        <p class="text-xs text-text-muted mt-2 mb-0">{{ plan.description }}</p>
      </div>

      @if (plan.features.length > 0) {
        <div class="flex-1 flex flex-col gap-4">
          @if (plan.includesLabel) {
            <p class="text-sm font-semibold text-text-primary m-0">{{ plan.includesLabel }}</p>
          }
          <ul role="list" class="flex flex-col gap-3 list-none p-0 m-0">
            @for (feature of plan.features; track feature) {
              <li class="flex items-start gap-3 text-sm text-text-body leading-snug">
                <span [ngClass]="featureIconClass" class="mt-px inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold">&#10003;</span>
                {{ feature }}
              </li>
            }
          </ul>
        </div>
      }

      <div class="flex flex-col gap-3">
        @if (!plan.notifyCta) {
          <a [routerLink]="plan.primaryCta.link" [queryParams]="plan.primaryCta.queryParams || null" [ngClass]="primaryCtaClass" class="no-underline">
            {{ plan.primaryCta.label }}
          </a>
          @if (plan.secondaryCta) {
            <a [routerLink]="plan.secondaryCta.link" [queryParams]="plan.secondaryCta.queryParams || null" class="btn-secondary no-underline">
              {{ plan.secondaryCta.label }}
            </a>
          }
        } @else {
          <button type="button" class="btn-notify">Notify me</button>
        }
      </div>
    </article>
  `,
})
export class PlanCardComponent {
  @Input({ required: true }) plan!: PlanConfig;

  get cardClass(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'card-accent bg-gradient-to-b from-green-50 to-bg-white border-green-200 shadow-[0_24px_60px_rgba(22,198,90,0.12)]';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'card-accent-amber bg-gradient-to-b from-amber-50 to-bg-white border-amber-200 shadow-[0_24px_56px_rgba(245,158,11,0.12)]';
    }

    return 'bg-gradient-to-b from-bg-white to-bg-subtle border-border-base shadow-[0_20px_48px_rgba(10,10,10,0.06)]';
  }

  get badgeClass(): string {
    if (this.plan.badgeType === 'coming-soon') {
      return 'bg-rose-50 text-rose-700';
    }

    if (this.plan.badgeType === 'preview') {
      return 'bg-amber-100 text-amber-700';
    }

    return 'bg-green-50 text-accent-school';
  }

  get accentLabel(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'Best value';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'Flexible';
    }

    return 'Quick start';
  }

  get accentChipClass(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'bg-green-100 text-green-700';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'bg-amber-100 text-amber-700';
    }

    return 'bg-bg-subtle text-text-muted';
  }

  get pricePanelClass(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'border-green-200 bg-white/80';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'border-amber-200 bg-white/85';
    }

    return 'border-border-base bg-bg-white/80';
  }

  get primaryCtaClass(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'btn-primary';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'btn-notify';
    }

    return 'btn-secondary';
  }

  get featureIconClass(): string {
    if (this.plan.badgeType === 'recommended') {
      return 'bg-green-100 text-green-700';
    }

    if (this.plan.title.toLowerCase().includes('instal')) {
      return 'bg-amber-100 text-amber-700';
    }

    return 'bg-bg-subtle text-text-primary';
  }
}

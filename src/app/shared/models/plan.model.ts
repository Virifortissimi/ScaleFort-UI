export interface PlanCtaConfig {
  label: string;
  link: string;
  queryParams?: Record<string, string>;
}

export interface PlanConfig {
  badge: string;
  badgeType: 'preview' | 'recommended' | 'coming-soon' | 'free';
  title: string;
  via: string;
  price: string;
  period: string;
  description: string;
  primaryCta: PlanCtaConfig;
  secondaryCta?: PlanCtaConfig;
  notifyCta?: boolean;
  includesLabel?: string;
  features: string[];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { CardShimmerDirective } from '../../shared/directives/card-shimmer.directive';

interface VoucherFeature {
  icon: string;
  title: string;
  description: string;
}

interface VoucherStat {
  value: string;
  label: string;
}

type PricingTone = 'green' | 'amber' | 'rose';

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: string[];
  tone: PricingTone;
  ctaLink: string;
  ctaText: string;
}

interface VoucherTestimonial {
  initials: string;
  name: string;
  position: string;
  quote: string;
}

@Component({
  selector: 'app-vouchers',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, CardShimmerDirective],
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VouchersComponent {
  readonly trainingBenefits = [
    'Practical skill development through real-world projects',
    'Industry-aligned curriculum updated quarterly',
    'Personalized mentorship from senior engineers',
    'Continuous learning support and resources',
    'Certification preparation and career guidance',
  ];

  readonly features: ReadonlyArray<VoucherFeature> = [
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Expert-Led Training',
      description: 'Learn from industry veterans with real-world delivery experience.',
    },
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Hands-On Learning',
      description: 'Practical labs and role-based assignments aligned to your team goals.',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Flexible Learning Paths',
      description: 'Self-paced and instructor-led options for mixed workforce schedules.',
    },
    {
      icon: 'M5 13l4 4L19 7',
      title: 'Certification Ready',
      description: 'Programs built to support recognized certification pathways.',
    },
  ];

  readonly stats: ReadonlyArray<VoucherStat> = [
    { value: '90%', label: 'Productivity Boost' },
    { value: '89%', label: 'Skill Improvement' },
    { value: '91%', label: 'Innovation Increase' },
    { value: '96%', label: 'Staff Retention' },
  ];

  readonly pricingPlans: ReadonlyArray<PricingPlan> = [
    {
      title: 'Starter Team',
      description: 'Perfect for small teams or pilot programs.',
      price: 'NGN 1,000,000',
      features: ['5 Training Vouchers', 'Basic Support', 'Progress Tracking', 'Resource Library Access'],
      tone: 'green',
      ctaLink: 'https://paystack.com/pay/scalefort-voucher-5',
      ctaText: 'Start with 5',
    },
    {
      title: 'Growth Team',
      description: 'Ideal for medium-sized teams with rapid delivery goals.',
      price: 'NGN 2,500,000',
      features: ['15 Training Vouchers', 'Priority Support', 'Team Analytics', 'Custom Learning Paths'],
      tone: 'amber',
      ctaLink: 'https://paystack.com/pay/scalefort-voucher-15',
      ctaText: 'Scale with 15',
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for large organizations and multi-team rollouts.',
      price: 'Contact Us',
      features: ['50+ Vouchers', 'Dedicated Support', 'Custom Training', 'Enterprise Analytics'],
      tone: 'rose',
      ctaLink: 'mailto:sales@scalefort.org',
      ctaText: 'Contact Sales',
    },
  ];

  readonly testimonials: ReadonlyArray<VoucherTestimonial> = [
    {
      initials: 'AO',
      name: 'A. O.',
      position: 'HR Lead, Fintech Team',
      quote: 'The voucher plan helped us train our engineering team in a structured way and ship faster.',
    },
    {
      initials: 'TE',
      name: 'T. E.',
      position: 'Operations Manager, Startup',
      quote: 'Scalefort made upskilling practical. We saw immediate improvements in communication and delivery quality.',
    },
  ];
}

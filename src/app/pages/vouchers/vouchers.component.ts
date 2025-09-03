import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);


@Component({
  selector: 'app-vouchers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent {
  trainingBenefits = [
    'Practical skill development through real-world projects',
    'Industry-aligned curriculum updated quarterly',
    'Personalized mentorship from senior engineers',
    'Continuous learning support and resources',
    'Certification preparation and career guidance'
  ];

  features = [
    { 
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Expert-Led Training',
      description: 'Learn from industry veterans with real-world experience'
    },
    { 
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Hands-On Learning',
      description: 'Practical labs and real-world project scenarios'
    },
    { 
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Flexible Learning Paths',
      description: 'Mix of self-paced and instructor-led options'
    },
    { 
      icon: 'M5 13l4 4L19 7',
      title: 'Certification Ready',
      description: 'Prepares for industry-recognized certifications'
    }
  ];

  stats = [
    { value: '90%', label: 'Productivity Boost' },
    { value: '89%', label: 'Skill Improvement' },
    { value: '91%', label: 'Innovation Increase' },
    { value: '96%', label: 'Staff Retention' }
  ];

  pricingPlans = [
    {
      title: 'Starter Team',
      description: 'Perfect for small teams or pilot programs',
      price: '₦1,000,000',
      features: [
        '5 Training Vouchers',
        'Basic Support',
        'Progress Tracking',
        'Resource Library Access'
      ],
      ctaLink: 'https://paystack.com/pay/scalefort-voucher-5',
      ctaText: 'Start with 5'
    },
    {
      title: 'Growth Team',
      description: 'Ideal for medium-sized teams',
      price: '₦2,500,000',
      recommended: true,
      features: [
        '15 Training Vouchers',
        'Priority Support',
        'Team Analytics',
        'Custom Learning Paths'
      ],
      ctaLink: 'https://paystack.com/pay/scalefort-voucher-15',
      ctaText: 'Scale with 15'
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Contact Us',
      features: [
        '50+ Vouchers',
        'Dedicated Support',
        'Custom Training',
        'Enterprise Analytics'
      ],
      ctaLink: 'mailto:sales@scalefort.org',
      ctaText: 'Contact Sales'
    }
  ];

  testimonials = [
    {
      initials: 'ZE',
      name: 'Zena Amiegheme',
      position: 'Operations',
      quote: 'Scalefort\'s training transformed our team\'s skills and productivity.',
      company: 'Stem-mets'
    },
    {
      initials: 'AE',
      name: 'Asiegbu Ejike',
      position: 'Facilitator Manager',
      quote: 'The training provided by Scalefort was top-notch and highly relevant to our needs.',
      company: 'Stem-mets'
    }
  ];

   ngOnInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
  }
}

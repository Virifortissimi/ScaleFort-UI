import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16 mt-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Affiliate Program Policy
        </h1>
        <div class="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          Effective Date: 1 February 2025 | Last Updated: 15/01/2025
        </div>
        <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
          Join the ScaleFort Affiliate Program and earn commissions for promoting our tech training programs. 
          This policy outlines the terms and conditions for our affiliate partners.
        </p>
      </div>

      <!-- Program Comparison -->
      <!-- <div class="mb-12 p-6 bg-blue-50 rounded-xl">
        <h2 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Affiliate vs. Referral Program
        </h2>
        <p class="text-gray-600 mb-4">
          Our <strong>Affiliate Program</strong> is designed for content creators, influencers, and businesses who want to 
          earn commissions by promoting ScaleFort programs, while our <strong>Referral Program</strong> is for students 
          and alumni who want to refer friends.
        </p>
        <a href="/referral-policy" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View Referral Policy →
        </a>
      </div> -->

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-blue-50 p-6 rounded-xl text-center">
          <div class="text-3xl font-bold text-blue-600 mb-2">20%</div>
          <div class="text-gray-600">Average Commission Rate</div>
        </div>
        <div class="bg-green-50 p-6 rounded-xl text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">60 days</div>
          <div class="text-gray-600">Cookie Duration</div>
        </div>
        <div class="bg-purple-50 p-6 rounded-xl text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">NGN200,000+</div>
          <div class="text-gray-600">Top Monthly Earnings</div>
        </div>
      </div>

      <!-- Table of Contents -->
      <div class="mb-16 p-6 bg-gray-50 rounded-xl shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Quick Links</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a *ngFor="let section of sections" 
             [href]="'/affiliate-policy#' + section.id" 
             class="text-blue-600 hover:text-blue-800 text-sm transition-colors flex items-center">
            <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
            {{ section.title }}
          </a>
        </div>
      </div>

      <!-- Policy Sections -->
      <div class="space-y-12">
        <section *ngFor="let section of sections" 
                 [id]="section.id" 
                 class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-blue-600 font-semibold">{{ section.number }}</span>
            </div>
            <h2 class="text-2xl font-semibold text-gray-900">{{ section.title }}</h2>
          </div>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <ng-container [ngSwitch]="section.id">
              <div *ngSwitchCase="'program-overview'">
                <p class="text-gray-600 mb-6">
                  The ScaleFort Affiliate Program allows you to earn commissions by promoting our tech training programs 
                  through your website, social media channels, email lists, and other marketing channels. 
                  As an approved affiliate, you'll receive unique tracking links and access to marketing materials.
                </p>
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                  <p class="text-blue-700">
                    <span class="font-semibold">Note:</span> This is a performance-based program where you earn commissions 
                    for each sale generated through your affiliate links.
                  </p>
                </div>
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchCase="'commission-structure'">
                <div class="overflow-x-auto mb-6">
                  <table class="w-full text-sm">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-4 py-3 text-left font-medium text-gray-700">Program Category</th>
                        <th class="px-4 py-3 text-left font-medium text-gray-700">Commission Rate</th>
                        <th class="px-4 py-3 text-left font-medium text-gray-700">Cookie Duration</th>
                        <th class="px-4 py-3 text-left font-medium text-gray-700">Payment Threshold</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr *ngFor="let commission of commissionRates">
                        <td class="px-4 py-3 font-medium text-gray-900">{{ commission.category }}</td>
                        <td class="px-4 py-3 text-green-600 font-semibold">{{ commission.rate }}</td>
                        <td class="px-4 py-3 text-gray-600">{{ commission.cookie }}</td>
                        <td class="px-4 py-3 text-gray-600">{{ commission.threshold }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchCase="'eligibility-requirements'">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div class="bg-green-50 border border-green-200 rounded-lg p-5">
                    <h3 class="font-semibold text-green-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Ideal Affiliate Partners
                    </h3>
                    <ul class="space-y-2">
                      <li *ngFor="let item of eligibility.idealPartners" class="flex items-start gap-2 text-gray-700">
                        <svg class="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div class="bg-red-50 border border-red-200 rounded-lg p-5">
                    <h3 class="font-semibold text-red-800 mb-3 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Prohibited Affiliates
                    </h3>
                    <ul class="space-y-2">
                      <li *ngFor="let item of eligibility.prohibitedAffiliates" class="flex items-start gap-2 text-gray-700">
                        <svg class="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchCase="'payment-processing'">
                <div class="bg-gray-50 p-5 rounded-lg mb-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Payment Schedule</h3>
                  <p class="text-gray-600 mb-4">Commissions are processed monthly on the following schedule:</p>
                  <ul class="space-y-2">
                    <li *ngFor="let schedule of paymentSchedule" class="flex items-center text-gray-700">
                      <svg class="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {{ schedule }}
                    </li>
                  </ul>
                </div>
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchDefault>
                <div *ngFor="let item of section.items" [innerHTML]="item" class="space-y-3"></div>
              </div>
            </ng-container>
          </div>
        </section>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center text-white">
        <h2 class="text-2xl font-semibold mb-4">Ready to Join Our Affiliate Program?</h2>
        <p class="mb-6 opacity-90">Apply today and start earning commissions by promoting ScaleFort's tech training programs.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <!-- <a href="/affiliate/apply" 
             class="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
            Apply Now
          </a> -->
          <a href="/contact" 
             class="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Contact Affiliate Manager
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AffiliatePolicyComponent {
  commissionRates = [
    { category: 'Individual Courses', rate: '20% of sale', cookie: '60 days', threshold: '$50' },
    { category: 'Bootcamp Programs', rate: '25% of sale', cookie: '60 days', threshold: '$50' },
    { category: 'Bulk Vouchers (5+)', rate: '15% of sale', cookie: '30 days', threshold: '$100' },
    { category: 'Enterprise Contracts', rate: '10% of first year', cookie: '90 days', threshold: '$500' }
  ];

  eligibility = {
    idealPartners: [
      'Tech content creators & bloggers',
      'Educational YouTube channels',
      'Tech influencers on social media',
      'Coding bootcamps & schools',
      'IT training companies',
      'Career coaches & counselors'
    ],
    prohibitedAffiliates: [
      'Sites with prohibited content (adult, hate speech, etc.)',
      'Pay-per-click bidding on ScaleFort trademarks',
      'Email spammers or blackhat SEO practitioners',
      'Affiliate networks without prior approval'
    ]
  };

  paymentSchedule = [
    'Commission period: 1st to last day of each month',
    'Payment processing: By the 15th of the following month',
    'Minimum threshold: NGN100,000 for Bank transfer',
    'Reports available: Real-time in affiliate dashboard'
  ];

  sections = [
    {
      id: 'program-overview',
      number: '1',
      title: 'Program Overview',
      items: [
        'The ScaleFort Affiliate Program is a partnership where you earn commissions for referring customers to our tech training programs.',
        'As an affiliate, you will receive unique tracking links to promote ScaleFort products on your website, social media, email newsletters, or other channels.',
        'Commissions are earned when someone clicks your affiliate link and makes a purchase within the cookie duration period.',
        'We provide affiliates with marketing materials, tracking dashboards, and dedicated support to help you succeed.'
      ]
    },
    {
      id: 'commission-structure',
      number: '2',
      title: 'Commission Structure',
      items: [
        'Commissions are based on the net sale amount (after any discounts or refunds).',
        'Commission rates vary by product category as shown in the table above.',
        'We use a last-click attribution model—the last affiliate link clicked before purchase receives the commission.',
        'Recurring commissions may be available for subscription products (details provided upon application).',
        'Commission rates are subject to change with 30 days notice to active affiliates.'
      ]
    },
    {
      id: 'eligibility-requirements',
      number: '3',
      title: 'Eligibility Requirements',
      items: [
        'You must complete our affiliate application and be approved before promoting ScaleFort products.',
        'You must have an active website, social media presence, email list, or other platform with genuine audience engagement.',
        'Your content must be original, provide value, and comply with all applicable laws and regulations.',
        'You must disclose your affiliate relationship with ScaleFort in accordance with FTC guidelines and other applicable regulations.',
        'We reserve the right to reject any application or terminate any affiliate partnership at our discretion.'
      ]
    },
    {
      id: 'approved-marketing',
      number: '4',
      title: 'Approved Marketing Methods',
      items: [
        '<strong>Content marketing:</strong> Blog posts, reviews, tutorials, and resource pages',
        '<strong>Social media:</strong> Organic posts on platforms where you have an established following',
        '<strong>Email marketing:</strong> To your owned and opted-in email lists',
        '<strong>Video content:</strong> Tutorials, reviews, and educational content',
        '<strong>Paid advertising:</strong> With prior written approval from ScaleFort',
        '<strong>Direct sales:</strong> For agencies and consultants with client relationships'
      ]
    },
    {
      id: 'prohibited-activities',
      number: '5',
      title: 'Prohibited Activities',
      items: [
        'Bidding on ScaleFort trademarks, brand names, or variations in paid search campaigns',
        'Using unauthorized promotional methods like spam, fake reviews, or misleading claims',
        'Creating fake websites or social media accounts that impersonate ScaleFort',
        'Using pop-ups, pop-unders, or other intrusive ad techniques',
        'Promoting on websites that contain illegal, adult, or hate content',
        'Cookie stuffing or other fraudulent tracking practices',
        'Offering cashback, rewards, or other incentives without prior authorization',
        'Any activity that violates our brand guidelines or terms of service'
      ]
    },
    {
      id: 'payment-processing',
      number: '6',
      title: 'Payment Processing',
      items: [
        'Commissions are tracked through our affiliate platform and visible in your dashboard in real-time.',
        'Payments are processed monthly via Bank transfer once you reach the minimum threshold.',
        'We reserve the right to withhold payment for suspected fraudulent activity or violations of this policy.',
        'Affiliates are responsible for providing accurate payment information and updating it as needed.',
        'All payments are in Nigerian Naira unless otherwise arranged with our affiliate manager.'
      ]
    },
    {
      id: 'terms-termination',
      number: '7',
      title: 'Terms & Termination',
      items: [
        'The affiliate agreement continues until terminated by either party with 30 days written notice.',
        'We may terminate the agreement immediately for violation of these terms.',
        'Upon termination, all affiliate links must be removed from your marketing channels.',
        'Commissions earned prior to termination will be paid according to the payment schedule.',
        'We reserve the right to update these terms at any time, with notice provided to active affiliates.'
      ]
    },
    {
      id: 'intellectual-property',
      number: '8',
      title: 'Intellectual Property',
      items: [
        'We grant you a limited license to use our trademarks and marketing materials solely for promoting ScaleFort products.',
        'You may not modify our logos, trademarks, or marketing materials without prior written consent.',
        'All ScaleFort intellectual property remains our exclusive property.',
        'You grant us permission to use your name, logo, and content for promotional purposes related to the affiliate program.'
      ]
    },
    {
      id: 'liability',
      number: '9',
      title: 'Liability & Compliance',
      items: [
        'You are solely responsible for your marketing activities and compliance with applicable laws.',
        'We are not liable for any indirect damages resulting from your participation in the affiliate program.',
        'You must comply with all applicable laws including FTC guidelines on disclosure, NDPR for Nigerian Citizens and GDPR for EU citizens.',
        'We reserve the right to review your promotional activities and request changes to ensure compliance.'
      ]
    },
    {
      id: 'contact',
      number: '10',
      title: 'Contact Us',
      items: [
        'For questions about the affiliate program or to apply, please contact us at <a href="mailto:support@scalefort.org" class="text-blue-600 underline">support@scalefort.org</a>.',
        // 'Existing affiliates can access their dashboard at <a href="https://affiliates.scalefort.org" class="text-blue-600 underline">affiliates.scalefort.org</a>.',
        // 'For urgent matters, please call our affiliate manager at +1 (555) 123-AFFL (2335).'
      ]
    }
  ];
}
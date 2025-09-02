import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16 mt-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div class="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          Effective Date: 11 May 2025 | Last Updated: 11/05/2025
        </div>
      </div>

      <!-- Table of Contents -->
      <div class="mb-16 p-6 bg-gray-50 rounded-xl shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Quick Links</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a *ngFor="let section of sections" 
             [href]="'/privacy-policy#' + section.id" 
             class="text-blue-600 hover:text-blue-800 text-sm transition-colors">
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
              <div *ngSwitchCase="'information-we-collect'">
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchCase="'your-rights'">
                <ol class="space-y-3 list-decimal list-inside">
                  <li *ngFor="let item of section.items" class="pl-4">
                    <span class="font-medium text-gray-900">{{ item }}</span>
                  </li>
                </ol>
              </div>

              <div *ngSwitchDefault>
                <div *ngFor="let item of section.items" [innerHTML]="item" class="space-y-3"></div>
              </div>
            </ng-container>
          </div>
        </section>
      </div>

      <!-- Contact Section -->
      <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl text-center">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
        <p class="text-gray-600 mb-6">Contact our Data Protection Officer</p>
        <a href="mailto:privacy@scalefort.org" 
           class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          privacy&#64;scalefort.org
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class PrivacyPolicyComponent {
  sections = [
    {
      id: 'who-we-are',
      number: '1',
      title: 'Who We Are',
      items: ['Scalefort is a learning community and bootcamp that empowers enthusiasts and professionals in C#, DevOps, Cloud, and Go to scale up through guided learning, real-world projects, and mentorship. Your data privacy is our top priority.']
    },
    {
      id: 'information-we-collect',
      number: '2',
      title: 'Information We Collect',
      items: [
        '<strong>Personal Information:</strong> Name, email, phone, profiles, education background',
        '<strong>Usage Data:</strong> IP address, browser, device, site activity',
        '<strong>Payment Information:</strong> For bootcamp/course payments (if applicable)',
        '<strong>Learning Activity:</strong> Course progress, quizzes, forum engagement'
      ]
    },
    {
      id: 'how-we-use-information',
      number: '3',
      title: 'How We Use Your Information',
      items: [
        'Personalize your learning experience',
        'Communicate updates about courses/events',
        'Improve service and platform performance',
        'Process payments and offer support',
        'Ensure security and compliance'
      ]
    },
    {
      id: 'legal-basis',
      number: '4',
      title: 'Legal Basis for Processing',
      items: [
        '<strong>Consent:</strong> e.g., newsletter signup',
        '<strong>Contractual necessity:</strong> delivering services you’ve signed up for',
        '<strong>Legal compliance:</strong> taxes, regulations, etc.',
        '<strong>Legitimate interests:</strong> platform improvement, fraud detection'
      ]
    },
    {
      id: 'your-rights',
      number: '5',
      title: 'Your Rights',
      items: [
        'To be notified if your data is transferred',
        'To request erasure of your data',
        'To request correction of inaccurate data',
        'To halt dissemination of your data',
        'To request access to your personal data',
        'To request data portability, where applicable'
      ]
    },
    {
      id: 'website-security',
      number: '6',
      title: 'Website Security',
      items: ['We use SSL, firewalls, encryption tools, and access controls to safeguard your data.']
    },
    {
      id: 'training',
      number: '7',
      title: 'Training',
      items: ['Employees undergo annual data privacy training and compliance procedures in line with data protection laws.']
    },
    {
      id: 'use-of-cookies',
      number: '8',
      title: 'Use of Cookies',
      items: ['Cookies help us personalize your experience, ensure account security, and detect fraud. You may disable cookies, but this may limit functionality.']
    },
    {
      id: 'data-retention',
      number: '9',
      title: 'Data Retention',
      items: ['We retain data as long as necessary to provide services, comply with laws, and detect fraud.']
    },
    {
      id: 'data-breach-procedure',
      number: '10',
      title: 'Data Breach Procedure',
      items: [
        'We’ll notify affected users within 24 hours of a breach',
        'We’ll investigate and mitigate the breach immediately',
        'We’ll track remediation efforts and notify regulatory authorities where needed'
      ]
    },
    {
      id: 'third-party-links',
      number: '11',
      title: 'Third-Party Links',
      items: ['Our site may contain links to third-party services. We are not responsible for their privacy policies. Please review their terms before use.']
    },
    {
      id: 'limitation-of-liability',
      number: '12',
      title: 'Limitation of Liability',
      items: ['We take reasonable measures to protect your data, but we are not liable for breaches that occur beyond our control.']
    },
    {
      id: 'changes-to-policy',
      number: '13',
      title: 'Changes to This Policy',
      items: ['We may update this policy at any time. We’ll notify you on our website and/or via email. Continued use after updates implies your acceptance.']
    },
    {
      id: 'contact-us',
      number: '14',
      title: 'Contact Us',
      items: ['For questions or feedback about this policy, email us at <a href="mailto:privacy@scalefort.org" class="text-blue-600 underline">privacy@scalefort.org</a>']
    }
  ];
}
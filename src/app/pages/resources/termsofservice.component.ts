import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16 mt-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <div class="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          Effective Date: 11 October 2024 | Last Updated: 11/10/2024
        </div>
      </div>

      <!-- Table of Contents -->
      <div class="mb-16 p-6 bg-gray-50 rounded-xl shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Quick Links</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a *ngFor="let section of sections" 
             [href]="'#' + section.id" 
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
              <div *ngSwitchCase="'user-responsibilities'">
                <ul class="space-y-3">
                  <li *ngFor="let item of section.items" class="flex items-start gap-2">
                    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span [innerHTML]="item"></span>
                  </li>
                </ul>
              </div>

              <div *ngSwitchCase="'prohibited-activities'">
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

      <!-- Contact Section -->
      <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl text-center">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
        <p class="text-gray-600 mb-6">Contact our Legal Team</p>
        <a href="mailto:legal@scalefort.org" 
           class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          legal&#64;scalefort.org
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class TermsOfServiceComponent {
  sections = [
    {
      id: 'introduction',
      number: '1',
      title: 'Introduction',
      items: ['Welcome to ScaleFort! These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.']
    },
    {
      id: 'user-agreement',
      number: '2',
      title: 'User Agreement',
      items: ['By using our services, you confirm that you are at least 18 years old and agree to comply with all applicable laws and regulations.']
    },
    {
      id: 'user-responsibilities',
      number: '3',
      title: 'User Responsibilities',
      items: [
        '<strong>Account Security:</strong> Maintain confidentiality of your login credentials',
        '<strong>Accurate Information:</strong> Provide current and complete registration information',
        '<strong>Compliance:</strong> Use services only for lawful purposes',
        '<strong>Content:</strong> You retain ownership of materials you submit'
      ]
    },
    {
      id: 'prohibited-activities',
      number: '4',
      title: 'Prohibited Activities',
      items: [
        'Reverse engineering or hacking our platform',
        'Distributing malware or harmful code',
        'Spamming other users',
        'Violating intellectual property rights',
        'Engaging in fraudulent activities'
      ]
    },
    {
      id: 'payments',
      number: '5',
      title: 'Payments & Refunds',
      items: ['All course fees are non-refundable once payment is processed. We reserve the right to change pricing at any time.']
    },
    {
      id: 'intellectual-property',
      number: '6',
      title: 'Intellectual Property',
      items: ['All course materials, content, and platform code are the exclusive property of ScaleFort and protected by copyright laws.']
    },
    {
      id: 'termination',
      number: '7',
      title: 'Termination',
      items: ['We reserve the right to suspend or terminate accounts for violations of these terms. You may terminate your account at any time.']
    },
    {
      id: 'disclaimer',
      number: '8',
      title: 'Disclaimer',
      items: ['Services are provided "as is" without warranties of any kind. We do not guarantee specific learning outcomes or career results.']
    },
    {
      id: 'liability',
      number: '9',
      title: 'Limitation of Liability',
      items: ['ScaleFort shall not be liable for any indirect, incidental, or consequential damages arising from use of our services.']
    },
    {
      id: 'governing-law',
      number: '10',
      title: 'Governing Law',
      items: ['These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.']
    },
    {
      id: 'changes',
      number: '11',
      title: 'Changes to Terms',
      items: ['We may update these terms periodically. Continued use after changes constitutes acceptance of modified terms.']
    },
    {
      id: 'contact',
      number: '12',
      title: 'Contact Us',
      items: ['For questions about these terms: <a href="mailto:legal@scalefort.org" class="text-blue-600 underline">legal@scalefort.org</a>']
    }
  ];
}
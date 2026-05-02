import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white">
      <div class="container-base max-w-4xl">
        <header appAnimateOnScroll [animateDelay]="80" class="text-center mb-10">
          <p class="overline mb-2">Legal</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">Terms of Service</h1>
          <p class="text-text-muted">Effective Date: October 11, 2024 | Last Updated: October 11, 2024</p>
        </header>

        <div appAnimateOnScroll [animateDelay]="120" class="card-base mb-8">
          <h2 class="text-h3 font-semibold text-text-primary mb-3">Quick Links</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            @for (section of sections; track section.id) {
              <a [href]="'#' + section.id" class="text-sm text-text-body no-underline hover:underline">{{ section.title }}</a>
            }
          </div>
        </div>

        <div class="space-y-6">
          @for (section of sections; track section.id; let i = $index) {
            <article appAnimateOnScroll [animateDelay]="160 + (i * 40)" [id]="section.id" class="card-base">
              <h2 class="text-h3 font-semibold text-text-primary mb-3">{{ section.number }}. {{ section.title }}</h2>
              <ul class="space-y-2 list-disc pl-5 text-text-body leading-relaxed">
                @for (item of section.items; track item) {
                  <li [innerHTML]="item"></li>
                }
              </ul>
            </article>
          }
        </div>

        <div appAnimateOnScroll [animateDelay]="240" class="card-base mt-8 text-center">
          <h2 class="text-h3 font-semibold text-text-primary mb-2">Need Help?</h2>
          <p class="text-text-muted mb-5">Contact our legal team.</p>
          <a href="mailto:legal@scalefort.org" class="btn-primary no-underline">legal&#64;scalefort.org</a>
        </div>
      </div>
    </section>
  `,
})
export class TermsOfServiceComponent {
  readonly sections = [
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
      items: ['For questions about these terms: <a href="mailto:legal@scalefort.org" class="text-accent-school underline">legal@scalefort.org</a>']
    }
  ];
}



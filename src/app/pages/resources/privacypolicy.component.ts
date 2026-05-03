import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="section bg-bg-white">
      <div class="container-base max-w-4xl">
        <header appAnimateOnScroll [animateDelay]="80" class="text-center mb-10">
          <p class="overline mb-2">Legal</p>
          <h1 class="text-h1 font-bold text-text-primary mb-3">Privacy Policy</h1>
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
          <p class="text-text-muted mb-5">Contact our Data Protection Officer.</p>
          <a href="mailto:privacy@scalefort.org" class="btn-primary no-underline">privacy&#64;scalefort.org</a>
        </div>
      </div>
    </section>
  `,
})
export class PrivacyPolicyComponent {
  readonly sections = [
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
      items: ['For questions or feedback about this policy, email us at <a href="mailto:privacy@scalefort.org" class="text-accent-school underline">privacy@scalefort.org</a>']
    }
  ];
}



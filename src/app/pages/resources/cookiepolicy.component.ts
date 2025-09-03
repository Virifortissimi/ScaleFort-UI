import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  template: `
    <div class="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 class="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p class="text-sm text-gray-500 mb-6">Effective Date: 11 May 2025 | Last Updated: 11/05/2025</p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">2. How We Use Cookies</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
          <li><strong>Preference Cookies:</strong> Remember your language and display settings</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our platform</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertising (if applicable)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser</li>
          <li><strong>Persistent Cookies:</strong> Remain on your device until expiration or deletion</li>
          <li><strong>First-Party Cookies:</strong> Set directly by our website</li>
          <li><strong>Third-Party Cookies:</strong> Set by our trusted partners (e.g., analytics providers)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">4. Managing Cookies</h2>
        <p class="mb-4">You can control and/or delete cookies through your browser settings:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" class="text-blue-600 underline" target="_blank">Cookie Settings</a></li>
          <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" class="text-blue-600 underline" target="_blank">Cookie Settings</a></li>
          <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" class="text-blue-600 underline" target="_blank">Cookie Settings</a></li>
          <li>Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" class="text-blue-600 underline" target="_blank">Cookie Settings</a></li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">5. Third-Party Cookies</h2>
        <p class="mb-4">We may use services that set cookies on our behalf:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Google Analytics</li>
          <li>Hotjar</li>
          <li>Facebook Pixel (if applicable)</li>
          <li>LinkedIn Insight Tag (if applicable)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy periodically. We'll notify you of significant changes through our website or email.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          For questions about our cookie usage: <a href="mailto:privacy@scalefort.org" class="text-blue-600 underline">privacy&#64;scalefort.org</a>
        </p>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .text-gray-800 {
      color: #2d3748;
    }

    .text-gray-500 {
      color: #6b7280;
    }

    .text-blue-600 {
      color: #2563eb;
    }

    .underline {
      text-decoration: underline;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .mb-8 {
      margin-bottom: 2rem;
    }

    .list-disc {
      list-style-type: disc;
    }

    .pl-5 {
      padding-left: 1.25rem;
    }

    .space-y-1 {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }

    .space-y-1 li {
      margin-bottom: 0.5rem;
    }
  `]
})
export class CookiePolicyComponent {}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-newsletter',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="text-sm text-gray-400 space-y-8">
      <div>
        <h4 class="text-lg font-semibold mb-4 text-white">Resources</h4>
        <ul class="space-y-2">
          <li><a href="/affiliate-policy" class="hover:text-white">Affiliate Policy</a></li>
          <li><a href="/faq" class="hover:text-white">FAQs</a></li>
          <li><a href="/contact" class="hover:text-white">Get in touch</a></li>
          <li><a href="https://medium.com/@scalefort" class="hover:text-white" target="_blank">Our Blog</a></li>
          <!-- <li><a href="#" class="hover:text-white">Scholarships</a></li> -->
        </ul>
      </div>
    </div>
  `
})
export class FooterNewsletterComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-newsletter',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-2">
        <li>
          <a href="https://facebook.com/scalefortHQ" class="text-gray-400 hover:text-white transition">Facebook</a>
        </li>
        <li>
          <a href="https://x.com/scalefortHQ" class="text-gray-400 hover:text-white transition">X</a>
        </li>
        <li>
          <a href="https://instagram.com/scalefort" class="text-gray-400 hover:text-white transition">Instagram</a>
        </li>
        <li>
          <a href="https://linkedin.com/scalefort" class="text-gray-400 hover:text-white transition">LinkedIn</a>
        </li>
      </ul>
    </div>
    
  `
})
export class FooterNewsletterComponent {}

// <div>
//       <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
//       <p class="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
//       <div class="flex">
//         <input 
//           type="email" 
//           placeholder="Enter your email" 
//           class="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//         <button class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
//           Subscribe
//         </button>
//       </div>
//     </div>
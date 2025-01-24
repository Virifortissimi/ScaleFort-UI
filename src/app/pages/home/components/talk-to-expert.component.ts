import { Component } from '@angular/core';

@Component({
  selector: 'app-talk-to-expert',
  standalone: true,
  template: `
    <section class="p-12 bg-gray-50">
        <div class="max-w-7xl mx-auto p-6">
            <div class="bg-blue-300 text-grey-50 rounded-lg p-24 relative">
            
            <!-- Content -->
            <h3 class="text-lg font-semibold text-xl text-gray-600 mb-8 mb-2">Need help choosing a course?</h3>
            <h2 class="text-4xl font-bold mb-4">Talk To An Expert</h2>
            <p class="text-xl text-gray-600 mb-8">
                Are you indecisive about what course to choose? Would you like to talk to a Tech expert about any tech-related issues? We have professionals ready and willing to assist you.
            </p>
            <a href="https://wa.me/message/H6MHZGJ2FLYHM1" class="bg-blue-900 text-white px-9 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                Get Help
            </a>
            </div>
        </div>
    </section>
  `
})
export class TalkToExpertComponent {}

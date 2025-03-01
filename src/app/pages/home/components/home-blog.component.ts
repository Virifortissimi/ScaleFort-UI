import { Component } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  template: `
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out" (click)="navigateToPost('https://medium.com/@scalefort/why-should-my-business-own-a-website-e4e488052206')">
            <img class="w-full h-56 object-cover rounded-md mb-4" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*HSZzrVqPfIcK5kPIFXio2A.jpeg" alt="Blog Image">
            <h3 class="text-xl font-semibold mb-2">Why Should My Business Own a Website?</h3>
            <p class="text-gray-600 mb-4">In today’s digital age, having a website is no longer a luxury — it’s a necessity. Whether running a small retail shop, a consulting firm...</p>
          </div>

          <!-- Blog Post 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out" (click)="navigateToPost('https://medium.com/@scalefort/real-life-projects-the-key-to-landing-your-first-tech-job-ff3045307f6b')">
            <img class="w-full h-56 object-cover rounded-md mb-4" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*lmdvguNO0zVkPbSPTg1B8Q.jpeg" alt="Blog Image">
            <h3 class="text-xl font-semibold mb-2">Real-Life Projects: The Key to Landing Your First Tech Job</h3>
            <p class="text-gray-600 mb-4">Landing your first tech job is often challenging, especially without real-world experience. That’s why at Scalefort, we believe that incorporating hands-on projects...</p>
          </div>

          <!-- Blog Post 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out" (click)="navigateToPost('https://medium.com/@scalefort/introducing-scalefort-your-pathway-to-thriving-in-tech-e6acc2c2960f')">
            <img class="w-full h-56 object-cover rounded-md mb-4" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jTokZWbebW4ft2wtp0MENw.png" alt="Blog Image">
            <h3 class="text-xl font-semibold mb-2">Introducing Scalefort: Your Pathway to Thriving in Tech</h3>
            <p class="text-gray-600 mb-4">Welcome to Scalefort, where we’re committed to empowering individuals to kickstart and scale their tech careers! The tech industry offers incredible...</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeBlogComponent {

  // Method to navigate to an external blog link
  navigateToPost(url: string): void {
    window.open(url, '_blank');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  template: `
    <section class="py-16 md:py-24 bg-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insights & Updates</h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Explore our latest articles on tech careers, learning strategies, and industry trends</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- Blog Post 1 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
            <div class="relative overflow-hidden">
              <img 
                class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*HSZzrVqPfIcK5kPIFXio2A.jpeg" 
                alt="Business website importance"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            </div>
            
            <div class="p-6 md:p-8">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Why Should My Business Own a Website?
              </h3>
              <p class="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                In today’s digital age, having a website is no longer a luxury — it’s a necessity. 
                Whether running a small retail shop, a consulting firm...
              </p>
              <a href="https://medium.com/@scalefort/why-should-my-business-own-a-website-e4e488052206" target="_blank" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Read More
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
            <div class="relative overflow-hidden">
              <img 
                class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*lmdvguNO0zVkPbSPTg1B8Q.jpeg" 
                alt="Real-life projects importance"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            </div>
            
            <div class="p-6 md:p-8">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Real-Life Projects: The Key to Landing Your First Tech Job
              </h3>
              <p class="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                Landing your first tech job is often challenging, especially without real-world experience. 
                That’s why at Scalefort, we believe that incorporating hands-on projects...
              </p>
              <a href="https://medium.com/@scalefort/real-life-projects-the-key-to-landing-your-first-tech-job-ff3045307f6b" target="_blank" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Read More
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
            <div class="relative overflow-hidden">
              <img 
                class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jTokZWbebW4ft2wtp0MENw.png" 
                alt="Scalefort introduction"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            </div>
            
            <div class="p-6 md:p-8">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Introducing Scalefort: Your Pathway to Thriving in Tech
              </h3>
              <p class="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                Welcome to Scalefort, where we’re committed to empowering individuals to kickstart 
                and scale their tech careers! The tech industry offers incredible...
              </p>
              <a href="https://medium.com/@scalefort/introducing-scalefort-your-pathway-to-thriving-in-tech-e6acc2c2960f" target="_blank" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Read More
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <div class="mt-12 text-center">
          <a href="https://medium.com/@scalefort" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium" target="_blank">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class HomeBlogComponent {
  // Method to navigate to an external blog link
  navigateToPost(url: string): void {
    window.open(url, '_blank');
  }
}
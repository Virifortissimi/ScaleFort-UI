import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface CarouselSlide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgClass: string;
}

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="relative">
          <!-- Carousel Container -->
          <div class="overflow-hidden rounded-xl">
            <div class="flex transition-transform duration-500 ease-in-out" 
                 [style.transform]="'translateX(-' + currentSlide * 100 + '%)'">
              <div *ngFor="let slide of slides" 
                   [class]="'min-w-full p-16 ' + slide.bgClass">
                <div class="max-w-3xl mx-auto text-center text-white">
                  <h2 class="text-4xl font-bold mb-6">{{ slide.title }}</h2>
                  <p class="text-xl mb-8">{{ slide.description }}</p>
                  <a [routerLink]="slide.buttonLink" 
                     class="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                    {{ slide.buttonText }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button 
            (click)="prevSlide()" 
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
            aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            (click)="nextSlide()" 
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
            aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Indicators -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            <button *ngFor="let slide of slides; let i = index" 
                    (click)="goToSlide(i)"
                    [class]="'w-2 h-2 rounded-full transition-all duration-300 ' + 
                            (i === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75')"
                    [attr.aria-label]="'Go to slide ' + (i + 1)">
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeCarouselComponent {
  currentSlide = 0;
  slides: CarouselSlide[] = [
    {
      title: "Shaping Africa's Next Generation of Innovators",
      description: "Join our community of tech leaders and innovators who are transforming the African tech landscape",
      buttonText: "Apply Now",
      buttonLink: "/get-started",
      bgClass: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      title: "Comprehensive Technology Solutions for Your Business",
      description: "From application development to digital transformation, we've got you covered",
      buttonText: "Explore Our Services",
      buttonLink: "/services",
      bgClass: "bg-gradient-to-r from-blue-700 to-indigo-800"
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.slides.length - 1 
      : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnInit() {
    // Auto-advance slides every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 9000);
  }
}
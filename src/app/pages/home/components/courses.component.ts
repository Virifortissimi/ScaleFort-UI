import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-courses',
    imports: [CommonModule],
    standalone: true,
    template: `
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div class="relative overflow-hidden">
          <!-- Slider Container -->
          <div
            class="flex transition-transform duration-700 ease-in-out"
            [style.transform]="sliderTransform"
          >
            <div *ngFor="let course of courses" class="course-slide">
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 class="text-xl font-semibold mb-4">{{ course.name }}</h3>
                <p class="text-gray-600 mb-4">{{ course.description }}</p>
                <button
                  (click)="applyNow()"
                  class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            (click)="prevSlide()"
          >
            &#8592;
          </button>
          <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            (click)="nextSlide()"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  `,
    styles: [
        `
      .course-slide {
        flex: 0 0 calc(100% / 3); /* Show 3 slides on desktop */
        max-width: calc(100% / 3);
        padding: 0 0.5rem;
      }

      .bg-white {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Nice shadow effect */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .bg-white:hover {
        transform: scale(1.05);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
      }

      .flex {
        display: flex;
        gap: 1rem;
      }

      @media (max-width: 768px) {
        .course-slide {
          flex: 0 0 100%; /* Show 1 slide on mobile */
          max-width: 100%;
        }
      }
    `,
    ],
})
export class CoursesComponent implements OnInit, OnDestroy {
    courses = [
        {
            name: 'Frontend Web Development',
            description: 'Learn the building blocks of web development and create stunning, interactive websites.',
        },
        {
            name: 'Cloud Computing',
            description: 'Understand cloud platforms, deployments, and how to leverage services like AWS and Azure.',
        },
        {
            name: 'Backend Engineering with C#',
            description: 'Build robust, scalable, and secure APIs and systems using .NET technologies.',
        },
        {
            name: 'Backend Engineering with Python',
            description: 'Develop efficient, high-performance backends using Python and Django.',
        },
        {
            name: 'Customer Support/Success',
            description: 'Gain the essential communication, problem-solving, and technical skills to excel in tech-driven customer support roles, helping users resolve issues effectively and fostering satisfaction.',
        },
    ];

    currentIndex = 0;
    autoSlideInterval: any;

    ngOnInit() {
        this.startAutoSlide();
    }

    ngOnDestroy() {
        clearInterval(this.autoSlideInterval);
    }

    get sliderTransform() {
        const slidesToShow = window.innerWidth > 768 ? 3 : 1; // Adjust based on screen size
        return `translateX(-${(this.currentIndex * 100) / slidesToShow}%)`;
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Slide every 3 seconds
    }

    prevSlide() {
        const slidesToShow = window.innerWidth > 768 ? 3 : 1;
        const totalSlides = this.courses.length;
        const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

        this.currentIndex =
            this.currentIndex > 0 ? this.currentIndex - 1 : maxIndex;
    }

    nextSlide() {
        const slidesToShow = window.innerWidth > 768 ? 3 : 1;
        const totalSlides = this.courses.length;
        const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

        this.currentIndex =
            this.currentIndex < maxIndex ? this.currentIndex + 1 : 0;
    }

    applyNow() {
        window.location.href = '/get-started'; // Replace with the correct route or external URL
    }
}

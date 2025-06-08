import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h4 class="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Why Choose ScaleFort?
          </h4>
          <h2 class="text-5xl font-bold text-center mb-12 text-blue-900">We are committed to customer satisfaction.</h2>
          <p class="text-gray-600 text-lg">
            Our integrated approach combines education, training, and technology solutions to create a comprehensive ecosystem for digital transformation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let feature of features; let i = index"
               class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
               [class.transform]="true"
               [class.hover:-translate-y-2]="true"
               [style.animation-delay]="i * 200 + 'ms'">
            <!-- Animated Background -->
            <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                 [ngStyle]="{'background-image': feature.gradient}">
            </div>

            <!-- Icon -->
            <div class="relative">
              <div class="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span class="text-3xl">{{ feature.icon }}</span>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ feature.description }}</p>

            <!-- Feature List -->
            <ul class="space-y-3">
              <li *ngFor="let point of feature.points" 
                  class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeFeaturesComponent {
  features = [
    {
      icon: '🎓',
      title: 'Tech Education Excellence',
      description: 'World-class training programs designed to create industry-ready professionals.',
      gradient: 'linear-gradient(45deg, #60A5FA, #818CF8)',
      points: [
        'Industry-driven curriculum',
        'Hands-on project experience',
        'Expert instructors',
        'Career placement support'
      ]
    },
    {
      icon: '💼',
      title: 'Corporate Transformation',
      description: 'Comprehensive training solutions to upskill your workforce and drive innovation.',
      gradient: 'linear-gradient(45deg, #818CF8, #A78BFA)',
      points: [
        'Customized training programs',
        'Skill gap analysis',
        'Progress tracking',
        'Measurable outcomes'
      ]
    },
    {
      icon: '🚀',
      title: 'Technology Solutions',
      description: 'End-to-end digital solutions that power business growth and efficiency.',
      gradient: 'linear-gradient(45deg, #A78BFA, #60A5FA)',
      points: [
        'Custom software development',
        'Application support',
        'QA testing',
        'Strategic consulting'
      ]
    }
  ];
}
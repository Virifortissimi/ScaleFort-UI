import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob1"></div>
        <div class="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob2"></div>
        <div class="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob3"></div>
      </div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative pt-32 pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content Left -->
          <div class="animate-fade-in">
            <div class="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 animate-slide-up">
              🚀 Transforming Africa's Digital Future
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up" style="animation-delay: 200ms">
              Tech Education & Innovation Hub
            </h1>
            <p class="text-xl text-blue-100 mb-8 leading-relaxed animate-slide-up" style="animation-delay: 400ms">
              Empowering businesses and individuals through world-class tech education, corporate training, and comprehensive IT solutions.
            </p>
            <div class="space-x-4 animate-slide-up" style="animation-delay: 600ms">
              <a routerLink="/courses" 
                 class="inline-flex items-center px-8 py-3 journey rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span class="mr-2">Start Your Journey</span>
                <svg class="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a routerLink="/services"  
                 class="inline-flex items-center px-8 py-3 solution rounded-full border-2 border-white/50 hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Explore Solutions
              </a>
            </div>
          </div>

          <!-- Features Grid -->
          <div class="grid grid-cols-2 gap-6 animate-fade-in" style="animation-delay: 800ms">
            <div *ngFor="let feature of features; let i = index" 
                 class="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                 [style.animation-delay]="i * 200 + 'ms'">
              <div class="text-3xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                {{ feature.icon }}
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-blue-100">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style="animation-delay: 1000ms">
          <div *ngFor="let stat of stats" 
               class="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div class="text-3xl font-bold text-blue-400 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-blue-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes blob1 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30%, -20%) scale(1.1); }
      66% { transform: translate(-20%, 20%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    @keyframes blob2 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-30%, 30%) scale(1.1); }
      66% { transform: translate(20%, -20%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    @keyframes blob3 {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(20%, 20%) scale(1.1); }
      66% { transform: translate(-30%, -30%) scale(0.9); }
      100% { transform: translate(0, 0) scale(1); }
    }
    .animate-blob1 { animation: blob1 12s infinite linear; }
    .animate-blob2 { animation: blob2 12s infinite linear; }
    .animate-blob3 { animation: blob3 12s infinite linear; }
    @keyframes bounce-x {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
    .animate-bounce-x {
      animation: bounce-x 1s infinite;
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      opacity: 0;
      animation: fade-in 1s forwards;
    }
    .animate-slide-up {
      opacity: 0;
      animation: slide-up 1s forwards;
    }
  `]
})
export class HomeHeroComponent {
  features = [
    {
      icon: '🎓',
      title: 'Tech School',
      description: 'Industry-driven curriculum with hands-on learning experience'
    },
    {
      icon: '💼',
      title: 'Corporate Training',
      description: 'Customized upskilling programs for your workforce'
    },
    {
      icon: '🚀',
      title: 'IT Services',
      description: 'End-to-end software solutions and consulting'
    },
    {
      icon: '🔄',
      title: 'Innovation Hub',
      description: 'Integrated ecosystem for continuous growth'
    }
  ];

  stats = [
    { value: '100+', label: 'Learners Served' },
    { value: '10+', label: 'Clients' },
    { value: '5+', label: 'Corporate Partners' },
    { value: '24/7', label: 'Support' }
  ];
}
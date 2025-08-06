import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div>
      <!-- Hero Section -->
      <section class="relative min-h-[80vh] bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white overflow-hidden flex items-center">
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-blob1"></div>
          <div class="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-blob2"></div>
        </div>
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10 py-24">
          <div class="max-w-3xl animate-fade-in">
            <div class="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 animate-slide-up">
              🚀 Transform Your Digital Presence
            </div>
            <h1 class="text-6xl font-bold mb-6 leading-tight animate-slide-up" style="animation-delay: 200ms">
              Full-Cycle IT Solutions<br/>for Modern Businesses
            </h1>
            <p class="text-xl mb-8 text-green-100 animate-slide-up" style="animation-delay: 400ms">
              From concept to deployment - we deliver cutting-edge web solutions that drive growth and innovation.
            </p>
            <div class="animate-slide-up" style="animation-delay: 600ms">
              <a routerLink="/contact" 
                 class="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span class="mr-2">Start Your Project</span>
                <svg class="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Services Section -->
      <section class="py-32 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8 animate-on-scroll">
              <div class="inline-block px-4 py-1 rounded-full bg-green-50 text-green-600 font-medium">
                Our Expertise
              </div>
              <h2 class="text-4xl font-bold leading-tight">
                Comprehensive Web Development Services
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                We combine technical excellence with creative vision to deliver digital solutions that make an impact.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Full-stack development</span>
                </li>
                <li class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Cloud integration & DevOps</span>
                </li>
                <li class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span class="text-gray-700">Custom API development</span>
                </li>
              </ul>
            </div>
            <div class="relative aspect-video group animate-on-scroll">
              <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl transform group-hover:scale-95 transition-all duration-500"></div>
              <img src="assets/web-dev-process.png" 
                   class="relative w-full h-full rounded-xl shadow-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500"
                   alt="Web development process">
            </div>
          </div>
        </div>
      </section>

      <!-- Service Offerings Section -->
      <section class="py-32 bg-gray-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div class="inline-block px-4 py-1 rounded-full bg-green-50 text-green-600 font-medium mb-4">
              Our Services
            </div>
            <h2 class="text-4xl font-bold mb-6">End-to-End Digital Solutions</h2>
            <p class="text-gray-600 text-lg">
              Comprehensive services covering all aspects of modern web development and digital transformation
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of services; let i = index" 
                 class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-on-scroll"
                 [style.animation-delay]="i * 100 + 'ms'">
              <div class="relative overflow-hidden">
                <img [src]="service.image" [alt]="service.title" 
                     class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <span class="px-3 py-1 bg-green-600 rounded-full text-sm font-medium">
                    {{ service.category }}
                  </span>
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-gray-600 mb-6">{{ service.description }}</p>
                <div class="space-y-3 mb-8">
                  <p class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ service.features[0] }}
                  </p>
                  <p class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ service.features[1] }}
                  </p>
                </div>
                <a routerLink="/contact" 
                   class="inline-flex items-center px-6 py-3 bg-green-50 text-green-600 rounded-full font-semibold group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  Get Started
                  <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div class="inline-block px-4 py-1 rounded-full bg-green-50 text-green-600 font-medium mb-4">
              Our Technology Stack
            </div>
            <h2 class="text-4xl font-bold mb-6">Modern Tools for Modern Solutions</h2>
            <p class="text-gray-600 text-lg">
              We work with cutting-edge technologies to deliver robust and scalable solutions
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
            <div class="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
              <img src="assets/react-logo.png" alt="React" class="h-16 mx-auto mb-4">
              <h3 class="font-semibold mb-2">Frontend</h3>
              <p class="text-gray-600">React, Angular, Vue.js</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
              <img src="assets/nodejs-logo.png" alt="Node.js" class="h-16 mx-auto mb-4">
              <h3 class="font-semibold mb-2">Backend</h3>
              <p class="text-gray-600">Node.js, Python, .NET</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
              <img src="assets/aws-logo.png" alt="AWS" class="h-16 mx-auto mb-4">
              <h3 class="font-semibold mb-2">Cloud</h3>
              <p class="text-gray-600">AWS, Azure, Google Cloud</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all">
              <img src="assets/docker-logo.png" alt="Docker" class="h-16 mx-auto mb-4">
              <h3 class="font-semibold mb-2">DevOps</h3>
              <p class="text-gray-600">Docker, Kubernetes, Terraform</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-32 bg-green-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div class="inline-block px-4 py-1 rounded-full bg-white text-green-600 font-medium mb-4">
              Our Process
            </div>
            <h2 class="text-4xl font-bold mb-6">Transparent Development Workflow</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
            <div class="p-6 text-center">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 class="font-semibold mb-2">Discovery & Planning</h3>
              <p class="text-gray-600">Requirement analysis and project scoping</p>
            </div>
            <div class="p-6 text-center">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 class="font-semibold mb-2">Design & Prototyping</h3>
              <p class="text-gray-600">UI/UX design and architecture planning</p>
            </div>
            <div class="p-6 text-center">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 class="font-semibold mb-2">Development</h3>
              <p class="text-gray-600">Agile development with weekly demos</p>
            </div>
            <div class="p-6 text-center">
              <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 class="font-semibold mb-2">Deployment & Support</h3>
              <p class="text-gray-600">CI/CD implementation and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-32 bg-gradient-to-r from-green-600 to-teal-600 text-white relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob1"></div>
          <div class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob2"></div>
        </div>
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p class="text-lg md:text-xl mb-6">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <a href="/contact" 
             class="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg">
            Schedule Consultation
            <svg class="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* Keep existing animation styles from courses component */
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
    .animate-blob1 { animation: blob1 12s infinite linear; }
    .animate-blob2 { animation: blob2 12s infinite linear; }
    
    @keyframes bounce-x {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
    .animate-bounce-x {
      animation: bounce-x 1s infinite;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: all 1s;
    }
    
    .animate-on-scroll.active {
      opacity: 1;
      transform: translateY(0);
    }
  `]
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Custom Web Development',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3',
      description: 'Tailored web applications built with modern frameworks and scalable architectures',
      features: [
        'Responsive & SEO-friendly',
        'User-centric design'
      ]
    },
    {
      title: 'E-Commerce Solutions',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3',
      description: 'Complete online store development with secure payment integration',
      features: [
        'Shopping cart systems',
        'Inventory management'
      ]
    },
    {
      title: 'Cloud Integration',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3',
      description: 'Cloud infrastructure setup and migration services',
      features: [
        'AWS/Azure/GCP experts',
        'Cost optimization'
      ]
    },
    {
      title: 'API Development',
      category: 'Integration',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3',
      description: 'Custom API development and third-party integrations',
      features: [
        'REST & GraphQL APIs',
        'Microservices architecture'
      ]
    },
    {
      title: 'Maintenance & Support',
      category: 'Support',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3',
      description: 'Ongoing support and performance optimization',
      features: [
        '24/7 monitoring',
        'Security updates'
      ]
    },
    {
      title: 'UI/UX Design',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
      description: 'User-centered interface design and prototyping',
      features: [
        'Interactive prototypes',
        'User testing'
      ]
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }, 0);
  }
}
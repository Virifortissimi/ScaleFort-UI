import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-hero',
  standalone: true,
  template: `
    <section class="relative bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-900 text-white overflow-hidden py-20 md:py-32">
  <!-- Background pattern with subtle animation -->
  <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTE4IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTMwIDM2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-background-pan"></div>
  
  <!-- Animated gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-600/10 to-blue-800/10 animate-gradient-x"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
  <div class="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"></div>
  <div class="absolute top-1/3 left-1/4 w-40 h-40 bg-white/5 rounded-full mix-blend-overlay filter blur-2xl animate-float animation-delay-4000"></div>
  
  <!-- Geometric shapes -->
  <div class="absolute top-20 right-20 w-16 h-16 border-2 border-white/20 rounded-lg animate-pulse-slow rotate-45"></div>
  <div class="absolute bottom-20 left-20 w-12 h-12 border-2 border-white/20 rounded-full animate-ping-slow"></div>
  <div class="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white/20 animate-spin-slow"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="text-center space-y-8 max-w-4xl mx-auto">
      <div class="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm mb-2 border border-white/20 animate-fade-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
        Frequently Asked Questions
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">
        Let's Answer Your
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">Questions</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms]">
        Everything you need to know about ScaleFort's programs, admissions process, and success strategies for your tech career.
      </p>
      
      <div class="pt-6 animate-fade-in-up [animation-delay:600ms]">
        <div class="inline-flex bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div class="text-left">
              <p class="text-sm font-medium text-blue-200">Quick Assistance</p>
              <p class="text-xs text-blue-300">Can't find what you're looking for? <a href="#contact" class="text-cyan-300 hover:text-cyan-200 underline">Contact our team</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="pt-8 animate-fade-in-up [animation-delay:800ms]">
        <a href="/faq#faq-section" class="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          Explore FAQs
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  
  <!-- Animated scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
      <div class="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-gradient-x {
    animation: gradientX 15s ease infinite;
    background-size: 400% 400%;
  }
  
  .animate-background-pan {
    animation: backgroundPan 20s linear infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-ping-slow {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-spin-slow {
    animation: spin 10s linear infinite;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes gradientX {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @keyframes backgroundPan {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 100px;
    }
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  `]
})
export class FaqHeroComponent {}

// <!-- Animated search bar -->
//           <div class="mt-8 max-w-xl mx-auto animate-fade-in-up [animation-delay:400ms]">
//             <div class="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search questions..."
//                 class="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-blue-100/60"
//               >
//               <button class="absolute right-3 top-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition">
//                 <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
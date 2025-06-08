import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-hero',
  standalone: true,
  template: `
    <section class="relative bg-gradient-to-br from-indigo-600 to-blue-800 text-white overflow-hidden py-16 md:py-24">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>
      
      <!-- Floating circles -->
      <div class="absolute top-0 left-20 w-64 h-64 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
      <div class="absolute bottom-0 right-20 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center space-y-6 max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Let's Answer Your Questions
          </h1>
          <p class="text-xl md:text-2xl text-blue-100/90 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Everything you need to know about ScaleFort's programs, admissions, and success strategies
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
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
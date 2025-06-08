import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center z-50">
      <div class="relative">
        <!-- Logo -->
        <div class="text-4xl font-bold text-white mb-4 text-center animate-pulse">
          ScaleFort
        </div>
        
        <!-- Animated Circle -->
        <div class="w-16 h-16 relative mx-auto">
          <div class="w-16 h-16 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
        </div>
        
        <!-- Loading Text -->
        <div class="mt-4 text-blue-200 text-center">
          <span class="inline-block animate-bounce">L</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.1s">o</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.2s">a</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.3s">d</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.4s">i</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.5s">n</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.6s">g</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.7s">.</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.8s">.</span>
          <span class="inline-block animate-bounce" style="animation-delay: 0.9s">.</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    .animate-bounce {
      animation: bounce 1s ease infinite;
    }
    
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }
  `]
})
export class LoaderComponent {}
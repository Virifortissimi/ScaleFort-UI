import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-circuit',
  standalone: true,
  template: `
    <svg 
      class="w-full h-full" 
      viewBox="0 0 800 600" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="circuit-paths">
        <!-- Circuit paths with animation -->
        <path 
          d="M 50,300 Q 200,300 200,200 T 350,100" 
          class="circuit-line"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
        />
        <path 
          d="M 100,400 Q 250,400 250,300 T 400,200" 
          class="circuit-line"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
        />
        <path 
          d="M 150,500 Q 300,500 300,400 T 450,300" 
          class="circuit-line"
          stroke="currentColor"
          fill="none"
          stroke-width="2"
        />

        <!-- Animated dots -->
        <circle class="circuit-dot" r="4" fill="currentColor">
          <animateMotion 
            dur="3s" 
            repeatCount="indefinite"
            path="M 50,300 Q 200,300 200,200 T 350,100"
          />
        </circle>
        <circle class="circuit-dot" r="4" fill="currentColor">
          <animateMotion 
            dur="4s" 
            repeatCount="indefinite"
            path="M 100,400 Q 250,400 250,300 T 400,200"
          />
        </circle>
        <circle class="circuit-dot" r="4" fill="currentColor">
          <animateMotion 
            dur="5s" 
            repeatCount="indefinite"
            path="M 150,500 Q 300,500 300,400 T 450,300"
          />
        </circle>
      </g>
    </svg>
  `,
  styles: [`
    .circuit-line {
      opacity: 0.3;
    }
    .circuit-dot {
      opacity: 0.8;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.3; }
    }
    .circuit-paths {
      animation: fadeIn 1s ease-in;
    }
  `]
})
export class AnimatedCircuitComponent {}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  standalone: true,
  template: `
    <button 
      (click)="toggle.emit()"
      class="md:hidden p-2 hover:text-blue-400 transition-colors"
      aria-label="Toggle menu"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        class="w-6 h-6"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  `
})
export class MenuToggleComponent {
  @Output() toggle = new EventEmitter<void>();
}
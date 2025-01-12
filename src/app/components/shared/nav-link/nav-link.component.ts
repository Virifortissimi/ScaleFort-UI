import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a 
      [routerLink]="to" 
      routerLinkActive="text-blue-600" 
      [routerLinkActiveOptions]="exact ? { exact: true } : { exact: false }"
      class="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm uppercase tracking-wider"
    >
      {{ text }}
    </a>
  `
})
export class NavLinkComponent {
  @Input() to!: string;
  @Input() text!: string;
  @Input() exact = false;
}
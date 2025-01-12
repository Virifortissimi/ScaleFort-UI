import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HeaderComponent } from './app/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent],
  template: `
    <app-header></app-header>
    
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
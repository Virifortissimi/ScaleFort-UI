import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { FooterComponent } from './app/components/footer/footer.component';
import { HeaderComponent } from './app/components/header/header.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './app/shared/components/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, FooterComponent, HeaderComponent, CommonModule, LoaderComponent ],
  template: `
    <app-loader *ngIf="loading"></app-loader>
    <div [style.visibility]="loading ? 'hidden' : 'visible'">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class App {
  loading = true;

  ngOnInit() {
      // Simulate loading time (remove in production)
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }

  bootstrapApplication(App, {
    providers: [
      provideRouter(routes)
  ]
});
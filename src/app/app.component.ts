import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from "./shared/components/loader.component";
import { ToastModule } from 'primeng/toast';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ToastModule
  ],
  template: `
    <p-toast />
    <app-loader *ngIf="loading"></app-loader>
    <div [style.visibility]="loading ? 'hidden' : 'visible'">
      <app-header></app-header>
      <div class="relative top-[4rem]">
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </div>
    </div>
  `
})
export class AppComponent {
  loading = true;

  ngOnInit() {
    // Simulate loading time (remove in production)
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
import { Component } from '@angular/core';
import { ResourcesHeroComponent } from './components/resources-hero.component';
import { ResourcesCategoriesComponent } from './components/resources-categories.component';
import { ResourcesFeaturedComponent } from './components/resources-featured.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    ResourcesHeroComponent,
    ResourcesCategoriesComponent,
    ResourcesFeaturedComponent
  ],
  template: `
    <div class="pt-16">
      <app-resources-hero />
      <app-resources-categories />
      <app-resources-featured />
    </div>
  `
})
export class ResourcesComponent {}
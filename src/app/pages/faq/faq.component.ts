import { Component } from '@angular/core';
import { FaqHeroComponent } from './components/faq-hero.component';
import { FaqListComponent } from './components/faq-list.component';
import { FaqContactComponent } from './components/faq-contact.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqHeroComponent, FaqListComponent, FaqContactComponent],
  template: `
    <div class="pt-16">
      <app-faq-hero />
      <app-faq-list />
      <app-faq-contact />
    </div>
  `
})
export class FaqComponent {}
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FaqItemComponent } from './faq-item.component';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [NgFor, FaqItemComponent],
  template: `
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="space-y-6">
          <app-faq-item
            *ngFor="let faq of faqs"
            [question]="faq.question"
            [answer]="faq.answer"
          />
        </div>
      </div>
    </section>
  `
})
export class FaqListComponent {
  faqs = this.faqService.getFaqs();
  
  constructor(private faqService: FaqService) {}
}
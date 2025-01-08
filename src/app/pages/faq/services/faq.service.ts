import { Injectable } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqs: Faq[] = [
    {
      question: 'How does the mentorship matching process work?',
      answer: 'Our matching process uses a smart algorithm that considers your goals, expertise level, and industry to pair you with the most suitable mentor. You can also browse and request specific mentors.'
    },
    {
      question: 'What types of mentorship programs are available?',
      answer: 'We offer 1:1 mentorship, group sessions, and specialized startup mentoring programs. Each program is tailored to meet different needs and learning styles.'
    },
    {
      question: 'How much does mentorship cost?',
      answer: 'Mentorship costs vary based on the program type and mentor expertise. We offer flexible pricing options and some free community resources to ensure accessibility.'
    },
    {
      question: 'Can I become a mentor?',
      answer: 'Yes! If you have significant experience in tech or entrepreneurship, you can apply to become a mentor. We review applications based on expertise and commitment to helping others.'
    },
    {
      question: 'What resources are available?',
      answer: 'We provide access to tutorials, business guides, case studies, webinars, templates, and a resource library covering various tech and business topics.'
    }
  ];

  getFaqs(): Faq[] {
    return this.faqs;
  }
}
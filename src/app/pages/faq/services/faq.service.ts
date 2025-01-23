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
      question: 'Do I need prior technical experience to join Scalefort?',
      answer: 'No prior experience is required! Scalefort offers beginner-friendly foundational classes like HTML, CSS, and JavaScript, making it perfect for anyone starting their tech journey. Advanced learners can also benefit from our specialized classes.'
    },
    {
      question: 'What is the duration of the Scalefort program?',
      answer: 'The Scalefort program runs for 12 weeks, divided into structured modules. This includes foundational classes, real-world projects, and mentorship sessions, ensuring you gain practical skills and industry-ready expertise.'
    },
    {
      question: 'Would there be Recruitment Support?',
      answer: 'Scalefort would help all candidates to comprehensive recruitment training and support by the end of the training. Please download and go through the brochure'
    },
    {
      question: 'How much does training cost?',
      answer: 'Training costs <s>350,000</s> 299,999 Naira. We offer flexible pricing options and some free community resources to ensure accessibility. Please download and go through the brochure'
    },
    {
      question: 'Can I become a mentor?',
      answer: 'Yes! If you have significant experience in tech, you can apply to become a mentor. We review applications based on expertise and commitment to helping others. Send an email'
    },
    {
      question: 'What resources are available?',
      answer: 'We provide access to tutorials, classes, documents, structured guides, and a resource library covering various tech topics.'
    }
  ];

  getFaqs(): Faq[] {
    return this.faqs;
  }
}
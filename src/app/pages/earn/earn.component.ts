import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-earn',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass],
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.css']
})
export class EarnComponent {
  activeIndex: number | null = null;

  steps = [
    {
      title: 'Create Account',
      description: 'Sign up to get your unique referral code and dashboard'
    },
    {
      title: 'Share Link',
      description: 'Share your referral link through social media, email, or messaging'
    },
    {
      title: 'Friends Enroll',
      description: 'Your friends get 10% off when using your code'
    },
    {
      title: 'Earn Commissions',
      description: 'Receive 10% of their application fee instantly'
    }
  ];

  faqs = [
    {
      question: 'What does the applicant get?',
      answer: 'They get a 10% discount on their application fee when they use your referral code.'
    },
    {
      question: 'Is there a referral limit?',
      answer: 'No limits - refer as many as you want and earn from every successful application.'
    },
    {
      question: 'How do I track my earnings?',
      answer: 'Real-time tracking available in your personalized referral dashboard'
    },
    {
      question: 'When can I withdraw earnings?',
      answer: 'Withdraw anytime once you reach the minimum ₦5,000 threshold'
    },
    {
      question: 'Is there a program fee?',
      answer: 'Absolutely free to join and participate in our referral program'
    }
  ];

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

// <div class="mt-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm animate-fade-in-up [animation-delay:600ms]">
//               <p class="text-sm font-mono text-indigo-200">Your referral code: <span class="font-bold text-white">SCALEFORT-1234</span></p>
//               <button class="mt-2 text-sm text-indigo-200 hover:text-white flex items-center mx-auto">
//                 <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
//                 </svg>
//                 Copy Code
//               </button>
//             </div>
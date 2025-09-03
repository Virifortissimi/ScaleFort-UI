import { Component, inject, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ReferralService } from "../../shared/services/referral.service";
import { MessageService } from "primeng/api";
import { IReferral } from "../../shared/models/referral.model";

@Component({
  selector: "app-earn",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./earn.component.html",
  styleUrls: ["./earn.component.css"],
})
export class EarnComponent implements OnInit {

  private readonly _referralService = inject(ReferralService);
  private readonly messageService = inject(MessageService);
  
  referralDetails = signal<IReferral>({});

  activeIndex: number | null = null;

  steps = [
    {
      title: "Create Account",
      description: "Sign up to get your unique referral code and dashboard",
    },
    {
      title: "Share Link",
      description:
        "Share your referral code and link to application through social media, email, or messaging",
    },
    {
      title: "Friends Enroll",
      description: "Your friends get 10% off when using your code",
    },
    {
      title: "Earn Commissions",
      description: "Receive 10% of their application fee instantly",
    },
  ];

  faqs = [
    {
      question: "What does the applicant get?",
      answer:
        "They get a 10% discount on their application fee when they use your referral code.",
    },
    {
      question: "Is there a referral limit?",
      answer:
        "No limits - refer as many as you want and earn from every successful application.",
    },
    {
      question: "How do I track my earnings?",
      answer:
        "Real-time tracking available in your personalized referral dashboard",
    },
    {
      question: "When can I withdraw earnings?",
      answer: "Withdraw anytime once you reach the minimum ₦50,000 threshold",
    },
    {
      question: "Is there a program fee?",
      answer: "Absolutely free to join and participate in our referral program",
    },
  ];

  ngOnInit(): void {
    this.getReferralEarn();
  }

  getReferralEarn() {
    this._referralService.getReferralEarn()
    .pipe()
    .subscribe({
      next: (res) => {
        this.referralDetails.set(res);
      },
    });
  }

  copyReferralCode(): void {
    let referralId = this.referralDetails().referralId;
    if(referralId) {
      navigator.clipboard.writeText(referralId).then(() => {
        this.messageService.add({
          severity: 'success',
          detail: 'Referral Code Copied!',
          life: 5000,
        });
      });
    }
  }

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
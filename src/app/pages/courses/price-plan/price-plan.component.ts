import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { ICreatePayment } from '../../../shared/models/payment.model';
import { PaymentService } from '../../../shared/services/payment.service';
import { MessageService } from 'primeng/api';
import { PricingService } from '../../../shared/services/pricing.service';
import { IPricePlan } from '../../../shared/models/pricing.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrl: './price-plan.component.css'
})
export class PricePlanComponent implements OnInit {

  private readonly _paymentService = inject(PaymentService);
  private readonly _pricingService = inject(PricingService);
  private readonly messageService = inject(MessageService);
  
  userEmail = input<string | undefined>('');
  applicationId = input<string | undefined>('');
  referralId = input<string | undefined>('');
  closeDialog = output<string>();
  isLoading = signal(false);

  pricePlans: IPricePlan[] = [
    { id: 1, title: 'One-Time Payment', description: 'Pay in full and get started immediately.' },
    { id: 2, title: 'Two Installments', description: 'Pay in two equal payments over a period of time.' }, 
    { id: 3, title: 'Three Installments', description: 'Break down the cost into three manageable payments.' }
  ];

  ngOnInit(): void {
    this.getPricing();
  }

  getPricing() {
    this._pricingService.getPricing(this.referralId()).subscribe({
      next: (res) => {
        const oneTimePlan = this.pricePlans.find(p => p.id === 1);
        if (oneTimePlan) {
          oneTimePlan.mainAmount = res.mainOnceAmount;
          oneTimePlan.discountedAmount = res.onceAmount;
        }

        const twoInstallmentsPlan = this.pricePlans.find(p => p.id === 2);
        if (twoInstallmentsPlan) {
          twoInstallmentsPlan.mainAmount = res.mainTwiceAmount;
          twoInstallmentsPlan.discountedAmount = res.twiceAmount;
        }

        const threeInstallmentsPlan = this.pricePlans.find(p => p.id === 3);
        if (threeInstallmentsPlan) {
          threeInstallmentsPlan.mainAmount = res.mainThriceAmount;
          threeInstallmentsPlan.discountedAmount = res.thriceAmount;
        }
      }
    })
  }

  selectPlan(amount?: number) {
    this.isLoading.set(true);

    const payload: ICreatePayment = {
      customerEmail: this.userEmail(),
      amount: amount,
      currency: 'NGN',
      orderReference: this.applicationId(),
    };

    this._paymentService
    .initializePaystackPayment(this.applicationId(), payload)
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (res) => {
        this.closeDialog.emit('close');
        this._paymentService.payWithPaystack(res.accessCode);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Enrollment error',
          detail: error || 'Something went wrong',
          life: 5000,
        });
      },
    });    
  }

}

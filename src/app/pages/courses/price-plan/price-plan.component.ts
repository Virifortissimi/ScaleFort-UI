import { Component, inject, input, output, signal } from '@angular/core';
import { ICreatePayment } from '../../../shared/models/payment.model';
import { PaymentService } from '../../../shared/services/payment.service';
import { finalize } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrl: './price-plan.component.css'
})
export class PricePlanComponent {

  private readonly _paymentService = inject(PaymentService);
  private readonly messageService = inject(MessageService);
  
  userEmail = input<string | undefined>('');
  applicationId = input<string | undefined>('');
  closeDialog = output<string>();
  isLoading = signal(false);

  pricePlans: any[] = [
    { id: 1, title: 'One-Time Payment', description: 'Pay in full and get started immediately.', amount: 300000 },
    { id: 2, title: 'Two Installments', description: 'Pay in two equal payments over a period of time.', amount: 150000 }, 
    { id: 3, title: 'Three Installments', description: 'Break down the cost into three manageable payments.', amount: 100000 }
  ];

  selectPlan(amount: number) {
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

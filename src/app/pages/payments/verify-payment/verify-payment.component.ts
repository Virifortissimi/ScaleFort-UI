import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaymentService } from '../../../shared/services/payment.service';
import { finalize } from 'rxjs';
import { SpinnerIconComponent } from '../../../shared/components/spinner-icon.component';

@Component({
  selector: 'app-verify-payment',
  standalone: true,
  imports: [SpinnerIconComponent, RouterModule],
  templateUrl: './verify-payment.component.html',
  styleUrl: './verify-payment.component.css'
})
export class VerifyPaymentComponent implements OnInit {
  private readonly paymentService = inject(PaymentService);
  private readonly route = inject(ActivatedRoute);

  private readonly paymentRef =
  this.route.snapshot.queryParamMap.get('reference');
  loading = false;
  paymentSuccess = false;

  ngOnInit(): void {
    this.verifyPayment();
  }

  verifyPayment() {
    this.loading = true;
    this.paymentService
      .verifyPaystackPayment(this.paymentRef!)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res: any) => {
          if (res === 'Payment successful') this.paymentSuccess = true;
          else this.paymentSuccess = false;
        },
      });
  }
}

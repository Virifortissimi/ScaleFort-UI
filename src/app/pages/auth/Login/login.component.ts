import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaymentService } from '../../../shared/services/payment.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // private readonly _paymentService = inject(PaymentService);
  constructor(
    private _paymentService: PaymentService
  ) {}
  
  ngOnInit(): void {
    console.log('Login component initialized');
    
    this._paymentService.payWithPaystack();
  }
}
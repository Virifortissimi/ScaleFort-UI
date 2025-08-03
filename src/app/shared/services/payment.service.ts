import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
// @ts-ignore // DELETE
// import PaystackPop from '@paystack/inline-js';

@Injectable({
  providedIn: "root",
})
export class PaymentService {
//   private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/payment`;

//   initializePaystackPayment(applicationId: string, payload: any): Observable<any> {
//     return this.http.post<any>(
//       `${this.baseUrl}/initialize-paystack/${applicationId}`,
//       payload
//     );
//   }

//   verifyPaystackPayment(reference?: string): Observable<any> {
//     let params = new HttpParams();

//     if (reference) {
//       params = params.set("reference", reference);
//     }

//     return this.http.get<any>(
//         `${this.baseUrl}/verify-paystack-payment`, 
//         { params }
//     );
//   }

  payWithPaystack() {
    console.log('Paystack payment initialized');
    
    // const popup = new PaystackPop();
    // popup.newTransaction({
    //   key: environment.paystackKey,
    //   email: 'user@example.com',
    //   amount: 200000,
    //   onSuccess: (response: any) => {
    //     console.log('Payment successful:', response);
    //   },
    //   onCancel: () => {
    //     console.log('Transaction canceled');
    //   }
    // });
  }
}

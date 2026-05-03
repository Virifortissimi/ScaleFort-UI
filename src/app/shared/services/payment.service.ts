import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import PaystackPop from "@paystack/inline-js";
import { ICreatePayment } from "../models/payment.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/payment`;
  private readonly router = inject(Router);

  initializePaystackPayment(
    applicationId: string | undefined,
    payload: Partial<ICreatePayment>
  ): Observable<any> {
    let params = new HttpParams();
    if (applicationId) {
      params = params.set("applicationId", applicationId);
    }

    return this.http.post<any>(`${this.baseUrl}/initialize-paystack`, payload, {
      params: params,
    });
  }

  verifyPaystackPayment(reference?: string): Observable<any> {
    let params = new HttpParams();
    if (reference) {
      params = params.set("reference", reference);
    }

    return this.http.get<any>(`${this.baseUrl}/verify-paystack-payment`, {
      params,
    });
  }

  payWithPaystack(accessCode: string) {
    const popup = new PaystackPop();
    popup.resumeTransaction(accessCode, {
      onSuccess: (response: any) => {
        const url = this.router.createUrlTree(["/verify-payment"], {
          queryParams: { reference: response.reference },
        });
        window.open(url.toString(), "_self");
      },
    });
  }
}

import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PricingService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/Pricing`;

  getPricing(referralId?: string): Observable<any> {
    let params = new HttpParams();
    if (referralId) {
        params = params.set("referralId", referralId);
    }
    return this.http.get<any>(`${this.baseUrl}`, { params });
  }
}

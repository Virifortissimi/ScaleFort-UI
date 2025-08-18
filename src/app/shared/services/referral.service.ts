import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ReferralService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/referral`;

  getReferralEarn(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/earn`);
  }

  // filterReferralInquiry(filters: {
  //   isActive?: boolean;
  //   startDate?: string;
  //   endDate?: string;
  //   pageIndex?: number;
  //   [key: string]: any; // allow any other optional filter
  // }): Observable<any> {
  //   let params = new HttpParams();

  //   Object.entries(filters).forEach(([key, value]) => {
  //     if (value !== undefined && value !== null) {
  //       params = params.set(key, String(value));
  //     }
  //   });

  //   return this.http.get<any>(`${this.baseUrl}/filter`, { params });
  // }
}

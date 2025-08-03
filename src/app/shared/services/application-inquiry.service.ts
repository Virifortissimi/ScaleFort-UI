import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { IApplicationInquiry } from "../models/application-inquiry.model";

@Injectable({
  providedIn: "root",
})
export class ApplicationInquiryService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/applicationInquiry`;

  createApplicationInquiry(payload: Partial<IApplicationInquiry>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, payload);
  }

  deactivateApplicationInquiry(applicationInquiryId: string): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/${applicationInquiryId}/deactivate`,
      {}
    );
  }

  getApplicationInquiryByApplicationInquiryId(
    applicationInquiryId: string
  ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${applicationInquiryId}`);
  }

  filterApplicationInquiry(filters: {
    isActive?: boolean;
    startDate?: string;
    endDate?: string;
    pageIndex?: number;
    [key: string]: any; // allow any other optional filter
  }): Observable<any> {
    let params = new HttpParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params = params.set(key, String(value));
      }
    });

    return this.http.get<any>(`${this.baseUrl}/filter`, { params });
  }
}

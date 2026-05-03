import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NewsletterService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/newsletter`;

  subscribeNewsletter(email: any): Observable<any> {
    const payload = { email };
    return this.http.post<any>(`${this.baseUrl}`, payload);
  }

}
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HealthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/health`;

  getHealth(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}

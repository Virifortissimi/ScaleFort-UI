import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
// import { IAPIResponse } from '../../../../../../shared/interfaces/api-response.model';
// import { ICreateBooking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/authentication`;

  register(payload: any): Observable<any> {
    return this.http.post<any>(
        `${this.baseUrl}/register`, 
        payload
    );
  }

  login(payload: any): Observable<any> {
    return this.http.post<any>(
        `${this.baseUrl}/login`, 
        payload
    );
  }

  refreshToken(payload: any): Observable<any> {
    return this.http.post<any>(
        `${this.baseUrl}/refresh-token`, 
        payload
    );
  }

//   previewBooking(
//     payload: Partial<ICreateBooking>
//   ): Observable<IAPIResponse<any>> {
//     return this.http.post<IAPIResponse<any>>(
//       `${this.baseUrl}/preview-booking`,
//       payload
//     );
//   }

//   processBooking(
//     previewId: string,
//     decision: 'Confirm' | 'Cancel'
//   ): Observable<IAPIResponse<any>> {
//     const formData = new FormData();
//     formData.append('decision', decision);
//     return this.http.post<IAPIResponse<any>>(
//       `${this.baseUrl}/process-preview/${previewId}`,
//       formData
//     );
//   }
}

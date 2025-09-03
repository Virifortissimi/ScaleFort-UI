import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICreateUser, ILoginUser } from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.scalefortBaseUrl}/api/authentication`;

  register(payload: Partial<ICreateUser>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, payload);
  }

  login(payload: Partial<ILoginUser>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, payload);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-user`);
  }

  refreshToken(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/refresh-token`, payload);
  }
}

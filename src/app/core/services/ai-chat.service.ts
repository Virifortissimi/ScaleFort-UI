import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AiChatRequest {
  message: string;
  context?: string;
}

export interface AiChatResponse {
  reply: string;
}

@Injectable({ providedIn: 'root' })
export class AiChatService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiBaseUrl;

  send(payload: AiChatRequest): Observable<AiChatResponse> {
    return this.http.post<AiChatResponse>(`${this.base}/ai/chat`, payload);
  }
}

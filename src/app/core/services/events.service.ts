import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EventItem } from '../../shared/models/event.model';

interface EventApiResponse {
  success: boolean;
  data?: EventItem[];
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly http = inject(HttpClient);

  listUpcoming(): Observable<EventItem[]> {
    return this.http.get<EventApiResponse>(`${environment.apiBaseUrl}/events`).pipe(
      map((response) => response.data ?? []),
      catchError(() => of([]))
    );
  }
}

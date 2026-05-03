import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 1;
  readonly toasts = signal<ToastMessage[]>([]);

  success(message: string, durationMs = 3000): void {
    this.push(message, 'success', durationMs);
  }

  error(message: string, durationMs = 4000): void {
    this.push(message, 'error', durationMs);
  }

  info(message: string, durationMs = 3000): void {
    this.push(message, 'info', durationMs);
  }

  remove(id: number): void {
    this.toasts.update((items) => items.filter((item) => item.id !== id));
  }

  private push(message: string, type: ToastType, durationMs: number): void {
    const id = this.nextId++;
    this.toasts.update((items) => [...items, { id, message, type }]);
    setTimeout(() => this.remove(id), durationMs);
  }
}

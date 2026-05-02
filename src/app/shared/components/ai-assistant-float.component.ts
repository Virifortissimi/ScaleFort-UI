import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ASSISTANT_QA, findAssistantQa } from '../data/assistant-qa.data';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  showWhatsAppCta?: boolean;
}

@Component({
  selector: 'app-ai-assistant-float',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed left-6 bottom-6 z-[9998]">
      @if (open()) {
        <section class="w-[min(22rem,calc(100vw-3rem))] rounded-card border border-border-base bg-bg-white shadow-whatsapp mb-3">
          <header class="px-4 py-3 border-b border-border-base flex items-center justify-between">
            <p class="text-sm font-semibold text-text-primary">Assistant</p>
            <button type="button" (click)="open.set(false)" class="text-text-muted hover:text-text-primary" aria-label="Close assistant">
              x
            </button>
          </header>

          <div class="p-4 space-y-3 max-h-[18rem] overflow-auto">
            @for (msg of messages(); track $index) {
              <div [class]="msg.role === 'user' ? 'text-right' : 'text-left'">
                <p [class]="msg.role === 'user' ? 'text-sm text-text-primary' : 'text-sm text-text-body'">{{ msg.text }}</p>
                @if (msg.showWhatsAppCta) {
                  <a [href]="whatsAppHref" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex text-xs font-medium text-accent-corporate underline">
                    Continue on WhatsApp
                  </a>
                }
              </div>
            }

            @if (messages().length === 0) {
              <p class="text-sm text-text-muted">Choose a saved question or type your own.</p>
            }

            <div class="flex flex-wrap gap-2">
              @for (item of presetQuestions; track item.question) {
                <button
                  type="button"
                  (click)="ask(item.question)"
                  class="rounded-pill border border-border-base px-3 py-1.5 text-left text-xs text-text-body transition hover:border-accent-school hover:text-text-primary"
                >
                  {{ item.question }}
                </button>
              }
            </div>
          </div>

          <div class="p-3 border-t border-border-base flex gap-2">
            <input
              [(ngModel)]="draft"
              (keydown.enter)="send()"
              class="flex-1 px-3 py-2 rounded-[10px] border border-border-base text-sm"
              placeholder="Type message..."
            />
            <button type="button" (click)="send()" [disabled]="!draft.trim()" class="btn-primary px-4 py-2 text-sm disabled:opacity-50">
              Send
            </button>
          </div>

          <div class="px-4 pb-4">
            <a [href]="whatsAppHref" target="_blank" rel="noopener noreferrer" class="text-xs font-medium text-accent-corporate underline">
              Need more help? Chat on WhatsApp
            </a>
          </div>
        </section>
      }

      <button
        type="button"
        (click)="open.set(!open())"
        class="h-12 px-4 rounded-pill bg-btn-dark text-white text-sm font-semibold shadow-whatsapp"
        [attr.aria-expanded]="open()"
        aria-label="Toggle assistant"
      >
        Assistant
      </button>
    </div>
  `,
})
export class AiAssistantFloatComponent {
  readonly presetQuestions = ASSISTANT_QA;
  readonly open = signal(false);
  readonly messages = signal<ChatMessage[]>([]);

  draft = '';

  readonly whatsAppHref = `https://wa.me/${environment.whatsappNumber}?text=${encodeURIComponent(
    "Hi Scalefort, I need more help from the assistant."
  )}`;

  ask(question: string): void {
    this.respond(question);
  }

  send(): void {
    const text = this.draft.trim();
    if (!text) {
      return;
    }

    this.draft = '';
    this.respond(text);
  }

  private respond(text: string): void {
    this.messages.update((items) => [...items, { role: 'user', text }]);

    const match = findAssistantQa(text);
    const reply = match
      ? match.answer
      : 'I can currently help with saved questions about tracks, pricing, admissions, internships, and corporate training. For anything else, please continue on WhatsApp.';

    this.messages.update((items) => [
      ...items,
      { role: 'assistant', text: reply, showWhatsAppCta: match === null },
    ]);
  }
}

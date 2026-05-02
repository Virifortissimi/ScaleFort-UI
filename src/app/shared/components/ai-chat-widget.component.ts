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
  selector: 'app-ai-chat-widget',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 md:py-24 bg-bg-subtle">
      <div class="container-base max-w-3xl">
        <div class="card-base">
          <h2 class="text-h2 font-bold text-text-primary mb-3">Assistant</h2>
          <p class="text-text-muted mb-6">Choose a saved question, or type your own. If the answer is not enough, continue on WhatsApp.</p>

          <div class="space-y-3 max-h-[320px] overflow-auto mb-4">
            @for (msg of messages(); track $index) {
              <div [class]="msg.role === 'user' ? 'text-right' : 'text-left'">
                <p [class]="msg.role === 'user' ? 'text-text-primary' : 'text-text-body'">{{ msg.text }}</p>
                @if (msg.showWhatsAppCta) {
                  <a [href]="whatsAppHref" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex text-sm font-medium text-accent-corporate underline">
                    Continue on WhatsApp
                  </a>
                }
              </div>
            }
          </div>

          <div class="flex flex-wrap gap-2 mb-4">
            @for (item of presetQuestions; track item.question) {
              <button
                type="button"
                (click)="ask(item.question)"
                class="rounded-pill border border-border-base px-3 py-2 text-sm text-text-body transition hover:border-accent-school hover:text-text-primary"
              >
                {{ item.question }}
              </button>
            }
          </div>

          <div class="flex gap-2">
            <input [(ngModel)]="draft" class="flex-1 px-4 py-3 rounded-[10px] border border-border-base" placeholder="Type your question..." />
            <button type="button" (click)="send()" [disabled]="!draft.trim()" class="btn-primary disabled:opacity-50">Send</button>
          </div>

          <p class="text-sm mt-4" role="note">
            <a [href]="whatsAppHref" target="_blank" rel="noopener noreferrer" class="font-medium text-accent-corporate underline">
              Need more help? Continue on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AiChatWidgetComponent {
  readonly presetQuestions = ASSISTANT_QA;
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

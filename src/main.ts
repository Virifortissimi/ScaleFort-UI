import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { SchemaService } from './app/core/services/schema.service';
import { AiAssistantFloatComponent } from './app/shared/components/ai-assistant-float.component';
import { ToastStackComponent } from './app/shared/components/toast-stack.component';
import { ConversionRailComponent } from './app/shared/components/conversion-rail.component';
import { CommandPaletteComponent } from './app/shared/components/command-palette.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AiAssistantFloatComponent, ToastStackComponent, ConversionRailComponent, CommandPaletteComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="relative z-[1] min-h-screen flex flex-col bg-bg-base">
      <app-header />
      <main id="main-content" class="flex-1 pt-[68px] page-enter">
        <router-outlet />
      </main>
      <app-footer />
    </div>
    <app-conversion-rail />
    <app-ai-assistant-float />
    <app-toast-stack />
    <app-command-palette />
  `,
})
export class App implements OnInit {
  private readonly schema = inject(SchemaService);

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Scalefort',
        url: 'https://www.scalefort.org',
        logo: 'https://www.scalefort.org/assets/logo.png',
        description: "Africa's complete tech company - tech school, IT services, and corporate training.",
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+234-815-840-6306',
          contactType: 'customer support',
          email: 'support@scalefort.org',
        },
      },
      'schema-org'
    );
  }
}

bootstrapApplication(App, appConfig)
  .then(() => {
    const bootLoader = document.getElementById('app-loader');
    if (!bootLoader) {
      return;
    }

    requestAnimationFrame(() => {
      bootLoader.classList.add('app-loader--exit');
      window.setTimeout(() => bootLoader.remove(), 450);
    });
  })
  .catch((error) => {
    console.error('Failed to bootstrap Scalefort.', error);
  });

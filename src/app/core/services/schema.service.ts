import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private readonly platformId = inject(PLATFORM_ID);

  inject(schema: object, id = 'schema-ld'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }

  remove(id = 'schema-ld'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.getElementById(id)?.remove();
  }
}

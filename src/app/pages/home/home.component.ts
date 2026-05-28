import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { HomeHeroComponent } from './components/home-hero.component';
import { HomeFeaturesComponent } from './components/home-features.component';
import { HomeTechCampComponent } from './components/home-tech-camp.component';
import { HomeTestimonialsComponent } from './components/home-testimonials.component';
import { HomeCtaComponent } from './components/home-cta.component';
import { HomeVideoComponent } from './components/home-video.component';
import { HomeProcessComponent } from './components/home-process.component';
import { HomeBlogComponent } from './components/home-blog.component';
import { ParticleFieldComponent } from '../../shared/components/particle-field.component';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HomeHeroComponent, HomeTechCampComponent, HomeFeaturesComponent, HomeProcessComponent, HomeVideoComponent, HomeTestimonialsComponent, HomeBlogComponent, HomeCtaComponent, ParticleFieldComponent],
  template: `
    <div class="relative overflow-hidden bg-bg-white">
      <div class="hero-orbs" aria-hidden="true">
        <div class="orb orb-green"></div>
        <div class="orb orb-amber"></div>
        <div class="orb orb-violet"></div>
      </div>
      <div class="dot-grid-hero" aria-hidden="true"></div>
      <app-particle-field density="normal" variant="light" />

      <app-home-hero />
      <app-home-tech-camp />
      <app-home-features />
      <app-home-process />
      <app-home-video />
      <app-home-testimonials />
      <app-home-blog />
      <app-home-cta />
    </div>
  `,
})
export class HomeComponent implements OnInit {
  private readonly schema = inject(SchemaService);

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Scalefort',
        telephone: '+234-815-840-6306',
        email: 'support@scalefort.org',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Road 4, Lekki Atlantic Gardens Estate, Ajah',
          addressLocality: 'Lagos',
          addressRegion: 'Lagos State',
          addressCountry: 'NG',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 6.4669, longitude: 3.5852 },
      },
      'schema-local'
    );
  }
}

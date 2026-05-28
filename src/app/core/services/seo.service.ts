import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEO_MAP: Record<string, SeoConfig> = {
  '/': {
    title: 'Scalefort | Tech School, IT Services & Corporate Training in Lagos, Nigeria',
    description:
      "Africa's complete tech company. Train your career, build your product, upskill your team. Lagos-based, serving Africa.",
  },
  '/tech-school': {
    title: 'Tech Bootcamp in Lagos | 7 Tracks | Scalefort Tech School',
    description:
      "Lagos' leading tech bootcamp. Learn coding, cloud, cybersecurity & more. 12-week cohorts with real internship and job placement. From ?150,000.",
  },
  '/tech-school/courses': {
    title: 'All Courses | Scalefort Tech School Lagos',
    description:
      'Explore all 7 Scalefort tracks including frontend, backend, cloud, data, UI/UX, and cybersecurity.',
  },
  '/tech-school/apply': {
    title: 'Apply Now | Scalefort Tech School',
    description: 'Apply to Scalefort Tech School and begin your structured Learn, Intern, Get Hired journey.',
  },
  '/it-services': {
    title: 'Web Development & IT Solutions in Lagos | Scalefort',
    description:
      'Full-stack web dev, cloud integration, API engineering & DevOps in Lagos. 50+ projects, 98% client satisfaction. Get a free consultation.',
  },
  '/corporate-training': {
    title: 'Corporate Tech Training in Nigeria | Scalefort',
    description:
      'Custom tech upskilling for enterprise teams. Cloud, cybersecurity, data literacy & agile. 5-100 participants.',
  },
  '/about': {
    title: "About Scalefort | Empowering Africa's Tech Ecosystem",
    description:
      "Scalefort is Africa's complete tech partner - training developers, building products, and upskilling enterprises from Lagos, Nigeria.",
  },
  '/faq': {
    title: 'FAQs | Scalefort Tech School & IT Services',
    description: 'Find answers about programmes, pricing, delivery format, and Scalefort services.',
  },
  '/contact': {
    title: 'Contact Scalefort | Lagos, Nigeria',
    description: 'Speak with the Scalefort team about Tech School, IT Services, or Corporate Training.',
  },
  '/future-creators-tech-camp': {
    title: 'Future Creators Tech Camp | Scalefort',
    description:
      'Scalefort Future Creators Tech Camp starts August 3, 2026. A 3-week virtual Zoom technology camp for children ages 7-15. Fee: NGN 99,999.',
    ogImage: '/assets/images/camps/future-creators-tech-camp.jpeg',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  init(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split('?')[0] ?? '/';
        const config = SEO_MAP[path] ?? {
          title: "Scalefort | Africa's Complete Tech Company",
          description: 'Tech School, IT Services & Corporate Training in Lagos, Nigeria.',
        };

        this.apply(config, path);
      });
  }

  apply(config: SeoConfig, path: string): void {
    const baseUrl = 'https://www.scalefort.org';
    const canonical = `${baseUrl}${config.canonical ?? path}`;
    const ogImage = `${baseUrl}${config.ogImage ?? '/assets/og-image.png'}`;

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }
}

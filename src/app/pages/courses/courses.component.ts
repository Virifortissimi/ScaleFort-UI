import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanCardComponent } from '../../shared/components/plan-card.component';
import { CohortCountdownComponent } from '../../shared/components/cohort-countdown.component';
import { PlanConfig } from '../../shared/models/plan.model';
import { SchemaService } from '../../core/services/schema.service';

interface ProgramStage {
  title: string;
  body: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
}

interface Track {
  title: string;
  body: string;
  tags: readonly string[];
  image: string;
  imageAlt: string;
  accentClass: string;
}

interface AudienceCard {
  title: string;
  body: string;
}

interface RequirementGroup {
  title: string;
  items: readonly string[];
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, PlanCardComponent, CohortCountdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section bg-bg-white">
      <div class="container-base max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
          <div class="text-center lg:text-left">
            <p class="overline mb-3">3-Stage Career Program</p>
            <h1 class="text-h1 font-bold text-text-primary mb-4">From Beginner to Job-Ready in 12 Weeks</h1>
            <p class="text-text-muted mb-8">
              Master in-demand tech skills, complete a real-world internship, and get connected to top employers all in one structured program.
            </p>

            <app-cohort-countdown nextCohortDate="2026-08-15T09:00:00+01:00" [spotsRemaining]="18" />

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a routerLink="/tech-school/apply" class="btn-primary no-underline">Apply Now - Next Cohort Starts August 15, 2026</a>
              <a [href]="techSchoolBrochurePath" download="Scalefort-Tech-School-Brochure.pdf" class="btn-secondary no-underline">Download Free Brochure</a>
            </div>
          </div>

          <article class="overflow-hidden rounded-[2rem] border border-border-base bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              [src]="heroImage"
              alt="Scalefort tech school learning journey illustration"
              class="w-full rounded-[1.4rem] object-cover"
              decoding="async"
            />
          </article>
        </div>
      </div>
    </section>

    <section class="section bg-bg-subtle">
      <div class="container-base">
        <h2 class="text-h2 font-bold text-text-primary mb-10 text-center">How Our Program Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (stage of stages; track stage.title) {
            <article class="card-base overflow-hidden">
              <img [src]="stage.image" [alt]="stage.imageAlt" class="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" decoding="async" />
              <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ stage.title }}</h3>
              <p class="text-text-body mb-4">{{ stage.body }}</p>
              <ul class="space-y-2 text-sm text-text-muted list-disc pl-5">
                @for (point of stage.points; track point) {
                  <li>{{ point }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section bg-bg-white">
      <div class="container-base">
        <h2 class="text-h2 font-bold text-text-primary mb-10 text-center">Choose Your Track</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (track of tracks; track track.title) {
            <article class="card-base overflow-hidden">
              <img [src]="track.image" [alt]="track.imageAlt" class="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" decoding="async" />
              <p [class]="'text-xs font-semibold uppercase tracking-wide mb-2 ' + track.accentClass">Track</p>
              <h3 class="text-h3 font-semibold text-text-primary mb-3">{{ track.title }}</h3>
              <p class="text-text-body mb-4">{{ track.body }}</p>
              <p class="text-sm text-text-muted">{{ track.tags.join(' | ') }}</p>
              <div class="mt-4 flex flex-col sm:flex-row gap-3">
                <!-- <a [routerLink]="['/tech-school/preview', previewSlug(track.title)]" class="btn-secondary btn-sm no-underline">View Free Lesson</a> -->
                <a [routerLink]="['/tech-school/apply']" [queryParams]="{ track: track.title }" class="btn-primary btn-sm no-underline">Apply Now</a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section bg-bg-white">
      <div class="container-base max-w-6xl">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <p class="overline overline-amber mb-2">Who Is This For?</p>
          <h2 class="text-h2 font-bold text-text-primary">Built for learners who want practical outcomes</h2>
          <p class="text-text-muted mt-3">
            This programme is designed for beginners, career switchers, and professionals who want real project experience and clear hiring preparation.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            @for (card of audience; track card.title) {
              <article class="rounded-card border border-border-base bg-bg-subtle p-4">
                <h3 class="text-base font-semibold text-text-primary mb-2">{{ card.title }}</h3>
                <p class="text-sm text-text-muted">{{ card.body }}</p>
              </article>
            }
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @for (group of requirements; track group.title) {
              <article class="card-base p-5">
                <p class="text-xs font-semibold uppercase tracking-wide text-accent-school mb-3">{{ group.title }}</p>
                <ul class="space-y-2 text-sm text-text-muted list-disc pl-5">
                  @for (item of group.items; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </article>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-bg-white">
      <div class="container-base max-w-6xl">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <p class="overline overline-amber mb-2">Helpful Resources</p>
          <h2 class="text-h2 font-bold text-text-primary">Plan your next move with more clarity</h2>
          <p class="text-text-muted mt-3">
            Explore salary expectations before you commit, or buy structured training vouchers if you are sponsoring learning for a team.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article class="card-base card-accent p-6">
            <p class="text-xs font-semibold uppercase tracking-overline text-accent-school mb-3">Career Planning</p>
            <h3 class="text-h3 font-semibold text-text-primary mb-3">Nigeria Tech Salary Guide 2026</h3>
            <p class="text-text-body mb-5">
              See what entry-level and growth-stage tech roles are paying, then use that data to choose the right learning path for your goals.
            </p>
            <a [href]="techSalaryGuidePath" download="Scalefort-Nigeria-Tech-Salary-Guide-2026.pdf" class="btn-primary no-underline">Download the Salary Guide</a>
          </article>

          <article class="card-base card-accent-amber p-6">
            <p class="text-xs font-semibold uppercase tracking-overline text-amber-700 mb-3">Team Sponsorship</p>
            <h3 class="text-h3 font-semibold text-text-primary mb-3">Bulk Vouchers for Teams and Sponsors</h3>
            <p class="text-text-body mb-5">
              Purchase training vouchers for staff, graduates, or sponsored learners and give multiple people access to structured, practical tech training.
            </p>
            <a routerLink="/bulk-vouchers" class="btn-secondary no-underline">Explore Bulk Vouchers</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section bg-bg-subtle">
      <div class="container-base max-w-6xl">
        <div class="rounded-[28px] border border-border-base bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,253,245,0.72))] p-6 md:p-8 lg:p-10 shadow-[0_32px_80px_rgba(10,42,23,0.08)]">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <p class="overline mb-2">Simple, Flexible Pricing</p>
            <h2 class="text-h2 font-bold text-text-primary mb-3">Choose the payment path that fits your pace</h2>
            <p class="text-text-muted">
              Start with full tuition, pay instalmentally, or reserve your seat first and complete the rest with admissions guidance.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            @for (plan of plans; track plan.title) {
              <app-plan-card [plan]="plan" />
            }
          </div>
          <p class="mt-6 text-center text-sm text-text-muted">All prices in Nigerian Naira (NGN). Prices subject to review per cohort.</p>
        </div>
      </div>
    </section>
  `,
})
export class CoursesComponent implements OnInit {
  private readonly schema = inject(SchemaService);
  readonly techSchoolBrochurePath = 'assets/pdf/Scalefort Tech School 12-Week Career Program Brochure.pdf.pdf';
  readonly techSalaryGuidePath = 'assets/pdf/Scalefort Nigeria Tech Salary Guide 2026.pdf.pdf';
  readonly heroImage = 'assets/images/courses/hero-learning-journey.svg';

  readonly stages: ReadonlyArray<ProgramStage> = [
    {
      title: 'Stage 1 - Learn',
      body: '12 weeks of live classes, recorded lectures, and expert-led sessions. Our curriculum is designed to build deep understanding of core programming principles and the technologies employers actually hire for.',
      points: ['Foundational concepts', 'Live expert sessions', 'Hands-on projects'],
      image: 'assets/images/courses/stage-learn.svg',
      imageAlt: 'Learning stage illustration with lessons, code blocks, and coursework panels',
    },
    {
      title: 'Stage 2 - Intern',
      body: 'Apply your skills to live systems. Work on real projects alongside mentors and peers. Build a professional portfolio that demonstrates you can deliver, not just learn.',
      points: ['Industry-level projects', 'Collaborative teams', 'Portfolio development'],
      image: 'assets/images/courses/stage-intern.svg',
      imageAlt: 'Internship stage illustration with team collaboration and real project workflow',
    },
    {
      title: 'Stage 3 - Get Hired',
      body: 'We do not just teach you. We help you land the job with resume building, mock interviews, and direct connections to hiring managers.',
      points: ['Resume building', 'Mock interviews', 'Networking with employers'],
      image: 'assets/images/courses/stage-hired.svg',
      imageAlt: 'Job readiness stage illustration with interview prep and placement outcome markers',
    },
  ];

  readonly tracks: ReadonlyArray<Track> = [
    {
      title: 'Frontend Development',
      body: 'Build stunning, interactive websites. Learn HTML, CSS, JavaScript, and modern frameworks.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'assets/images/courses/track-frontend.svg',
      imageAlt: 'Frontend development illustration with browser layout and interface blocks',
      accentClass: 'text-accent-school',
    },
    {
      title: 'Backend Development (.NET)',
      body: 'Build robust, scalable APIs and enterprise systems using .NET and C#.',
      tags: ['C#', '.NET', 'REST APIs', 'SQL Server'],
      image: 'assets/images/courses/track-dotnet.svg',
      imageAlt: 'Backend dotnet illustration with service modules and architecture panels',
      accentClass: 'text-accent-it',
    },
    {
      title: 'Backend Development (Python/Django)',
      body: 'Develop efficient, high-performance backends with Python and Django.',
      tags: ['Python', 'Django', 'REST APIs', 'PostgreSQL'],
      image: 'assets/images/courses/track-python.svg',
      imageAlt: 'Python backend illustration with framework and code workflow markers',
      accentClass: 'text-accent-it',
    },
    {
      title: 'Cloud Computing',
      body: 'Master cloud platforms, deployments, and services. Work with AWS and Azure in real scenarios.',
      tags: ['AWS', 'Azure', 'Cloud Architecture', 'DevOps'],
      image: 'assets/images/courses/track-cloud.svg',
      imageAlt: 'Cloud computing illustration with connected infrastructure and deployment pathways',
      accentClass: 'text-accent-corporate',
    },
    {
      title: 'Data Analysis',
      body: 'Uncover insights and tell compelling stories through data collection, visualisation, and interpretation.',
      tags: ['SQL', 'Power BI', 'Excel', 'Python', 'Tableau'],
      image: 'assets/images/courses/track-data.svg',
      imageAlt: 'Data analysis illustration with charts, dashboards, and trend lines',
      accentClass: 'text-accent-corporate',
    },
    {
      title: 'UI/UX Design',
      body: 'Design intuitive digital experiences through research, prototyping, and visual design.',
      tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      image: 'assets/images/courses/track-uiux.svg',
      imageAlt: 'UI and UX design illustration with wireframes and design system components',
      accentClass: 'text-accent-school',
    },
    {
      title: 'Cybersecurity',
      body: 'Protect systems, networks, and data from digital attacks through threat analysis and security implementation.',
      tags: ['Network Security', 'Threat Analysis', 'Ethical Hacking', 'Compliance'],
      image: 'assets/images/courses/track-cybersecurity.svg',
      imageAlt: 'Cybersecurity illustration with shield, lock, and secure system visualization',
      accentClass: 'text-accent-corporate',
    },
  ];

  readonly audience: ReadonlyArray<AudienceCard> = [
    {
      title: 'Beginners',
      body: 'Beginners and professionals transitioning to tech can start with structured fundamentals and practical support.',
    },
    {
      title: 'Career Switchers',
      body: 'Career switchers passionate about tech innovation can move into tech with portfolio-ready projects and mentorship.',
    },
    {
      title: 'Students',
      body: 'Students wanting job-ready skills, not just certificates, can complement classroom learning with industry-focused workflows.',
    },
    {
      title: 'Working Professionals',
      body: 'Upskill through flexible remote sessions and recorded classes.',
    },
  ];

  readonly requirements: ReadonlyArray<RequirementGroup> = [
    {
      title: 'Requirements',
      items: ['Basic computer literacy', 'Personal laptop or PC (minimum 250GB storage, 4GB RAM, camera and mic)', 'Passion for problem-solving and continuous growth'],
    },
    {
      title: 'Format',
      items: ['100% Remote (online live classes and recorded lectures)', 'Each phase lasts 12 weeks', 'Flexible timings suitable for students and working professionals'],
    },
    {
      title: 'Support',
      items: ['Mentor guidance through each phase', 'Project-based learning and internship exposure', 'Recruitment support after training'],
    },
  ];

  readonly plans: ReadonlyArray<PlanConfig> = [
    {
      badge: 'Most Popular',
      badgeType: 'recommended',
      title: 'Full Payment',
      via: 'via Paystack',
      price: 'NGN 300,000',
      period: '/programme',
      description: 'Pay once, focus entirely on learning. Save NGN 50,000 vs instalment.',
      primaryCta: { label: 'Enrol Now', link: '/tech-school/apply', queryParams: { plan: 'full' } },
      includesLabel: 'Everything included:',
      features: ['All 7 course tracks', 'Live weekly sessions', 'Internship placement', 'Recruitment support', 'Alumni network access'],
    },
    {
      badge: 'Flexible',
      badgeType: 'preview',
      title: 'Pay Instalmentally',
      via: 'via Paystack',
      price: 'NGN 150,000',
      period: 'upfront',
      description: 'Secure your spot with NGN 150,000 now. Pay the remaining NGN 150,000 within 2 months of starting.',
      primaryCta: { label: 'Pay Instalmentally', link: '/tech-school/apply', queryParams: { plan: 'instalment' } },
      features: ['Same full programme access', 'Flexible payment timeline', 'No hidden fees', 'Balance due within 2 months'],
    },
    {
      badge: 'Starter Option',
      badgeType: 'free',
      title: 'Reserve My Spot',
      via: 'via Paystack',
      price: 'NGN 50,000',
      period: 'today',
      description: 'Lock in your seat now and complete the remaining tuition later with direct admissions follow-up.',
      primaryCta: { label: 'Reserve My Spot', link: '/tech-school/apply', queryParams: { plan: 'secure_slot' } },
      features: ['Fastest way to hold a seat', 'Great for learners awaiting full funds', 'Admissions support on next payment steps'],
    },
  ];

  previewSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[()]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  ngOnInit(): void {
    this.schema.inject(
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Scalefort Tech School',
        url: 'https://www.scalefort.org/tech-school',
      },
      'schema-edu'
    );
  }
}

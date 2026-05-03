import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlumniProfile } from '../../shared/models/alumni.model';
import { ApiService, ContactPayload } from '../../core/services/api.service';
import { ToastService } from '../../core/services/toast.service';
import { ParticleFieldComponent } from '../../shared/components/particle-field.component';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

type AlumniViewMode = 'tiles' | 'list';
type AlumniLeadType = 'hire' | 'partnership';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [ReactiveFormsModule, ParticleFieldComponent, MagneticDirective, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <section appAnimateOnScroll class="relative overflow-hidden bg-bg-white section-hero z-[1]">
      <div class="hero-orbs" aria-hidden="true">
        <div class="orb orb-green"></div>
        <div class="orb orb-amber"></div>
        <div class="orb orb-violet"></div>
      </div>
      <div class="dot-grid-hero" aria-hidden="true"></div>
      <app-particle-field density="normal" variant="light" />

      <div class="container-base relative z-10 text-center">
        <div class="max-w-4xl mx-auto">
          <p appAnimateOnScroll [animateDelay]="80" class="overline mb-6">Success Stories</p>
          <h1 appAnimateOnScroll [animateDelay]="120" class="type-display text-text-primary mb-6">
            Real People. Real Results.
          </h1>
          <p appAnimateOnScroll [animateDelay]="180" class="type-body-l text-text-muted max-w-2xl mx-auto mb-12">
            Celebrating our graduates who have transitioned into high-impact roles at top tech companies and startups across Africa and beyond.
          </p>
        </div>

        <div appAnimateOnScroll [animateDelay]="240" class="flex flex-wrap gap-4 justify-center mb-16">
          <button
            type="button"
            appMagnetic
            (click)="selectTrack('')"
            [class]="chipClass(selectedTrack() === '')"
            [attr.aria-pressed]="selectedTrack() === ''"
          >
            All Tracks
          </button>
          @for (track of tracks; track track) {
            <button
              type="button"
              appMagnetic
              (click)="selectTrack(track)"
              [class]="chipClass(selectedTrack() === track)"
              [attr.aria-pressed]="selectedTrack() === track"
            >
              {{ track }}
            </button>
          }
        </div>
      </div>
    </section>

    <section class="section bg-bg-subtle/30 relative z-[1]">
      <div class="dot-grid-section" aria-hidden="true"></div>
      <div class="container-base relative z-10">
        <div appAnimateOnScroll class="mb-10 flex flex-col gap-5 rounded-card border border-border-base bg-bg-white/80 p-5 shadow-[0_18px_40px_rgba(10,10,10,0.04)] backdrop-blur-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-text-tertiary mb-2">Directory Controls</p>
            <p class="text-sm text-text-muted">
              Showing {{ rangeStart() }}-{{ rangeEnd() }} of {{ filteredCount() }} alumni
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-xs font-bold uppercase tracking-[0.16em] text-text-tertiary">View</span>
            @for (option of viewOptions; track option.value) {
              <button
                type="button"
                appMagnetic
                (click)="setViewMode(option.value)"
                [class]="viewToggleClass(viewMode() === option.value)"
                [attr.aria-pressed]="viewMode() === option.value"
              >
                {{ option.label }}
              </button>
            }
          </div>
        </div>

        @if (paginatedAlumni().length === 0) {
          <article appAnimateOnScroll class="card-base bg-bg-white text-center py-16 max-w-2xl mx-auto">
            <h2 class="type-h2 text-text-primary mb-4">No Alumni Match This Filter</h2>
            <p class="type-body text-text-muted max-w-lg mx-auto">
              Try switching to another track or return to all alumni to explore the full community.
            </p>
          </article>
        } @else if (viewMode() === 'tiles') {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (alumnus of paginatedAlumni(); track alumnus.name + alumnus.company) {
              <article
                appAnimateOnScroll
                [animateDelay]="($index % 3) * 100"
                class="card-base bg-bg-white p-8 rounded-card border border-border-base hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-accent-school/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div class="relative z-10 h-full flex flex-col">
                  <div class="flex items-center justify-between mb-6">
                    <div class="px-3 py-1 rounded-pill bg-bg-subtle border border-border-base text-[10px] font-bold uppercase tracking-widest text-accent-school">
                      {{ alumnus.track }}
                    </div>
                    <span class="text-[10px] font-mono font-bold text-text-tertiary">{{ alumnus.cohort }}</span>
                  </div>

                  <h2 class="type-h3 text-text-primary mb-2 group-hover:text-accent-it transition-colors">{{ alumnus.name }}</h2>
                  <div class="flex items-center gap-2 mb-6">
                    <span class="text-sm font-semibold text-text-secondary">{{ alumnus.currentRole }}</span>
                    <span class="w-1 h-1 rounded-full bg-border-strong"></span>
                    <span class="text-sm font-bold text-accent-it">{{ alumnus.company }}</span>
                  </div>

                  <blockquote class="relative mb-8 flex-1">
                    <span class="absolute -top-4 -left-2 text-4xl text-accent-school/20 font-serif" aria-hidden="true">&quot;</span>
                    <p class="type-body text-text-muted italic relative z-10 leading-relaxed">
                      {{ alumnus.quote }}
                    </p>
                    <span class="absolute -bottom-8 -right-2 text-4xl text-accent-school/20 font-serif" aria-hidden="true">&quot;</span>
                  </blockquote>

                  <div class="mt-auto pt-6 border-t border-border-faint flex items-center justify-between">
                    <a appMagnetic href="javascript:void(0)" class="text-xs font-bold uppercase tracking-widest text-text-primary no-underline inline-flex items-center gap-2 group/link">
                      Success Story
                      <span class="transform group-hover/link:translate-x-1 transition-transform">â†’</span>
                    </a>

                    @if (alumnus.linkedInUrl) {
                      <a [href]="alumnus.linkedInUrl" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-bg-subtle flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    }
                  </div>
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="flex flex-col gap-5">
            @for (alumnus of paginatedAlumni(); track alumnus.name + alumnus.company) {
              <article
                appAnimateOnScroll
                [animateDelay]="$index * 70"
                class="card-base bg-bg-white p-6 md:p-8 rounded-card border border-border-base hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-accent-school/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div class="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div class="max-w-3xl">
                    <div class="flex flex-wrap items-center gap-3 mb-4">
                      <div class="px-3 py-1 rounded-pill bg-bg-subtle border border-border-base text-[10px] font-bold uppercase tracking-widest text-accent-school">
                        {{ alumnus.track }}
                      </div>
                      <span class="text-[10px] font-mono font-bold text-text-tertiary">{{ alumnus.cohort }}</span>
                    </div>
                    <h2 class="type-h3 text-text-primary mb-2 group-hover:text-accent-it transition-colors">{{ alumnus.name }}</h2>
                    <p class="text-sm font-semibold text-text-secondary mb-4">
                      {{ alumnus.currentRole }} at <span class="text-accent-it font-bold">{{ alumnus.company }}</span>
                    </p>
                    <p class="type-body text-text-muted leading-relaxed italic">
                      "{{ alumnus.quote }}"
                    </p>
                  </div>

                  <div class="flex items-center gap-3 md:justify-end">
                    <a appMagnetic href="javascript:void(0)" class="text-xs font-bold uppercase tracking-widest text-text-primary no-underline inline-flex items-center gap-2 group/link">
                      Success Story
                      <span class="transform group-hover/link:translate-x-1 transition-transform">â†’</span>
                    </a>

                    @if (alumnus.linkedInUrl) {
                      <a [href]="alumnus.linkedInUrl" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-bg-subtle flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    }
                  </div>
                </div>
              </article>
            }
          </div>
        }

        @if (filteredCount() > 0) {
          <div appAnimateOnScroll class="mt-12 flex flex-col gap-4 rounded-card border border-border-base bg-bg-white/70 px-5 py-4 shadow-[0_14px_34px_rgba(10,10,10,0.04)] backdrop-blur-sm md:flex-row md:items-center md:justify-between">
            <p class="text-sm text-text-muted">
              Page {{ currentPage() }} of {{ totalPages() }}
            </p>
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" appMagnetic (click)="previousPage()" [disabled]="currentPage() === 1" class="btn-secondary btn-sm disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              @for (page of pages(); track page) {
                <button
                  type="button"
                  appMagnetic
                  (click)="goToPage(page)"
                  [class]="pageButtonClass(page === currentPage())"
                  [attr.aria-current]="page === currentPage() ? 'page' : null"
                >
                  {{ page }}
                </button>
              }
              <button type="button" appMagnetic (click)="nextPage()" [disabled]="currentPage() === totalPages()" class="btn-secondary btn-sm disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Hire CTA -->
    <section class="section bg-bg-white relative z-[1]">
      <div class="container-base">
        <div appAnimateOnScroll class="card-base bg-surface-dark p-10 md:p-16 rounded-card border border-white/10 text-center relative overflow-hidden">
          <div class="fb-particle-field" style="opacity: 0.15">
            <app-particle-field density="sparse" variant="dark" />
          </div>
          <div class="relative z-10">
            <p class="overline text-accent-school mb-4">Partner with Scalefort</p>
            <h2 class="type-h2 text-white mb-6">Hire Our World-Class Talent</h2>
            <p class="type-body text-white/70 max-w-2xl mx-auto mb-10">
              Our graduates are trained to deliver. Join top organizations like Sterling Bank, Microsoft, and Kuda in hiring the best tech talent in Africa.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
              <button
                type="button"
                appMagnetic
                (click)="toggleLeadForm('hire')"
                class="btn-primary"
                [attr.aria-expanded]="activeLeadType() === 'hire'"
              >
                Hire Graduates
              </button>
              <button
                type="button"
                appMagnetic
                (click)="toggleLeadForm('partnership')"
                class="inline-flex items-center justify-center gap-2 rounded-pill border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/35"
                [attr.aria-expanded]="activeLeadType() === 'partnership'"
              >
                Talent Partnership
              </button>
            </div>
            @if (activeLeadType()) {
              <form
                appAnimateOnScroll
                [animateDelay]="120"
                [formGroup]="leadForm"
                (ngSubmit)="submitLeadForm()"
                class="mx-auto mt-8 max-w-3xl rounded-[28px] border border-white/10 bg-white/95 p-6 text-left shadow-[0_28px_80px_rgba(0,0,0,0.22)] md:p-8"
              >
                <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-school mb-2">{{ leadFormLabel() }}</p>
                    <h3 class="type-h3 text-text-primary mb-2">{{ leadFormHeading() }}</h3>
                    <p class="text-sm text-text-muted">{{ leadFormSubline() }}</p>
                  </div>
                  <button type="button" (click)="closeLeadForm()" class="self-start rounded-full border border-border-base px-3 py-1 text-xs font-bold uppercase tracking-widest text-text-muted transition hover:border-border-strong hover:text-text-primary">
                    Close
                  </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="leadName" class="text-sm font-medium text-text-body">Full Name</label>
                    <input id="leadName" type="text" formControlName="name" class="mt-2 w-full rounded-[12px] border border-border-base bg-bg-white px-4 py-3 text-surface-dark" />
                    @if (isLeadInvalid('name')) {
                      <p class="mt-1 text-xs text-error">Please enter your full name.</p>
                    }
                  </div>

                  <div>
                    <label for="leadCompany" class="text-sm font-medium text-text-body">Company</label>
                    <input id="leadCompany" type="text" formControlName="company" class="mt-2 w-full rounded-[12px] border border-border-base bg-bg-white px-4 py-3 text-surface-dark" />
                    @if (isLeadInvalid('company')) {
                      <p class="mt-1 text-xs text-error">Please enter your company name.</p>
                    }
                  </div>

                  <div>
                    <label for="leadEmail" class="text-sm font-medium text-text-body">Work Email</label>
                    <input id="leadEmail" type="email" formControlName="email" class="mt-2 w-full rounded-[12px] border border-border-base bg-bg-white px-4 py-3 text-surface-dark" />
                    @if (isLeadInvalid('email')) {
                      <p class="mt-1 text-xs text-error">Please enter a valid email address.</p>
                    }
                  </div>

                  <div>
                    <label for="leadPhone" class="text-sm font-medium text-text-body">Phone</label>
                    <input id="leadPhone" type="tel" formControlName="phone" class="mt-2 w-full rounded-[12px] border border-border-base bg-bg-white px-4 py-3 text-surface-dark" />
                    @if (isLeadInvalid('phone')) {
                      <p class="mt-1 text-xs text-error">Please enter a valid phone number.</p>
                    }
                  </div>

                  <div class="md:col-span-2">
                    <label for="leadMessage" class="text-sm font-medium text-text-body">Request Details</label>
                    <textarea id="leadMessage" rows="5" formControlName="message" class="mt-2 w-full rounded-[12px] border border-border-base bg-bg-white px-4 py-3 text-surface-dark"></textarea>
                    @if (isLeadInvalid('message')) {
                      <p class="mt-1 text-xs text-error">Please add a few details about what you need.</p>
                    }
                  </div>
                </div>

                <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p class="text-xs text-text-muted">This will send your details directly to the Scalefort team by email.</p>
                  <button type="submit" [disabled]="leadForm.invalid || leadSubmitting()" class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {{ leadSubmitting() ? 'Sending...' : leadSubmitLabel() }}
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AlumniComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);
  private readonly toast = inject(ToastService);

  readonly selectedTrack = signal<string>('');
  readonly viewMode = signal<AlumniViewMode>('tiles');
  readonly currentPage = signal(1);
  readonly pageSize = 9;
  readonly activeLeadType = signal<AlumniLeadType | null>(null);
  readonly leadSubmitting = signal(false);

  readonly leadForm = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      updateOn: 'blur',
    }),
    company: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(120)],
      updateOn: 'blur',
    }),
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    phone: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(7)],
      updateOn: 'blur',
    }),
    message: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.minLength(20)],
      updateOn: 'blur',
    }),
  });

  readonly alumni: ReadonlyArray<AlumniProfile> = [
    {
      name: 'Maureen O.',
      cohort: 'Cohort 2',
      track: 'Backend Development (.NET)',
      currentRole: 'Software Engineer',
      company: 'Sterling Bank',
      quote: 'Scalefort provided me with a solid foundation in programming, equipping me with the technical skills I needed to thrive in the tech industry. The hands-on learning approach, coupled with expert mentorship, helped me build confidence.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/maureen-o'
    },
    {
      name: 'Bakare Halimat',
      cohort: 'Cohort 2',
      track: 'Frontend Development',
      currentRole: 'Frontend Engineer',
      company: 'Wema Bank',
      quote: 'Scalefort gave me the skills and confidence to excel in tech. The hands-on projects, expert mentorship, and real-world focus made all the difference in landing my first role.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/bakare-halimat'
    },
    {
      name: 'Samuel Akinwole',
      cohort: 'Cohort 2',
      track: 'Backend Development (.NET)',
      currentRole: 'Software Architect',
      company: 'Kaybill Technologies',
      quote: 'Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/samuel-akinwole'
    },
    {
      name: 'Eghosa J.',
      cohort: 'Cohort 3',
      track: 'Cloud Engineering',
      currentRole: 'Cloud DevOps Engineer',
      company: 'Kuda Bank',
      quote: 'Mastering AWS and Terraform at Scalefort allowed me to build resilient systems for one of Africa\'s fastest-growing fintechs. The curriculum is truly industry-aligned.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/eghosa-j'
    },
    {
      name: 'Simisola A.',
      cohort: 'Cohort 3',
      track: 'UI/UX Design',
      currentRole: 'Product Designer',
      company: 'Paystack',
      quote: 'Thinking in systems and understanding user psychology changed my design perspective. Scalefort doesn\'t just teach tools; they teach design thinking.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/simisola-a'
    },
    {
      name: 'David O.',
      cohort: 'Cohort 1',
      track: 'Data Analysis',
      currentRole: 'Business Intelligence Analyst',
      company: 'Interswitch',
      quote: 'Turning raw data into actionable insights was a superpower I gained at Scalefort. I now lead data-driven decisions that impact millions of transactions.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/david-o'
    },
    {
      name: 'Oluwaseun T.',
      cohort: 'Cohort 2',
      track: 'Frontend Development',
      currentRole: 'Senior Frontend Engineer',
      company: 'Microsoft',
      quote: 'Global standards are the baseline at Scalefort. The focus on performance and accessibility is why I was able to stand out in a global hiring process.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/oluwaseun-t'
    },
    {
      name: 'Chinyere U.',
      cohort: 'Cohort 1',
      track: 'Cybersecurity',
      currentRole: 'Security Consultant',
      company: 'Access Bank',
      quote: 'Zero trust and Privacy-by-Design are not just buzzwords at Scalefort. They are foundational principles that I now apply daily to protect customer data.',
      approved: true,
      linkedInUrl: 'https://linkedin.com/in/chinyere-u'
    }
  ];

  readonly tracks = Array.from(new Set(this.alumni.filter((item) => item.approved).map((item) => item.track)));
  readonly viewOptions: ReadonlyArray<{ label: string; value: AlumniViewMode }> = [
    { label: 'Tiles', value: 'tiles' },
    { label: 'List', value: 'list' },
  ];

  readonly filteredAlumni = computed(() =>
    this.alumni.filter((item) => item.approved && (!this.selectedTrack() || item.track === this.selectedTrack()))
  );
  readonly filteredCount = computed(() => this.filteredAlumni().length);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredCount() / this.pageSize)));
  readonly paginatedAlumni = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredAlumni().slice(start, start + this.pageSize);
  });
  readonly pages = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));
  readonly rangeStart = computed(() => (this.filteredCount() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize + 1));
  readonly rangeEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.filteredCount()));

  selectTrack(track: string): void {
    this.selectedTrack.set(track);
    this.currentPage.set(1);
  }

  setViewMode(mode: AlumniViewMode): void {
    this.viewMode.set(mode);
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  toggleLeadForm(type: AlumniLeadType): void {
    if (this.activeLeadType() === type) {
      this.closeLeadForm();
      return;
    }

    this.activeLeadType.set(type);
    this.leadForm.patchValue({
      message: this.defaultLeadMessage(type),
    });
    this.leadForm.markAsPristine();
    this.leadForm.markAsUntouched();
  }

  closeLeadForm(): void {
    this.activeLeadType.set(null);
    this.leadSubmitting.set(false);
    this.leadForm.reset({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    this.leadForm.markAsPristine();
    this.leadForm.markAsUntouched();
  }

  isLeadInvalid(field: keyof typeof this.leadForm.controls): boolean {
    const control = this.leadForm.controls[field];
    return control.invalid && control.touched;
  }

  leadFormLabel(): string {
    return this.activeLeadType() === 'hire' ? 'Hiring Request' : 'Partnership Request';
  }

  leadFormHeading(): string {
    return this.activeLeadType() === 'hire' ? 'Tell us about the graduates you need' : 'Tell us about your talent partnership goals';
  }

  leadFormSubline(): string {
    return this.activeLeadType() === 'hire'
      ? 'Share your hiring needs and our team will reach out with suitable graduate profiles.'
      : 'Share your partnership goals and we will get back to discuss how we can collaborate.';
  }

  leadSubmitLabel(): string {
    return this.activeLeadType() === 'hire' ? 'Send Hiring Request' : 'Send Partnership Request';
  }

  submitLeadForm(): void {
    if (this.leadForm.invalid || !this.activeLeadType()) {
      this.leadForm.markAllAsTouched();
      return;
    }

    const type = this.activeLeadType();
    if (!type) {
      return;
    }

    this.leadSubmitting.set(true);

    const payload: ContactPayload = {
      name: this.leadForm.controls.name.value,
      email: this.leadForm.controls.email.value,
      phone: this.leadForm.controls.phone.value,
      enquiryType: 'General',
      message: [
        `Alumni CTA Request: ${type === 'hire' ? 'Hire Graduates' : 'Talent Partnership'}`,
        `Company: ${this.leadForm.controls.company.value}`,
        `Contact Name: ${this.leadForm.controls.name.value}`,
        `Phone: ${this.leadForm.controls.phone.value}`,
        '',
        this.leadForm.controls.message.value,
      ].join('\n'),
    };

    this.api.submitContactForm(payload).subscribe({
      next: (response) => {
        this.toast.success(response.message?.trim() || 'Your request has been sent. Our team will reach out soon.');
        this.closeLeadForm();
      },
      error: () => {
        this.leadSubmitting.set(false);
        this.toast.error('We could not send your request. Please try again.');
      },
    });
  }

  chipClass(active: boolean): string {
    const base = 'px-5 py-2.5 rounded-pill text-xs font-bold uppercase tracking-widest transition-all duration-300 border';
    return active
      ? `${base} bg-surface-dark text-white border-surface-dark shadow-lg scale-105`
      : `${base} bg-bg-white text-text-muted border-border-base hover:border-border-strong hover:text-text-primary`;
  }

  viewToggleClass(active: boolean): string {
    const base = 'px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-widest transition-all duration-300 border';
    return active
      ? `${base} bg-green-500 text-white border-green-500 shadow-[0_10px_24px_rgba(22,198,90,0.22)]`
      : `${base} bg-bg-white text-text-muted border-border-base hover:border-border-strong hover:text-text-primary`;
  }

  pageButtonClass(active: boolean): string {
    const base = 'w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 border';
    return active
      ? `${base} bg-surface-dark text-white border-surface-dark`
      : `${base} bg-bg-white text-text-muted border-border-base hover:border-border-strong hover:text-text-primary`;
  }

  private defaultLeadMessage(type: AlumniLeadType): string {
    return type === 'hire'
      ? 'Hello Scalefort team,\n\nI would like to hire graduates from your alumni network. Please contact me to discuss the roles, expected skills, and hiring timeline.\n'
      : 'Hello Scalefort team,\n\nI would like to explore a talent partnership with Scalefort. Please contact me to discuss our needs, timeline, and possible collaboration model.\n';
  }
}

import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

const PREVIEW_KEY_PREFIX = 'scalefort_preview_token_';

interface SampleLesson {
  number: number;
  title: string;
  duration: string;
  topics: string[];
  free: boolean;
}

interface TrackData {
  label: string;
  color: string;
  icon: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  sampleLessons: SampleLesson[];
  modules: { title: string; description: string; icon: string }[];
  tools: string[];
  outcomes: string[];
  coursePath: string;
}

const TRACK_DATA: Record<string, TrackData> = {
  'frontend-development': {
    label: 'Frontend Development',
    color: 'rose',
    icon: '🎨',
    subtitle: 'Master React, modern JavaScript, and responsive design to build beautiful, high-performance web applications.',
    stats: [
      { label: 'Duration', value: '12 Weeks' },
      { label: 'Level', value: 'Beginner' },
      { label: 'Fee', value: '$200' },
      { label: 'Format', value: 'Online, Live' },
    ],
    sampleLessons: [
      { number: 1, title: 'Introduction to Web Development', duration: '45 min', topics: ['How the web works', 'HTML document structure', 'Your first webpage'], free: true },
      { number: 2, title: 'CSS Fundamentals & Layouts', duration: '60 min', topics: ['Selectors & specificity', 'Flexbox deep-dive', 'Responsive breakpoints'], free: true },
      { number: 3, title: 'JavaScript Essentials', duration: '55 min', topics: ['Variables & data types', 'Functions & scope', 'DOM manipulation basics'], free: false },
      { number: 4, title: 'Building with React', duration: '70 min', topics: ['Components & JSX', 'State & props', 'Event handling'], free: false },
    ],
    modules: [
      { title: 'HTML5 & CSS3', description: 'Semantic markup, Flexbox, Grid, and responsive design', icon: '📄' },
      { title: 'Modern JavaScript', description: 'ES6+ features, async/await, and DOM manipulation', icon: '⚡' },
      { title: 'React Framework', description: 'Components, Hooks, Context API, and Next.js', icon: '⚛️' },
    ],
    tools: ['VS Code', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Chrome DevTools'],
    outcomes: ['Build responsive SPAs', 'Component-driven architecture', 'Performance optimization', 'Career-ready portfolio'],
    coursePath: '/courses/frontend',
  },
  'python-programming': {
    label: 'Python Programming',
    color: 'green',
    icon: '🐍',
    subtitle: 'Learn Python from fundamentals to advanced concepts, building real-world applications and automations.',
    stats: [
      { label: 'Duration', value: '12 Weeks' },
      { label: 'Level', value: 'Beginner' },
      { label: 'Fee', value: '$200' },
      { label: 'Format', value: 'Online, Live' },
    ],
    sampleLessons: [
      { number: 1, title: 'Python Setup & First Script', duration: '40 min', topics: ['Installing Python 3', 'Running your first script', 'Variables & print()'], free: true },
      { number: 2, title: 'Control Flow & Functions', duration: '55 min', topics: ['If/else statements', 'Loops & iteration', 'Writing reusable functions'], free: true },
      { number: 3, title: 'Data Structures Deep-Dive', duration: '60 min', topics: ['Lists, tuples, dicts', 'List comprehensions', 'Working with JSON'], free: false },
      { number: 4, title: 'OOP & Classes', duration: '65 min', topics: ['Classes & objects', 'Inheritance & polymorphism', 'Magic methods'], free: false },
    ],
    modules: [
      { title: 'Python Fundamentals', description: 'Variables, data types, control flow, and functions', icon: '📦' },
      { title: 'OOP & Data Structures', description: 'Classes, inheritance, lists, dicts, and algorithms', icon: '🧱' },
      { title: 'Web & Automation', description: 'Django/Flask, REST APIs, and scripting', icon: '🌐' },
    ],
    tools: ['PyCharm', 'Python 3', 'Django', 'Flask', 'Git', 'PostgreSQL'],
    outcomes: ['Backend development', 'Automation scripting', 'Data processing', 'API development'],
    coursePath: '/courses/python',
  },
  'backend-development-net': {
    label: '.NET Development',
    color: 'violet',
    icon: '🔷',
    subtitle: 'Build enterprise-grade applications with C# and the .NET ecosystem, from APIs to full-stack solutions.',
    stats: [
      { label: 'Duration', value: '16 Weeks' },
      { label: 'Level', value: 'Intermediate' },
      { label: 'Fee', value: '$200' },
      { label: 'Format', value: 'Online, Live' },
    ],
    sampleLessons: [
      { number: 1, title: 'C# Language Foundations', duration: '50 min', topics: ['C# syntax & types', 'Control flow', 'Methods & parameters'], free: true },
      { number: 2, title: 'Object-Oriented C#', duration: '60 min', topics: ['Classes & interfaces', 'Inheritance & polymorphism', 'LINQ basics'], free: true },
      { number: 3, title: 'ASP.NET Core Web APIs', duration: '65 min', topics: ['Controllers & routing', 'Dependency injection', 'Middleware pipeline'], free: false },
      { number: 4, title: 'Entity Framework & Data', duration: '55 min', topics: ['DbContext & models', 'Migrations', 'CRUD operations'], free: false },
    ],
    modules: [
      { title: 'C# Fundamentals', description: 'Syntax, OOP, LINQ, and async programming', icon: '💎' },
      { title: 'ASP.NET Core', description: 'Web APIs, MVC, Razor Pages, and middleware', icon: '🏗️' },
      { title: 'Data & Cloud', description: 'Entity Framework, SQL Server, and Azure basics', icon: '☁️' },
    ],
    tools: ['Visual Studio', 'C#', '.NET 8', 'SQL Server', 'Azure', 'Git'],
    outcomes: ['Enterprise APIs', 'Database design', 'Cloud deployment', 'Full-stack .NET'],
    coursePath: '/courses/dotnet',
  },
  'data-analysis': {
    label: 'Data Analysis',
    color: 'amber',
    icon: '📊',
    subtitle: 'Transform raw data into actionable insights using Python, SQL, and modern visualization tools.',
    stats: [
      { label: 'Duration', value: '10 Weeks' },
      { label: 'Level', value: 'Beginner' },
      { label: 'Fee', value: '$200' },
      { label: 'Format', value: 'Online, Live' },
    ],
    sampleLessons: [
      { number: 1, title: 'The Data Analysis Workflow', duration: '40 min', topics: ['What data analysts do', 'Data lifecycle', 'Setting up Jupyter'], free: true },
      { number: 2, title: 'Working with Pandas', duration: '55 min', topics: ['DataFrames & Series', 'Filtering & grouping', 'Handling missing data'], free: true },
      { number: 3, title: 'SQL for Analysts', duration: '50 min', topics: ['SELECT & JOINs', 'Aggregation functions', 'Subqueries'], free: false },
      { number: 4, title: 'Data Visualization', duration: '60 min', topics: ['Matplotlib basics', 'Seaborn for stats', 'Dashboard design'], free: false },
    ],
    modules: [
      { title: 'Data Foundations', description: 'Statistics, data types, and data cleaning', icon: '🧮' },
      { title: 'Python for Data', description: 'Pandas, NumPy, and data wrangling', icon: '🐍' },
      { title: 'Visualization & BI', description: 'Matplotlib, Power BI, and storytelling with data', icon: '📈' },
    ],
    tools: ['Jupyter', 'Python', 'Pandas', 'Power BI', 'SQL', 'Excel'],
    outcomes: ['Data-driven decisions', 'Dashboard creation', 'Statistical analysis', 'Business intelligence'],
    coursePath: '/courses/data-analyst',
  },
  'cloud-computing': {
    label: 'Cloud Computing',
    color: 'green',
    icon: '☁️',
    subtitle: 'Design, deploy, and manage cloud infrastructure on AWS, Azure, and GCP with industry-standard practices.',
    stats: [
      { label: 'Duration', value: '14 Weeks' },
      { label: 'Level', value: 'Intermediate' },
      { label: 'Fee', value: '$350' },
      { label: 'Format', value: 'Online, Live' },
    ],
    sampleLessons: [
      { number: 1, title: 'Cloud Computing Fundamentals', duration: '45 min', topics: ['IaaS vs PaaS vs SaaS', 'Cloud economics', 'Shared responsibility'], free: true },
      { number: 2, title: 'Your First AWS Deployment', duration: '60 min', topics: ['EC2 instances', 'Security groups', 'Elastic IPs'], free: true },
      { number: 3, title: 'Docker & Containers', duration: '55 min', topics: ['Dockerfiles', 'Container images', 'Docker Compose'], free: false },
      { number: 4, title: 'Infrastructure as Code', duration: '65 min', topics: ['Terraform basics', 'HCL syntax', 'State management'], free: false },
    ],
    modules: [
      { title: 'Cloud Foundations', description: 'IaaS, PaaS, SaaS, and cloud architecture', icon: '🏛️' },
      { title: 'AWS & Azure', description: 'EC2, S3, Lambda, VMs, and managed services', icon: '🔧' },
      { title: 'DevOps & CI/CD', description: 'Docker, Kubernetes, Terraform, and pipelines', icon: '🚀' },
    ],
    tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
    outcomes: ['Cloud architecture', 'Infrastructure as Code', 'Container orchestration', 'Cloud certifications'],
    coursePath: '/courses/cloud-computing',
  },
};

const DEFAULT_TRACK: TrackData = {
  label: 'General',
  color: 'green',
  icon: '🎓',
  subtitle: 'Explore a guided preview of our tech curriculum and discover the path that fits your career goals.',
  stats: [
    { label: 'Duration', value: '12 Weeks' },
    { label: 'Level', value: 'Beginner' },
    { label: 'Fee', value: '$200' },
    { label: 'Format', value: 'Online, Live' },
  ],
  sampleLessons: [
    { number: 1, title: 'Welcome to Tech', duration: '30 min', topics: ['The tech landscape', 'Choosing your path', 'Setting expectations'], free: true },
    { number: 2, title: 'Setting Up Your Environment', duration: '45 min', topics: ['VS Code setup', 'Terminal basics', 'Git fundamentals'], free: true },
    { number: 3, title: 'Your First Project', duration: '60 min', topics: ['Project structure', 'Writing code', 'Testing basics'], free: false },
    { number: 4, title: 'Portfolio Building', duration: '50 min', topics: ['GitHub profile', 'README writing', 'Deployment'], free: false },
  ],
  modules: [
    { title: 'Introduction', description: 'Overview of the tech landscape and our approach', icon: '👋' },
    { title: 'Getting Started', description: 'Setting up your environment and first steps', icon: '🚀' },
    { title: 'Building Projects', description: 'Hands-on practice with real-world scenarios', icon: '🔨' },
  ],
  tools: ['VS Code', 'Git', 'Terminal', 'Browser DevTools'],
  outcomes: ['Technical foundations', 'Problem-solving skills', 'Portfolio starter', 'Career roadmap'],
  coursePath: '/tech-school/courses',
};

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- ═══════════ HERO (compact) ═══════════ -->
    <section class="pt-16 pb-8 bg-bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/5 blur-[100px] rounded-full -ml-24 -mb-24"></div>

      <div class="container-base max-w-5xl">
        <header class="text-center" appAnimateOnScroll animateVariant="blur-up">
          <p class="overline mb-3 inline-flex items-center rounded-pill border border-green-100 bg-green-50/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600 shadow-sm">
            Free Lesson Preview
          </p>
          <h1 class="type-display text-text-primary mb-3 tracking-tight">{{ title() }}</h1>
          <p class="text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            {{ trackData().subtitle }}
          </p>
        </header>

        <!-- Stats bar -->
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3" appAnimateOnScroll animateVariant="up" [animateDelay]="100">
          @for (stat of trackData().stats; track stat.label) {
            <div class="card-base !py-3 !px-4 text-center">
              <p class="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">{{ stat.label }}</p>
              <p class="text-sm font-bold text-text-primary">{{ stat.value }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════ SAMPLE LESSONS ═══════════ -->
    <section class="py-10 bg-bg-white">
      <div class="container-base max-w-5xl">
        <div class="flex items-center justify-between mb-6" appAnimateOnScroll animateVariant="up">
          <h2 class="type-h2 text-text-primary">Sample Lessons</h2>
          <span class="tag tag-green text-[10px]">{{ trackData().sampleLessons.length }} lessons</span>
        </div>

        <div class="space-y-3">
          @for (lesson of trackData().sampleLessons; track lesson.number; let i = $index) {
            <div
              appAnimateOnScroll
              [animateDelay]="i * 60"
              animateVariant="up"
              class="card-base !p-0 overflow-hidden group"
              [class.opacity-60]="!lesson.free && !hasAccess()"
            >
              <div class="flex items-stretch">
                <!-- Lesson number -->
                <div class="flex-shrink-0 w-14 flex items-center justify-center text-lg font-bold"
                  [class.bg-green-50]="lesson.free || hasAccess()"
                  [class.text-green-600]="lesson.free || hasAccess()"
                  [class.bg-bg-subtle]="!lesson.free && !hasAccess()"
                  [class.text-text-disabled]="!lesson.free && !hasAccess()"
                >
                  {{ lesson.number }}
                </div>

                <!-- Lesson content -->
                <div class="flex-1 px-5 py-4">
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-sm font-bold text-text-primary">{{ lesson.title }}</h3>
                    @if (lesson.free) {
                      <span class="text-[9px] uppercase tracking-wider font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Free</span>
                    } @else if (!hasAccess()) {
                      <span class="text-[9px] uppercase tracking-wider font-bold text-text-disabled bg-bg-subtle px-2 py-0.5 rounded-full">🔒 Locked</span>
                    }
                  </div>
                  <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
                    <span>⏱ {{ lesson.duration }}</span>
                    @for (topic of lesson.topics; track topic) {
                      <span class="flex items-center gap-1">
                        <span class="w-1 h-1 rounded-full bg-green-400"></span>
                        {{ topic }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Arrow / Lock -->
                <div class="flex-shrink-0 w-12 flex items-center justify-center text-text-muted group-hover:text-green-600 transition-colors">
                  @if (lesson.free || hasAccess()) {
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  } @else {
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    @if (!hasAccess()) {
      <!-- ═══════════ EMAIL GATE ═══════════ -->
      <section class="py-10 bg-bg-white">
        <div class="container-base max-w-5xl">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <!-- Left: Why unlock -->
            <div class="lg:col-span-2" appAnimateOnScroll animateVariant="left" [animateDelay]="100">
              <h2 class="type-h3 text-text-primary mb-4">Unlock All Lessons</h2>
              <p class="text-sm text-text-muted mb-5">
                Get instant access to the full preview including practical exercises, sample projects, and a starter task.
              </p>
              <div class="space-y-3">
                @for (outcome of trackData().outcomes; track outcome) {
                  <div class="flex items-center gap-2 text-sm text-text-body">
                    <span class="flex-shrink-0 w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">✓</span>
                    {{ outcome }}
                  </div>
                }
              </div>
              <div class="flex flex-wrap gap-2 mt-5">
                @for (signal of trustSignals; track signal) {
                  <span class="tag tag-green !text-[10px]">{{ signal }}</span>
                }
              </div>
            </div>

            <!-- Right: Form -->
            <div class="lg:col-span-3" appAnimateOnScroll animateVariant="right" [animateDelay]="200">
              <div class="card-base border-green-100 bg-gradient-to-br from-green-50/30 to-bg-white">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-lg">
                    {{ trackData().icon }}
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-text-primary">Unlock Free Preview</h3>
                    <p class="text-xs text-text-muted">Enter your email to get instant access.</p>
                  </div>
                </div>

                <form [formGroup]="form" (ngSubmit)="unlock()" class="flex flex-col sm:flex-row gap-3" novalidate>
                  <input
                    id="preview-email"
                    formControlName="email"
                    type="email"
                    class="flex-1 px-4 py-3 rounded-[14px] border border-border-base placeholder:text-text-disabled text-sm"
                    placeholder="you@example.com"
                  />
                  <button type="submit" class="btn-primary whitespace-nowrap" [disabled]="form.invalid">
                    Unlock Preview →
                  </button>
                </form>

                <p class="text-[11px] text-text-muted mt-3">
                  No payment required. We'll only use your email to send course updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <!-- ═══════════ UNLOCKED CONTENT ═══════════ -->
      <section class="py-10 bg-bg-white">
        <div class="container-base max-w-5xl">
          <!-- Full curriculum overview -->
          <div class="card-base mb-8" appAnimateOnScroll animateVariant="blur-up">
            <div class="flex items-center gap-2 mb-4">
              <span class="tag tag-green">✅ Preview Unlocked</span>
            </div>
            <h2 class="type-h3 text-text-primary mb-3">Full Curriculum Overview</h2>
            <p class="text-sm text-text-body mb-5">
              This preview covers the first {{ trackData().sampleLessons.length }} lessons of the {{ trackData().label }} track.
              Each module builds on the previous one to give you a solid foundation.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              @for (mod of trackData().modules; track mod.title; let i = $index) {
                <div
                  appAnimateOnScroll
                  [animateDelay]="i * 80"
                  animateVariant="scale-up"
                  class="bg-bg-subtle rounded-xl p-4 group cursor-default"
                >
                  <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-lg mb-3 group-hover:bg-green-100 transition-colors duration-300">
                    {{ mod.icon }}
                  </div>
                  <h3 class="text-sm font-bold text-text-primary mb-1">{{ mod.title }}</h3>
                  <p class="text-xs text-text-muted leading-relaxed">{{ mod.description }}</p>
                </div>
              }
            </div>
          </div>

          <!-- Tools -->
          <div class="flex flex-wrap items-center justify-center gap-2 mb-8" appAnimateOnScroll animateVariant="up">
            <span class="text-xs font-medium text-text-muted mr-2">Tools you'll use:</span>
            @for (tool of trackData().tools; track tool) {
              <span class="tag !text-[11px]">{{ tool }}</span>
            }
          </div>
        </div>
      </section>
    }

    <!-- ═══════════ PROGRAMME BENEFITS ═══════════ -->
    <section class="py-10 bg-bg-subtle/50">
      <div class="container-base max-w-5xl">
        <div class="text-center mb-8" appAnimateOnScroll animateVariant="up">
          <p class="overline mb-1">Programme Benefits</p>
          <h2 class="type-h2 text-text-primary tracking-tight">What You Get With ScaleFort</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          @for (benefit of benefits; track benefit.title; let i = $index) {
            <div
              appAnimateOnScroll
              [animateDelay]="i * 60"
              animateVariant="up"
              class="card-base text-center group cursor-default !py-5"
            >
              <div class="w-10 h-10 bg-bg-subtle rounded-lg flex items-center justify-center text-lg mx-auto mb-3 group-hover:bg-green-50 transition-colors duration-300">
                {{ benefit.icon }}
              </div>
              <h3 class="text-xs font-bold text-text-primary mb-1">{{ benefit.title }}</h3>
              <p class="text-[11px] text-text-muted leading-relaxed">{{ benefit.subtitle }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ═══════════ BOTTOM CTA ═══════════ -->
    <section class="py-10 bg-bg-white">
      <div class="container-base max-w-3xl">
        <div
          appAnimateOnScroll
          animateVariant="blur-up"
          class="card-base bg-gradient-to-br from-green-50 to-bg-white border-green-100 text-center py-10"
        >
          <h2 class="type-h3 text-text-primary mb-2">Ready to Start Learning?</h2>
          <p class="text-sm text-text-muted mb-6 max-w-md mx-auto">
            The preview is just the beginning. Apply now to join our next cohort and get the full programme experience.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a routerLink="/tech-school/apply" class="btn-primary no-underline">Apply Now</a>
            <a [routerLink]="trackData().coursePath" class="btn-secondary no-underline">View Full Course</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CoursePreviewComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  readonly track = signal('general');
  readonly hasAccess = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
  });

  readonly trackData = computed(() => TRACK_DATA[this.track()] ?? DEFAULT_TRACK);
  readonly title = computed(() => `Preview: ${this.trackData().label}`);

  readonly trustSignals = ['100% Free', 'No Credit Card', 'Instant Access', 'Self-Paced'];

  readonly benefits = [
    { icon: '👨‍🏫', title: 'Live Mentorship', subtitle: 'Weekly sessions with industry mentors.' },
    { icon: '🛠️', title: 'Hands-On Projects', subtitle: 'Build real-world applications.' },
    { icon: '🎯', title: 'Career Support', subtitle: 'CV review & interview prep.' },
    { icon: '🤝', title: 'Community', subtitle: 'Network of African tech professionals.' },
  ];

  ngOnInit(): void {
    const track = this.route.snapshot.paramMap.get('track') ?? 'general';
    this.track.set(track);

    const token = localStorage.getItem(`${PREVIEW_KEY_PREFIX}${track}`);
    this.hasAccess.set(Boolean(token));
  }

  unlock(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const token = btoa(`${this.form.controls.email.value}:${Date.now()}`);
    localStorage.setItem(`${PREVIEW_KEY_PREFIX}${this.track()}`, token);
    this.hasAccess.set(true);
  }
}

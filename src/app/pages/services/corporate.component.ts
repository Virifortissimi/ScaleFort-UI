import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { DepartmentType, TopicType } from "../../shared/models/application-inquiry.model";
import { CourseEnrollmentComponent } from "../courses/course-enrollment/course-enrollment.component";

@Component({
  selector: "app-corporate-training",
  standalone: true,
  imports: [CommonModule],
  providers: [DialogService],
  template: `
    <div>
      <!-- Hero Section -->
      <section
        class="relative min-h-[80vh] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden flex items-center"
      >
        <div class="absolute inset-0">
          <div
            class="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob1"
          ></div>
          <div
            class="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob2"
          ></div>
        </div>
        <div
          class="absolute inset-0"
          style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 40px 40px;"
        ></div>

        <div class="max-w-7xl mx-auto px-4 relative z-10 py-24">
          <div class="max-w-3xl animate-fade-in">
            <div
              class="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 animate-slide-up"
            >
              🎯 Future-Proof Your Workforce
            </div>
            <h1
              class="text-6xl font-bold mb-6 leading-tight animate-slide-up"
              style="animation-delay: 200ms"
            >
              Customized Upskilling Programs<br />for Enterprise Teams
            </h1>
            <p
              class="text-xl mb-8 text-purple-100 animate-slide-up"
              style="animation-delay: 400ms"
            >
              Transform your organization's capabilities with tailored training
              solutions aligned with your business objectives.
            </p>
            <div class="animate-slide-up" style="animation-delay: 600ms">
              <a href="https://calendly.com/egab/new-meeting"
                class="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span class="mr-2">Schedule Consultation</span>
                <svg
                  class="w-5 h-5 animate-bounce-x"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Value Proposition Section -->
      <section class="py-32 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8 animate-on-scroll">
              <div
                class="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-medium"
              >
                Our Approach
              </div>
              <h2 class="text-4xl font-bold leading-tight">
                Aligning Learning Outcomes with Business Goals
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                We design training programs that directly contribute to your
                organizational KPIs through:
              </p>
              <ul class="space-y-4">
                <li
                  class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  <div
                    class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-700"
                    >Skills gap analysis & needs assessment</span
                  >
                </li>
                <li
                  class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  <div
                    class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-700"
                    >Custom curriculum development</span
                  >
                </li>
                <li
                  class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  <div
                    class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-700"
                    >ROI-focused learning outcomes</span
                  >
                </li>
              </ul>
            </div>
            <div class="relative aspect-video group animate-on-scroll">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl transform group-hover:scale-95 transition-all duration-500"
              ></div>
              <img
                src="assets/corporate-training-process.jpg"
                class="relative w-full h-full rounded-xl shadow-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500"
                alt="Corporate training process"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Program Offerings Section -->
      <section id="apply" class="py-32 bg-gray-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div
              class="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-medium mb-4"
            >
              Training Programs
            </div>
            <h2 class="text-4xl font-bold mb-6">
              Comprehensive Learning Solutions
            </h2>
            <p class="text-gray-600 text-lg">
              Customizable programs across key digital transformation domains
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              *ngFor="let program of programs; let i = index"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-on-scroll"
              [style.animation-delay]="i * 100 + 'ms'"
            >
              <div class="relative overflow-hidden">
                <img
                  [src]="program.image"
                  [alt]="program.title"
                  class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <span
                    class="px-3 py-1 bg-purple-600 rounded-full text-sm font-medium"
                  >
                    {{ program.category }}
                  </span>
                </div>
              </div>
              <div class="p-8">
                <h3
                  class="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors"
                >
                  {{ program.title }}
                </h3>
                <p class="text-gray-600 mb-6">{{ program.description }}</p>
                <div class="space-y-3 mb-8">
                  <p class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 text-purple-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Duration: {{ program.duration }}
                  </p>
                  <p class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 text-purple-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Group Size: {{ program.groupSize }}
                  </p>
                </div>
                <a
                  class="inline-flex items-center px-6 py-3 bg-purple-50 text-purple-600 rounded-full font-semibold group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 cursor-pointer"
                  (click)="openErollCoperateTraining(program.title, program.trainingTopic)"
                >
                  Customize Program
                  <svg
                    class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Methodology Section -->
      <section class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div
              class="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-medium mb-4"
            >
              Our Methodology
            </div>
            <h2 class="text-4xl font-bold mb-6">Proven Training Framework</h2>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll"
          >
            <div
              class="p-6 text-center bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div
                class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Needs Assessment</h3>
              <p class="text-gray-600">
                Comprehensive skills gap analysis and competency mapping
              </p>
            </div>
            <div
              class="p-6 text-center bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div
                class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Custom Curriculum</h3>
              <p class="text-gray-600">
                Tailored learning paths aligned with business objectives
              </p>
            </div>
            <div
              class="p-6 text-center bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div
                class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Blended Learning</h3>
              <p class="text-gray-600">
                Mix of workshops, e-learning, and hands-on projects
              </p>
            </div>
            <div
              class="p-6 text-center bg-gray-50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div
                class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Impact Measurement</h3>
              <p class="text-gray-600">
                ROI tracking and competency-based assessments
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        class="py-32 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden"
      >
        <div class="absolute inset-0">
          <div
            class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob1"
          ></div>
          <div
            class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob2"
          ></div>
        </div>
        <div
          class="max-w-4xl mx-auto px-4 text-center relative z-10 animate-on-scroll"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upskill Your Team?
          </h2>
          <p class="text-lg md:text-xl mb-6">
            Let's create a custom learning program that drives measurable
            business results
          </p>
          <a
            href="/corporate-training#apply"
            class="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Apply For Training
            <svg
              class="w-5 h-5 ml-2 animate-bounce-x"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      <!-- Client Success Section -->
      <!-- <section class="py-32 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <div
              class="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-medium mb-4"
            >
              Success Stories
            </div>
            <h2 class="text-4xl font-bold mb-6">Transforming Organizations</h2>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll"
          >
            <div
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-2xl font-bold text-purple-600">75%</span>
                </div>
                <div>
                  <h3 class="font-semibold">Productivity Increase</h3>
                  <p class="text-gray-600">Financial Services Firm</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "The customized cloud training program reduced our deployment
                errors by 60%"
              </p>
            </div>

            <div
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-2xl font-bold text-purple-600">2x</span>
                </div>
                <div>
                  <h3 class="font-semibold">Faster Time-to-Market</h3>
                  <p class="text-gray-600">E-Commerce Company</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Our development team's efficiency doubled after the agile
                training"
              </p>
            </div>

            <div
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                >
                  <span class="text-2xl font-bold text-purple-600">90%</span>
                </div>
                <div>
                  <h3 class="font-semibold">Certification Success</h3>
                  <p class="text-gray-600">Tech Startup</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "90% of our engineers achieved AWS certification after the
                training program"
              </p>
            </div>
          </div>
        </div>
      </section> -->
    </div>
  `,
  styles: [
    `
      /* Maintain existing animation styles */
      @keyframes blob1 {
        0% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(30%, -20%) scale(1.1);
        }
        66% {
          transform: translate(-20%, 20%) scale(0.9);
        }
        100% {
          transform: translate(0, 0) scale(1);
        }
      }
      @keyframes blob2 {
        0% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(-30%, 30%) scale(1.1);
        }
        66% {
          transform: translate(20%, -20%) scale(0.9);
        }
        100% {
          transform: translate(0, 0) scale(1);
        }
      }
      .animate-blob1 {
        animation: blob1 12s infinite linear;
      }
      .animate-blob2 {
        animation: blob2 12s infinite linear;
      }

      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s;
      }

      .animate-on-scroll.active {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  ],
})
export class CorporateTrainingComponent implements OnInit {
  programs = [
    {
      title: "Technical Upskilling",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
      description:
        "Modern software development practices and cloud technologies",
      duration: "4-12 Weeks",
      groupSize: "5-50 Participants",
      trainingTopic: TopicType.TechnicalUpskilling
    },
    {
      title: "Leadership in Tech",
      category: "Management",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
      description:
        "For tech leaders managing distributed teams and digital transformation",
      duration: "8 Weeks",
      groupSize: "5-20 Participants",
      trainingTopic: TopicType.LeadershipInTech
    },
    {
      title: "Agile Transformation",
      category: "Methodology",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3",
      description:
        "Implement agile practices across engineering and business teams",
      duration: "6 Weeks",
      groupSize: "10-100 Participants",
      trainingTopic: TopicType.AgileTransformation
    },
    {
      title: "Cloud Migration",
      category: "DevOps",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      description: "Enterprise cloud strategy and migration training",
      duration: "10 Weeks",
      groupSize: "5-30 Participants",
      trainingTopic: TopicType.CloudMigration
    },
    {
      title: "Data Literacy",
      category: "Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      description: "Building data-driven decision making across departments",
      duration: "6 Weeks",
      groupSize: "10-100 Participants",
      trainingTopic: TopicType.DataLiteracy
    },
    {
      title: "Cybersecurity",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
      description: "Enterprise security best practices and threat management",
      duration: "8 Weeks",
      groupSize: "5-50 Participants",
      trainingTopic: TopicType.Cybersecurity
    },
  ];

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      document
        .querySelectorAll(".animate-on-scroll")
        .forEach((el) => observer.observe(el));
    }, 0);
  }

  openErollCoperateTraining(topic: string, trainingTopic: TopicType) {
    const ref: DynamicDialogRef = this.dialogService.open(CourseEnrollmentComponent, {
      header: `${topic} program`,
      width: '35vw',
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      modal: true,
      data: {
        departmentType: DepartmentType.CorporateTraining,
        trainingTopic: trainingTopic
      },
      closable: true
    });
  }
}

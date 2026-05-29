import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { MagneticDirective } from '../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective, MagneticDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section appAnimateOnScroll class="home-hero section-hero relative z-[1] overflow-hidden">
      <!-- Premium ambient background decoration -->
      <div class="home-hero__ambient-bg" aria-hidden="true">
        <div class="ambient-blob ambient-blob--top"></div>
        <div class="ambient-blob ambient-blob--bottom"></div>
      </div>

      <div class="container-base">
        <div class="home-hero__layout">
          <!-- Left Column Content (Original Branding Content & Buttons) -->
          <div class="home-hero__content">
            <p appAnimateOnScroll [animateDelay]="80" class="home-hero__eyebrow overline">
              Transforming Africa's Digital Future
            </p>
            <h1 appAnimateOnScroll [animateDelay]="120" class="home-hero__title type-display">
              Africa's Complete <span class="title-accent">Tech Company</span>
            </h1>
            <p appAnimateOnScroll [animateDelay]="180" class="home-hero__copy type-body-l">
              We train your developers, build your digital products, and upskill your enterprise teams from Lagos, for Africa.
            </p>
            
            <div appAnimateOnScroll [animateDelay]="240" class="home-hero__actions">
              <a appMagnetic routerLink="/tech-school/apply" class="btn-school no-underline">Start Your Tech Career</a>
              <a appMagnetic routerLink="/it-services/quote" class="btn-it-outline no-underline">Build My Product</a>
              <a appMagnetic routerLink="/corporate-training/apply" class="btn-corporate-outline no-underline">Train My Team</a>
            </div>

            <!-- Proof checklist in 2-column checklist layout -->
            <div appAnimateOnScroll [animateDelay]="300" class="home-hero__proof-list">
              <ul class="proof-list__items">
                <li>
                  <svg class="check-icon check-icon--green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  NDPR/GDPR Compliant
                </li>
                <li>
                  <svg class="check-icon check-icon--amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  100+ Learners Trained
                </li>
                <li>
                  <svg class="check-icon check-icon--rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  98% Client Satisfaction
                </li>
                <li>
                  <svg class="check-icon check-icon--dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Lagos-Based, Africa-Focused
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column Visual Content (Mockup Layout adapted to brand colors) -->
          <div appAnimateOnScroll [animateDelay]="220" class="home-hero__visual">
            <div class="geometric-shapes" aria-hidden="true">
              <!-- Shape Green (Brand green rotated square) -->
              <div class="shape-element shape-green"></div>
              <!-- Shape Dark (Brand dark / navy rotated square) -->
              <div class="shape-element shape-dark"></div>
              <!-- Shape Amber (Brand amber highlighting shape) -->
              <div class="shape-element shape-amber"></div>
              <!-- Shape Wave (Fluid wave shape at the bottom) -->
              <div class="shape-element shape-wave"></div>
            </div>

            <!-- Cutout Image: Beautiful AI-generated lady matching mockup yellow leather jacket -->
            <img
              src="assets/images/home/hero-woman.png"
              alt="Smiling professional modern woman in yellow jacket and orange glasses with hands on chest"
              class="home-hero__person animate-float"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home-hero {
      min-height: 92svh;
      padding-block-start: 140px;
      padding-block-end: 80px;
      position: relative;
      transition: background-color 300ms var(--ease-drift);
    }

    .home-hero__ambient-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .ambient-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.5;
    }

    .ambient-blob--top {
      top: -10%;
      right: 10%;
      width: 35vw;
      height: 35vw;
      background: rgba(22, 198, 90, 0.08); /* Green tinted */
    }

    .ambient-blob--bottom {
      bottom: -15%;
      left: 5%;
      width: 40vw;
      height: 40vw;
      background: rgba(245, 158, 11, 0.05); /* Amber tinted */
    }

    .home-hero__layout {
      min-height: calc(92svh - 220px);
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
      align-items: center;
      gap: clamp(2.5rem, 5vw, 6rem);
      position: relative;
      z-index: 2;
    }

    .home-hero__content {
      position: relative;
      z-index: 2;
      max-width: 46rem;
    }

    .home-hero__eyebrow {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      margin-bottom: 1.4rem;
      padding: 0.55rem 1.15rem;
      border: 1px solid var(--border-default);
      border-radius: 999px;
      background: color-mix(in srgb, var(--surface-raised) 86%, transparent);
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
    }

    .home-hero__title {
      font-size: clamp(3rem, 5.8vw, 4.75rem);
      line-height: 1.04;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.035em;
      margin: 0;
    }

    .home-hero__title .title-accent {
      color: var(--green-600); /* Keep original green brand accent */
      display: block;
      margin-top: 0.15em;
    }

    .home-hero__copy {
      max-width: 38rem;
      margin: 1.8rem 0 0;
      line-height: 1.7;
      color: #475569; /* slate-600 */
      font-size: clamp(1.05rem, 1.1vw, 1.2rem);
    }

    .home-hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
      margin-top: 2.2rem;
    }

    .home-hero__proof-list {
      margin-top: 3.5rem;
      max-width: 40rem;
    }

    .proof-list__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.1rem 2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .proof-list__items li {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      font-size: 0.95rem;
      font-weight: 600;
      color: #334155; /* slate-700 */
      transition: color 200ms ease;
    }

    .proof-list__items li:hover {
      color: #0f172a;
    }

    .check-icon {
      width: 1.1rem;
      height: 1.1rem;
      flex: 0 0 auto;
    }

    .check-icon--green {
      color: var(--green-500);
    }

    .check-icon--amber {
      color: var(--amber-600);
    }

    .check-icon--rose {
      color: var(--rose-500);
    }

    .check-icon--dark {
      color: var(--border-strong);
    }

    .home-hero__visual {
      position: relative;
      z-index: 2;
      height: clamp(30rem, 50vw, 42rem);
      width: 100%;
      isolation: isolate;
    }

    .geometric-shapes {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .shape-element {
      position: absolute;
      border-radius: 4.5rem;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Shape Green: Brand green rotated block */
    .shape-green {
      width: clamp(20rem, 32vw, 26rem);
      height: clamp(20rem, 32vw, 26rem);
      background: linear-gradient(135deg, var(--green-500) 0%, var(--green-600) 100%);
      border-radius: 5rem;
      transform: rotate(-12deg);
      left: 2%;
      top: 22%;
      z-index: 2;
      box-shadow: 0 20px 50px rgba(22, 198, 90, 0.25);
    }

    /* Shape Dark: Brand dark / charcoal rotated block */
    .shape-dark {
      width: clamp(24rem, 38vw, 31rem);
      height: clamp(24rem, 38vw, 31rem);
      background: linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 100%);
      border-radius: 6rem;
      transform: rotate(15deg);
      right: -10%;
      top: 8%;
      z-index: 1;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
    }

    /* Shape Amber: Brand amber highlighting shape */
    .shape-amber {
      width: clamp(12rem, 20vw, 17rem);
      height: clamp(12rem, 20vw, 17rem);
      background: linear-gradient(135deg, var(--amber-400) 0%, var(--amber-600) 100%);
      border-radius: 3.5rem;
      transform: rotate(-38deg);
      left: 20%;
      top: -2%;
      z-index: 3;
      opacity: 0.8;
      box-shadow: 0 15px 35px rgba(245, 158, 11, 0.2);
    }

    /* Bottom swoosh wave style brand charcoal element */
    .shape-wave {
      bottom: -6%;
      right: -25%;
      width: clamp(28rem, 42vw, 35rem);
      height: clamp(14rem, 24vw, 18rem);
      background: linear-gradient(180deg, #161616 0%, #0a0a0a 100%);
      border-radius: 50% 50% 0 0 / 80% 80% 0 0;
      transform: rotate(-4deg);
      z-index: 3;
      box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
    }

    .home-hero__person {
      position: absolute;
      top: -24%;
      bottom: -15%;
      right: -10%;
      width: 120%;
      height: 138%;
      object-fit: contain;
      z-index: 4;
      filter: drop-shadow(0 20px 40px rgba(15, 23, 42, 0.22));
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      transform-origin: bottom center;
    }

    .home-hero__visual:hover .home-hero__person {
      transform: translateY(-5px) scale(1.03);
    }

    .home-hero__visual:hover .shape-green {
      transform: rotate(-16deg) translate(-5px, 5px);
    }

    .home-hero__visual:hover .shape-dark {
      transform: rotate(18deg) translate(5px, -5px);
    }

    /* Subtle float animation for the cutout woman */
    .animate-float {
      animation: floatEffect 6s ease-in-out infinite;
    }

    @keyframes floatEffect {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    /* Dark Mode Styling Integration */
    :host-context(.dark) .home-hero__title {
      color: #f8fafc;
    }

    :host-context(.dark) .home-hero__title .title-accent {
      color: #7df3b2; /* Keep dark mode green brand accent */
    }

    :host-context(.dark) .home-hero__copy {
      color: #94a3b8; /* slate-400 */
    }

    :host-context(.dark) .proof-list__items li {
      color: #94a3b8;
    }

    :host-context(.dark) .proof-list__items li:hover {
      color: #f1f5f9;
    }

    :host-context(.dark) .check-icon--dark {
      color: rgba(255, 255, 255, 0.2);
    }

    /* Responsive adjustments */
    @media (max-width: 1100px) {
      .home-hero__layout {
        grid-template-columns: 1fr;
        gap: 3.5rem;
      }

      .home-hero__content {
        max-width: 48rem;
        text-align: center;
        margin-inline: auto;
      }

      .home-hero__eyebrow {
        margin-inline: auto;
      }

      .home-hero__copy {
        margin-inline: auto;
      }

      .home-hero__actions {
        justify-content: center;
      }

      .home-hero__proof-list {
        margin-inline: auto;
      }

      .proof-list__items {
        justify-content: center;
      }

      .home-hero__visual {
        max-width: 44rem;
        margin-inline: auto;
        height: clamp(26rem, 58vw, 36rem);
      }

      .shape-green {
        left: 5%;
      }

      .shape-dark {
        right: -5%;
      }
    }

    @media (max-width: 768px) {
      .home-hero {
        padding-block-start: 118px;
        padding-block-end: 60px;
      }

      .home-hero__layout {
        min-height: 0;
        gap: 2.5rem;
      }

      .home-hero__actions {
        flex-direction: column;
      }

      .home-hero__actions a {
        width: 100%;
      }

      .proof-list__items {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .home-hero__visual {
        height: 25rem;
      }

      .shape-green {
        width: 18rem;
        height: 18rem;
        border-radius: 3.5rem;
      }

      .shape-dark {
        width: 20rem;
        height: 20rem;
        border-radius: 4rem;
      }

      .shape-wave {
        width: 25rem;
        height: 12rem;
      }

      .home-hero__person {
        width: 95%;
        height: 95%;
      }
    }
  `],
})
export class HomeHeroComponent {}

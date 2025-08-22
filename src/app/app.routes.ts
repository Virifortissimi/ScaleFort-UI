import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MentorshipComponent } from './pages/mentorship/mentorship.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/services/service-detail.component';
import { EarnComponent } from './pages/earn/earn.component';
import { GetInTouchComponent } from './pages/getintouch/getintouch.component';
import { PrivacyPolicyComponent } from './pages/resources/privacypolicy.component';
import { CorporateTrainingComponent } from './pages/services/corporate.component';
import { RegisterComponent } from './pages/auth/Register/register.component';
import { LoginComponent } from './pages/auth/Login/login.component';
import { CookiePolicyComponent } from './pages/resources/cookiepolicy.component';
import { TermsOfServiceComponent } from './pages/resources/termsofservice.component';
import { authGuard } from './pages/auth/guards/auth.guard';
import { authRedirectGuard } from './pages/auth/guards/auth-redirect.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Scalefort - Empowering Tech Careers" },
  { path: 'about', component: AboutComponent, title: "Scalefort - About" },
  { path: 'register', component: RegisterComponent, title: "Scalefort - Register", canActivate: [authRedirectGuard] },
  { path: 'login', component: LoginComponent, title: "Scalefort - Login", canActivate: [authRedirectGuard] },
  { path: 'mentorship', component: MentorshipComponent, title: "Scalefort - Mentorship" },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: "Scalefort - Privacy Policy" },
  { path: 'cookie-policy', component: CookiePolicyComponent, title: "Scalefort - Cookie Policy" },
  { path: 'earn', component: EarnComponent, title: "Scalefort - Earn", canActivate: [authGuard] },
  { path: 'contact', component: GetInTouchComponent, title: "Scalefort - Contact Us" },
  { path: 'corporate-training', component: CorporateTrainingComponent, title: "Scalefort - Corporate Training" },
  { path: 'terms', component: TermsOfServiceComponent, title: "Scalefort - Terms of Service" },
  { path: 'faq', component: FaqComponent, title: "Scalefort - FAQ" },
  { path: 'get-started', component: GetStartedComponent, title: "Scalefort - Register" },
  { path: 'bulk-vouchers', component: VouchersComponent, title: "Scalefort - Vouchers" },
  { path: 'services', component: ServicesComponent, title: "Scalefort - Services" },
  { path: 'services/:id', component: ServiceDetailComponent, title: "Scalefort - Service Detail" },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'verify-payment',
    loadComponent: () => import('./pages/payments/verify-payment/verify-payment.component').then(m => m.VerifyPaymentComponent),
  },
  { path: '**', redirectTo: '' }
];
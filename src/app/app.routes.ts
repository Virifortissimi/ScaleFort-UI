import { Routes } from '@angular/router';
import { affiliateAuthGuard } from './core/guards/affiliate-auth.guard';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-post.component').then((m) => m.BlogPostComponent),
  },
  {
    path: 'events',
    canActivate: [affiliateAuthGuard],
    loadComponent: () => import('./pages/events/events.component').then((m) => m.EventsComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/Register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/Login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/forgot-password.component').then((m) => m.ForgotPasswordComponent),
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./pages/auth/reset-password.component').then((m) => m.ResetPasswordComponent),
  },
  {
    path: 'verify-2fa',
    loadComponent: () => import('./pages/auth/verify-2fa.component').then((m) => m.VerifyTwoFactorComponent),
  },
  {
    path: 'confirm-account',
    loadComponent: () => import('./pages/auth/confirm-account.component').then((m) => m.ConfirmAccountComponent),
  },
  {
    path: 'confirm-email-change',
    loadComponent: () => import('./pages/auth/confirm-email-change.component').then((m) => m.ConfirmEmailChangeComponent),
  },
  {
    path: 'mentorship',
    loadComponent: () => import('./pages/mentorship/mentorship.component').then((m) => m.MentorshipComponent),
  },
  {
    path: 'alumni',
    canActivate: [affiliateAuthGuard],
    loadComponent: () => import('./pages/alumni/alumni.component').then((m) => m.AlumniComponent),
  },
  {
    path: 'assistant',
    loadComponent: () => import('./shared/components/ai-chat-widget.component').then((m) => m.AiChatWidgetComponent),
  },
  {
    path: 'affiliate',
    canActivate: [affiliateAuthGuard],
    component: AffiliateComponent,
  },
  {
    path: 'admin/payouts',
    canActivate: [affiliateAuthGuard],
    loadComponent: () => import('./pages/admin/payout-requests.component').then((m) => m.PayoutRequestsComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/resources/privacypolicy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'cookie-policy',
    loadComponent: () => import('./pages/resources/cookiepolicy.component').then((m) => m.CookiePolicyComponent),
  },
  {
    path: 'terms-of-service',
    loadComponent: () => import('./pages/resources/termsofservice.component').then((m) => m.TermsOfServiceComponent),
  },
  {
    path: 'affiliate-policy',
    loadComponent: () => import('./pages/resources/affiliatepolicy.component').then((m) => m.AffiliatePolicyComponent),
  },
  {
    path: 'resources/salary-guide',
    loadComponent: () => import('./pages/resources/salary-guide/salary-guide.component').then((m) => m.SalaryGuideComponent),
  },
  {
    path: 'terms',
    redirectTo: 'terms-of-service',
    pathMatch: 'full',
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/getintouch/getintouch.component').then((m) => m.GetInTouchComponent),
  },
  {
    path: 'future-creators-tech-camp',
    loadComponent: () =>
      import('./pages/future-creators-tech-camp/future-creators-tech-camp.component').then(
        (m) => m.FutureCreatorsTechCampComponent
      ),
  },

  {
    path: 'tech-school',
    loadComponent: () => import('./pages/courses/courses.component').then((m) => m.CoursesComponent),
  },
  {
    path: 'tech-school/courses',
    loadComponent: () => import('./pages/courses/courses.component').then((m) => m.CoursesComponent),
  },
  {
    path: 'tech-school/preview/:track',
    canActivate: [affiliateAuthGuard],
    loadComponent: () => import('./pages/courses/preview/course-preview.component').then((m) => m.CoursePreviewComponent),
  },
  {
    path: 'tech-school/apply',
    loadComponent: () => import('./pages/get-started/get-started.component').then((m) => m.GetStartedComponent),
  },
  {
    path: 'it-services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'it-services/portfolio',
    loadComponent: () => import('./pages/services/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'it-services/quote',
    loadComponent: () => import('./pages/getintouch/getintouch.component').then((m) => m.GetInTouchComponent),
  },
  {
    path: 'corporate-training',
    loadComponent: () => import('./pages/services/corporate.component').then((m) => m.CorporateTrainingComponent),
  },
  {
    path: 'corporate-training/apply',
    loadComponent: () => import('./pages/getintouch/getintouch.component').then((m) => m.GetInTouchComponent),
  },

  {
    path: 'services',
    redirectTo: 'it-services',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    redirectTo: 'tech-school/courses',
    pathMatch: 'full',
  },
  {
    path: 'apply',
    redirectTo: 'tech-school/apply',
    pathMatch: 'full',
  },

  {
    path: 'courses/python',
    loadComponent: () => import('./pages/courses/subpage/python.component').then((m) => m.PythonComponent),
  },
  {
    path: 'courses/dotnet',
    loadComponent: () => import('./pages/courses/subpage/dotnet.component').then((m) => m.DotnetComponent),
  },
  {
    path: 'courses/data-analyst',
    loadComponent: () => import('./pages/courses/subpage/dataanalysis.component').then((m) => m.DataAnalysisComponent),
  },
  {
    path: 'courses/cloud-computing',
    loadComponent: () => import('./pages/courses/subpage/cloud.component').then((m) => m.CloudComponent),
  },
  {
    path: 'courses/frontend',
    loadComponent: () => import('./pages/courses/subpage/frontend.component').then((m) => m.FrontendComponent),
  },

  {
    path: 'get-started',
    canActivate: [affiliateAuthGuard],
    loadComponent: () => import('./pages/get-started/get-started.component').then((m) => m.GetStartedComponent),
  },
  {
    path: 'payment/success',
    loadComponent: () => import('./pages/payment-success/payment-success.component').then((m) => m.PaymentSuccessComponent),
  },
  {
    path: 'bulk-vouchers',
    loadComponent: () => import('./pages/vouchers/vouchers.component').then((m) => m.VouchersComponent),
  },

  { path: '**', redirectTo: '' },
];

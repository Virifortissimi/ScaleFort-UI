import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MentorshipComponent } from './pages/mentorship/mentorship.component';
// import { ResourcesComponent } from './pages/resources/resources.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/services/service-detail.component';
import { PythonComponent } from './pages/courses/subpage/python.component'
import { EarnComponent } from './pages/earn/earn.component';
import { GetInTouchComponent } from './pages/getintouch/getintouch.component';
import { PrivacyPolicyComponent } from './pages/resources/privacypolicy.component';
import { Title } from '@angular/platform-browser';
import { DotnetComponent } from './pages/courses/subpage/dotnet.component';
import { FrontendComponent } from './pages/courses/subpage/frontend.component';
import { DataAnalysisComponent } from './pages/courses/subpage/dataanalysis.component';
import { CloudComponent } from './pages/courses/subpage/cloud.component';
import { CorporateTrainingComponent } from './pages/services/corporate.component';
import { RegisterComponent } from './pages/auth/Register/register.component';
import { LoginComponent } from './pages/auth/Login/login.component';
import { CookiePolicyComponent } from './pages/resources/cookiepolicy.component';
import { TermsOfServiceComponent } from './pages/resources/termsofservice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Scalefort - Empowering Tech Careers" },
  { path: 'about', component: AboutComponent, title: "Scalefort - About" },
  { path: 'register', component: RegisterComponent, title: "Scalefort - Register" },
  { path: 'login', component: LoginComponent, title: "Scalefort - Login" },
  { path: 'mentorship', component: MentorshipComponent, title: "Scalefort - Mentorship" },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: "Scalefort - Privacy Policy" },
  { path: 'cookie-policy', component: CookiePolicyComponent, title: "Scalefort - Cookie Policy" },
  { path: 'earn', component: EarnComponent, title: "Scalefort - Earn" },
  { path: 'courses', component: CoursesComponent, title: "Scalefort - Courses" },
  { path: 'contact', component: GetInTouchComponent, title: "Scalefort - Contact Us" },
  { path: 'corporate-training', component: CorporateTrainingComponent, title: "Scalefort - Corporate Training" },
  { path: 'terms', component: TermsOfServiceComponent, title: "Scalefort - Terms of Service" },
  { path: 'courses/python', component: PythonComponent, title: "Scalefort - Python" },
  { path: 'courses/dotnet', component: DotnetComponent, title: "Scalefort - Dotnet" },
  { path: 'courses/data-analyst', component: DataAnalysisComponent, title: "Scalefort - Data Analyst" },
  { path: 'courses/cloud-computing', component: CloudComponent, title: "Scalefort - Cloud Computing" },
  { path: 'courses/frontend', component: FrontendComponent, title: "Scalefort - Frontend" },
  { path: 'faq', component: FaqComponent, title: "Scalefort - FAQ" },
  { path: 'get-started', component: GetStartedComponent, title: "Scalefort - Register" },
  { path: 'bulk-vouchers', component: VouchersComponent, title: "Scalefort - Vouchers" },
  { path: 'services', component: ServicesComponent, title: "Scalefort - Services" },
  { path: 'services/:id', component: ServiceDetailComponent, title: "Scalefort - Service Detail" },
  { path: '**', redirectTo: '' }
];
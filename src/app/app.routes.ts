import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MentorshipComponent } from './pages/mentorship/mentorship.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import {VouchersComponent } from './pages/vouchers/vouchers.component';
import { CommunityComponent } from './pages/community/community.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/services/service-detail.component';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Scalefort - Empowering Tech Careers" },
  { path: 'about', component: AboutComponent, title: "Scalefort - About" },
  { path: 'mentorship', component: MentorshipComponent, title: "Scalefort - Mentorship" },
  { path: 'resources', component: ResourcesComponent, title: "Scalefort - Resources" },
  { path: 'courses', component: CommunityComponent, title: "Scalefort - Courses" },
  { path: 'faq', component: FaqComponent, title: "Scalefort - FAQ" },
  { path: 'get-started', component: GetStartedComponent, title: "Scalefort - Register" },
  { path: 'bulk-vouchers', component: VouchersComponent, title: "Scalefort - Vouchers" },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: '**', redirectTo: '' }
];
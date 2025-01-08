import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MentorshipComponent } from './pages/mentorship/mentorship.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CommunityComponent } from './pages/community/community.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mentorship', component: MentorshipComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: '**', redirectTo: '' }
];
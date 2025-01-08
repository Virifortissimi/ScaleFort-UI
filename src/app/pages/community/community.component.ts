import { Component } from '@angular/core';
import { CommunityHeroComponent } from './components/community-hero.component';
import { CommunityEventsComponent } from './components/community-events.component';
import { CommunityForumComponent } from './components/community-forum.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityHeroComponent,
    CommunityEventsComponent,
    CommunityForumComponent
  ],
  template: `
    <div class="pt-16">
      <app-community-hero />
      <app-community-events />
      <app-community-forum />
    </div>
  `
})
export class CommunityComponent {}
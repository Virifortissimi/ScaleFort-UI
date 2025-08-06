import { Component } from '@angular/core';
import { MentorshipHeroComponent } from './components/mentorship-hero.component';
import { MentorshipProgramsComponent } from './components/mentorship-programs.component';
import { MentorshipProcessComponent } from './components/process/mentorship-process.component';

@Component({
  selector: 'app-mentorship',
  standalone: true,
  imports: [
    MentorshipHeroComponent,
    MentorshipProgramsComponent,
    MentorshipProcessComponent
  ],
  template: `
    <div>
      <app-mentorship-hero />
      <app-mentorship-programs />
      <app-mentorship-process />
    </div>
  `
})
export class MentorshipComponent {}
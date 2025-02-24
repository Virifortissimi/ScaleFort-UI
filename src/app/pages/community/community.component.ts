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
      

      <!-- Testimonials Section -->
      <section class="py-16 bg-gray-100">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-blue-600 mb-8">What Our Graduates Say</h2>
          <div class="space-y-6 text-lg text-gray-700">
            <div class="border p-6 rounded-md shadow-lg">
              <p class="italic">"Scalefort provided me with a solid foundation in programming, equipping me with the technical skills and knowledge I needed to thrive in the tech industry."</p>
              <p class="font-semibold mt-4">- Maureen O., Software Engineer, Sterling Bank</p>
            </div>
            <div class="border p-6 rounded-md shadow-lg">
              <p class="italic">"Scalefort was a game-changer for me. The structured learning, practical projects, and supportive mentors provided all I needed to transition into tech confidently."</p>
              <p class="font-semibold mt-4">- Samuel A., Dotnet Developer, Kaybill Technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class CommunityComponent {}
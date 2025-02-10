import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  description: string;
  logoUrl: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">About ScaleFort</h1>
          <p class="text-xl">Empowering Africa's Digital Revolution—One Tech User at a Time</p>
        </div>
      </section>

      <!-- Mission, Vision, and Values Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p class="text-gray-600">
                To empower African tech professionals and businesses with world-class technology solutions, 
                mentorship, and resources that drive innovation and growth.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <p class="text-gray-600">
                To be Africa's leading technology solutions provider, fostering a thriving tech ecosystem 
                that powers the continent's digital transformation.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold mb-4 text-blue-600">Our Values</h2>
              <ul class="space-y-2 text-gray-600">
                <li>• Excellence in Delivery</li>
                <li>• Innovation First</li>
                <li>• Client Success</li>
                <li>• Continuous Learning</li>
                <li>• Integrity & Trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

 
      <!-- Meet Our Founder Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Meet Our Founder</h2>
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <img 
                src="https://res.cloudinary.com/virifortissimi/image/upload/v1739177481/Goals/pl54vwgjnkvvghehonmg.jpg" 
                alt="Gabriel Eghosa" 
                class="rounded-lg shadow-lg w-full max-w-md mx-auto"
              >
            </div>
            <div class="md:w-1/2">
              <h3 class="text-2xl font-bold mb-4">Gabriel Eghosa – Transforming Business Through Technology</h3>
              <p class="text-gray-600 mb-6 text-lg">
                With over 5 years of experience in scaling African startups and a deep understanding of the continent's tech ecosystem, Eghosa founded ScaleFort with a vision to bridge the gap between technology and business growth in Africa.
              </p>
              <p class="text-gray-600 mb-6">
                Eghosa is a seasoned technology strategist and business consultant dedicated to empowering organizations in Africa and accross the Globe. With a career spanning over 5 years, Eghosa specializes in bridging the gap between cutting-edge technology and practical business solutions. His approach centers on delivering strategies that are not only innovative but also immediately implementable—prioritizing practical results over theoretical perfection.
              </p>
              
              <p class="text-gray-600 mb-6">Throughout his career, Eghosa has led numerous digital transformation initiatives, focusing on application development, cloud computing, and process re-engineering. He has consistently helped businesses streamline operations, optimize performance, and secure a competitive edge in rapidly evolving markets. His work in integrating technology solutions with business strategies has been pivotal in driving sustainable growth for clients in industries such as financial services, healthcare, telecommunications, and retail.</p>
              
              <p class="text-gray-600 mb-6">Prior to his current role, Eghosa held various leadership positions in prominent technology firms, where he honed his expertise in digital innovation and value management. He continues to contribute to the industry through speaking engagements, mentorship programs, and thought leadership.</p>
              
              <p class="text-gray-600 mb-6">Eghosa is passionate about helping businesses unlock the potential of digital transformation and looks forward to collaborating with forward-thinking organizations to shape the future of technology.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Partnerships Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Our Partnerships</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let partner of partners" class="bg-white p-6 rounded-lg shadow-md text-center">
              <img [src]="partner.logoUrl" [alt]="partner.name" class="h-16 mx-auto mb-4">
              <h3 class="text-xl font-semibold mb-2">{{ partner.name }}</h3>
              <p class="text-gray-600">{{ partner.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Responsibility Section -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Corporate Responsibility</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Tech Education Initiative</h3>
              <p class="text-gray-600">
                We're committed to providing free tech education and training to underserved communities 
                across Africa, empowering the next generation of tech leaders.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Environmental Sustainability</h3>
              <p class="text-gray-600">
                Our green computing initiatives and sustainable tech practices help reduce the environmental 
                impact of digital transformation.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Women in Tech Program</h3>
              <p class="text-gray-600">
                We actively support and promote gender diversity in tech through mentorship, training, 
                and employment opportunities for women.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4">Community Development</h3>
              <p class="text-gray-600">
                Through our tech solutions, we help local businesses digitize and scale, contributing to 
                economic growth in African communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  partners: Partner[] = [
    {
      name: 'Netlify',
      description: 'Cloud solutions partner for modern web development and seamless deployment.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180776/Goals/t1ijtk5ykcuwvkpf3t1b.png'
    },
    {
      name: 'Paystack',
      description: 'Trusted payment gateway and integration partner powering African businesses.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180775/Goals/w8iczdh6x5wr8f90f3fc.png'
    },
    {
      name: 'Whogohost',
      description: 'Reliable web hosting and cloud infrastructure partner, empowering online businesses.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180610/Goals/jvfxctfwkf33r73snbbg.png'
    },
    {
      name: 'Cloudinary',
      description: 'Visual content management partner offering powerful image and video optimization for fast, responsive websites.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180927/Goals/ctmznf0qrbcmklrscevr.png'
    },
    {
      name: 'Namecheap',
      description: 'Affordable domain registration and hosting partner, delivering reliable digital identity solutions.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180610/Goals/eddli7qf4na8aux510aw.svg'
    },
    {
      name: 'Cloudflare',
      description: 'Global CDN and security partner, protecting websites and accelerating performance.',
      logoUrl: 'https://res.cloudinary.com/virifortissimi/image/upload/v1739180775/Goals/sglpcs2fheyuyancqptu.png'
    }
  ];  
}
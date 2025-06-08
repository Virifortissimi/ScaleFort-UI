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
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-voucher',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Left Column: Full Image -->
          <div>
            <img
              src="https://res.cloudinary.com/virifortissimi/image/upload/v1740236571/Goals/toln56xdmv6swxowxfva.jpg"
              alt="Voucher Offerings"
              class="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <!-- Right Column: Text -->
          <div>
            <h2 class="text-3xl font-bold mb-4 text-blue-600">Bulk Voucher Offerings</h2>
            <p class="text-gray-600 text-lg mb-6">
              Our exclusive bulk voucher offering is tailored for organizational staff, community support groups, individuals who want to give back, and NGOs. Empower your team and community by purchasing vouchers in bulk.
            </p>
            <a
              routerLink="/vouchers"
              class="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              View Voucher Offerings
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeVoucherComponent {}

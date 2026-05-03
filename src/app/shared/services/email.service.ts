import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init(environment.emailJs.publicKey);
  }

  sendEmail(payload: { name: string; email: string; title: string; message: string }) {
    return emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        title: payload.title,
        time: new Date(),
      }
    );
  }
}

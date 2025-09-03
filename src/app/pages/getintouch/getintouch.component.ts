import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EmailService } from '../../shared/services/email.service';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetInTouchComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly emailService = inject(EmailService);
  formGroup!: FormGroup;
  loading = signal(false);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.loading.set(true);

    const { name, email, title, message } = this.formGroup.value;
    const payload = {
      name,
      email,
      title,
      message
    }
    
    this.emailService.sendEmail(payload)
      .then(() => {
        this.loading.set(false);
        
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Message sent successfully',
          life: 5000,
        });

        this.formGroup.reset();
      })
      .catch((err) => {
        this.loading.set(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Error',
          detail: 'Failed to send email. Please try again.',
          life: 5000,
        });
      });
  }
}

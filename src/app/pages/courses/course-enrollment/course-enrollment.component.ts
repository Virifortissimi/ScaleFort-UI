import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApplicationInquiryService } from '../../../shared/services/application-inquiry.service';
import { CourseInterest, DepartmentType, ICreateApplicationInquiry, ITServiceType, TopicType } from '../../../shared/models/application-inquiry.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { catchError, finalize, map, Observable, of, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
import { ReferralService } from '../../../shared/services/referral.service';
import { IUserDetails } from '../../../shared/models/authentication.model';

@Component({
  selector: 'app-course-enrollment',
  templateUrl: './course-enrollment.component.html',
  styleUrl: './course-enrollment.component.css'
})
export class CourseEnrollmentComponent implements OnInit, OnDestroy {

  private readonly _applicationInquiryService = inject(ApplicationInquiryService);
  private readonly _referralService = inject(ReferralService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly config = inject(DynamicDialogConfig); 
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly messageService = inject(MessageService);
  private readonly authService = inject(AuthService);
  
  departmentType = signal<DepartmentType | undefined>(undefined);
  courseInterest = signal<CourseInterest | undefined>(undefined);
  serviceType = signal<ITServiceType | undefined>(undefined);
  trainingTopic = signal<TopicType | undefined>(undefined);

  userDetails = signal<IUserDetails | null>(null);
  userSubscription!: Subscription;
  isLoading = signal(false);
  showPricePlans = signal(false);
  userEmail = signal<string | undefined>('');
  applicationId = signal<string | undefined>('');
  referralId = signal<string | undefined>('');
  formGroup!: FormGroup;

  ngOnInit(): void {
    const dialogData = this.config.data;
    if (dialogData) {
      this.departmentType.set(dialogData.departmentType);
      this.courseInterest.set(dialogData.courseInterest);
      this.serviceType.set(dialogData.serviceType);
      this.trainingTopic.set(dialogData.trainingTopic);
    }

    this.userSubscription = this.authService.userData$.subscribe(user => {
      this.userDetails.set(user);
    });
    
    this.initForm();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  } 

  initForm() {
    this.formGroup = this.formBuilder.group({
      companyName: [
        '', 
        this.departmentType() === DepartmentType.CorporateTraining ? Validators.required : []
      ],
      firstName: [this.userDetails()?.firstName || '', Validators.required],
      lastName: [this.userDetails()?.lastName || '', Validators.required],
      email: [this.userDetails()?.email || '', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d+$/)]],
      referralId: ['', null, [this.referralIdValidator()]],
      message: ['']
    })
  }

  referralIdValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }

      return this._referralService.referralIdExists(control.value).pipe(
        map(exists => (exists ? null : { referralIdNotFound: true })),
        catchError(() => of({ referralIdNotFound: true }))
      );
    };
  }

  submitEnrollment() {
    this.isLoading.set(true);

    const { value } = this.formGroup;
    const payload: ICreateApplicationInquiry = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phoneNumber,
      departmentType: this.departmentType() as DepartmentType,
      referralId: value.referralId,
      message: value.message
    }

    if(this.departmentType() === DepartmentType.TechSchool) {
      payload.courseInterest = this.courseInterest() as CourseInterest;
    }

    if(this.departmentType() === DepartmentType.ITServices) {
      payload.serviceType = this.serviceType() as ITServiceType;
    }

    if(this.departmentType() === DepartmentType.CorporateTraining) {
      payload.companyName = value.companyName;
      payload.trainingTopic = this.trainingTopic() as TopicType;
    }

    this._applicationInquiryService
      .createApplicationInquiry(payload)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (res) => {
          if(this.departmentType() === DepartmentType.ITServices) {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Application successful',
              life: 5000,
            });
            this.closeDialog();
          } else {
            this.userEmail.set(payload.email);
            this.applicationId.set(res.id);
            this.referralId.set(payload.referralId);
            this.showPricePlans.set(true);
            this.config.width = '60vw';
          }
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Enrollment error',
            detail: error || 'Something went wrong',
            life: 5000,
          });
        },
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

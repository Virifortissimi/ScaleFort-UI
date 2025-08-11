import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { PythonComponent } from './subpage/python.component';
import { DotnetComponent } from './subpage/dotnet.component';
import { DataAnalysisComponent } from './subpage/data-analysis.component';
import { CloudComponent } from './subpage/cloud.component';
import { FrontendComponent } from './subpage/frontend.component';
import { DisplayCoursesComponent } from './display-courses.component';
import { DialogService } from 'primeng/dynamicdialog';
import { CourseEnrollmentComponent } from './course-enrollment/course-enrollment.component';
import { PricePlanComponent } from './price-plan/price-plan.component';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: '', component: DisplayCoursesComponent, title: "Scalefort - Courses" },
      { path: 'python', component: PythonComponent, title: "Scalefort - Python" },
      { path: 'dotnet', component: DotnetComponent, title: "Scalefort - Dotnet" },
      { path: 'data-analyst', component: DataAnalysisComponent, title: "Scalefort - Data Analyst" },
      { path: 'cloud-computing', component: CloudComponent, title: "Scalefort - Cloud Computing" },
      { path: 'frontend', component: FrontendComponent, title: "Scalefort - Frontend" },
    ],
  },
];

@NgModule({
  declarations: [
    CoursesComponent,
    DisplayCoursesComponent,
    PythonComponent,
    DotnetComponent,
    DataAnalysisComponent,
    CloudComponent,
    FrontendComponent,
    CourseEnrollmentComponent,
    PricePlanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule
  ],
  exports: [RouterModule],
  providers: [
    DialogService,
  ]
})
export class CoursesModule { }

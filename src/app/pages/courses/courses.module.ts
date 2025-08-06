import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { PythonComponent } from './subpage/python.component';
import { DotnetComponent } from './subpage/dotnet.component';
import { DataAnalysisComponent } from './subpage/dataanalysis.component';
import { CloudComponent } from './subpage/cloud.component';
import { FrontendComponent } from './subpage/frontend.component';
import { DisplayCoursesComponent } from './display-courses.component';

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
    FrontendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CoursesModule { }

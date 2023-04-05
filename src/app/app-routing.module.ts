import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HacksLoginComponent } from './hacks-login/hacks-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddingCourseComponent } from './adding-course/adding-course.component';
import { CourseTitleNameComponent } from './course-title-name/course-title-name.component';
import { AddIntroductionComponent } from './add-introduction/add-introduction.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CpaDashboardComponent } from './cpa-dashboard/cpa-dashboard.component';
import { VideoUploadContentComponent } from './video-upload-content/video-upload-content.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'all-customer',
    component: AllCustomerComponent,
  },

  {
    path: 'video-upload-content',
    component: VideoUploadContentComponent,
  },
    {
    path: 'cpa-dashboard',
    component: CpaDashboardComponent,
  },
  {
    path: 'adding-course',
    component: AddingCourseComponent,
  }, 
  {
    path: 'edit-course/:id',
    component: EditCourseComponent,
  },
     {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
  },   
   {
    path: 'add-introduction',
    component: AddIntroductionComponent,
  },  
   {
    path: 'course-title-name/:id',
    component: CourseTitleNameComponent,
  }, 
  
  {
    path: '**', component: HacksLoginComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

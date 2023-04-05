import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HacksLoginComponent } from './hacks-login/hacks-login.component';
import { LoginService } from './Service/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddingCourseComponent } from './adding-course/adding-course.component';
import { CourseTitleNameComponent } from './course-title-name/course-title-name.component';
import { AddIntroductionComponent } from './add-introduction/add-introduction.component';
import { AllIntroductionComponent } from './all-introduction/all-introduction.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CpaDashboardComponent } from './cpa-dashboard/cpa-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { VideoUploadContentComponent } from './video-upload-content/video-upload-content.component';
import { AllCustomerComponent } from './all-customer/all-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HacksLoginComponent,
    DashboardComponent,
    AddingCourseComponent,
    CourseTitleNameComponent,
    AddIntroductionComponent,
    AllIntroductionComponent,
    EditCourseComponent,
    EditCategoryComponent,
    CpaDashboardComponent,
    VideoUploadContentComponent,
    AllCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

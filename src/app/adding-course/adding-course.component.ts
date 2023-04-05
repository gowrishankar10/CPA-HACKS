import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddCourse } from '../Model/hacks.model';
import { LoginService } from '../Service/login.service';
@Component({
  selector: 'app-adding-course',
  templateUrl: './adding-course.component.html',
  styleUrls: ['./adding-course.component.css'],
})
export class AddingCourseComponent implements OnInit {
  constructor(
    private LoginService: LoginService,
     private Router: Router 
    ) {}

  courseName: any;
  createdBy: any;

  ngOnInit(): void {}

  onSubmit() {
    let submitModel: AddCourse = {
      courseName: this.courseName,
      createdBy: this.createdBy,
    };
    this.LoginService.AddCourses(submitModel).subscribe((res: any) => {
      console.log(res);

if(res.flag===1)
{
  this.Router.navigateByUrl('/dashboard')
}
    });
  }
}

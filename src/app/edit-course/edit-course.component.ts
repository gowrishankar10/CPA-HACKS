import { EditCourse } from './../Model/hacks.model';
import { Component } from '@angular/core';
import { AddCourse } from '../Model/hacks.model';
import { LoginService } from '../Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  constructor(
    private LoginService: LoginService,
     private Router: Router ,private ActivatedRoute :ActivatedRoute,
    ) {}
    Courseid:any;

  courseName: any;
  modifiedBy: any;

  ngOnInit(): void { 
     this.ActivatedRoute.queryParams.subscribe((param: any) => {
    this.Courseid = param.courseid;
    console.log('course ' + this.Courseid);
    console.log();
    
  });}

  onSubmit() {
    let submitModel: EditCourse = {
      courseName: this.courseName,
      modifiedBy: this.modifiedBy,
    };
    this.LoginService.editCourses( this.Courseid,submitModel).subscribe((res: any) => {
      console.log(res);

if(res.flag===1)
{
  this.Router.navigateByUrl('/dashboard')
}
    });
  }
}


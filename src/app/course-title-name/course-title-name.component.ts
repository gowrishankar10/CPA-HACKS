import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { titleName } from '../Model/hacks.model';
@Component({
  selector: 'app-course-title-name',
  templateUrl: './course-title-name.component.html',
  styleUrls: ['./course-title-name.component.css'],
})
export class CourseTitleNameComponent {
  constructor(private LoginService: LoginService, private router: Router,private activeRouter:ActivatedRoute) {}
  getAllCourse: any;
  courseName: any;
  createdBy: any;
  course:any;
  Courseid:any;
  ngOnInit(): void {

    this.activeRouter.queryParams.subscribe((param: any) => {
      this.Courseid = param.courseid;
      console.log('course ' + this.Courseid);
    });
    this.LoginService.introgetall().subscribe((res: any) => {
      this.getAllCourse = res.response;
      console.log(res);
    });
  }

  videocontent()
  {
    this.router.navigate([`/video-upload-content`], {
      queryParams: { courseId: this.Courseid },
    });
  }

  titleName() {
    this.router.navigate([`/add-introduction`], {
      queryParams: { courseId: this.Courseid },
    });
    console.log(this.Courseid)
  }




  AddCourseRoute() {
    this.router.navigate([`/add-introduction`], {
      queryParams: { courseId: this.Courseid },
    });
    console.log(this.Courseid)

  }
  editCategory(id:string)
  {
   this.router.navigate([`/edit-category/${id}`], {
     queryParams: { courseid: id },
     
   });
  }
  onSubmit() {}
}

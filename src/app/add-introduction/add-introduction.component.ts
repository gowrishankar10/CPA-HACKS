import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { titleName } from '../Model/hacks.model';
@Component({
  selector: 'app-add-introduction',
  templateUrl: './add-introduction.component.html',
  styleUrls: ['./add-introduction.component.css']
})
export class AddIntroductionComponent {
  constructor(
    private LoginService: LoginService,
     private Router: Router ,
     private activeRouter : ActivatedRoute
    ) {}

  courseName: any;
  createdBy: any;

  Courseid:any;

  ngOnInit(): void {
  this.activeRouter.queryParams.subscribe((param: any) => {
    this.Courseid = param.courseId;
    console.log('Course id ' + this.Courseid);
  });
}
  onSubmit() {
    let submitModel: titleName = {
      titleName: this.courseName,
      createdBy: this.createdBy,
      courseId: this.Courseid,
    };
    this.LoginService.postCategorys(submitModel).subscribe((res: any) => {
      console.log(res);

if(res.flag===1)
{
  this.Router.navigateByUrl('/course-title-name')
}
    });
  }
}

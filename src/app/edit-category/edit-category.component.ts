import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditCategory, titleName } from '../Model/hacks.model';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  constructor(
    private LoginService: LoginService,
    private Router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  courseName: any;
  createdBy: any;

  Courseid: any;

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((param: any) => {
      this.Courseid = param.courseid;
      console.log('Course id ' + this.Courseid);
    });
  }
  onSubmit() {
    let submitModel: EditCategory = {
      titleName: this.courseName,
      modifiedBy: this.createdBy,
   
    };
    this.LoginService.editCategory(this.Courseid, submitModel).subscribe(
      (res: any) => {
        console.log(res);

        if (res.flag === 1) {
          this.Router.navigateByUrl('/dashboard');
        }
      }
    );
  }
}

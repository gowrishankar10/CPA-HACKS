import { Router } from '@angular/router';
import { AddCourse } from './../Model/hacks.model';
import { LoginService } from './../Service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 constructor( private LoginService:LoginService ,private router:Router ){}
 getAllCourse:any;
 courseName:any;
 createdBy:any;
 ngOnInit(): void {
    this.LoginService.getall().subscribe((res:any)=>{
      this.getAllCourse = res.response;
      console.log(res)
    }) 
 } 

 AddCourseRoute()
 {
  this.router.navigateByUrl('/adding-course')
 }

 titleName(id: string){
  console.log("myid : "+id)
  this.router.navigate([`/course-title-name/${id}`], {
    queryParams: { courseid: id },
    
  });
 }
 editcourse(id:string)
 {
  this.router.navigate([`/edit-course/${id}`], {
    queryParams: { courseid: id },
    
  });
 }


}

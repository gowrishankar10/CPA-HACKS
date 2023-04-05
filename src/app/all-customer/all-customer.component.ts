import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent {
  constructor( private LoginService:LoginService ,private router:Router ){}
  getAllCourse:any;
  courseName:any;
  createdBy:any;
  ngOnInit(): void {
     this.LoginService.getallusers().subscribe((res:any)=>{
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
 
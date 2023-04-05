import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AddCourse,
  EditCategory,
  EditCourse,
  titleName,
} from '../Model/hacks.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  //manimegala server : http://192.168.1.157:8080/       admin/login
  //cloud server :     http://157.245.105.135:8080/apt/  admin/login

  private readonly basePath = 'http://192.168.1.157:8081/'; //[BASEPATH]

  // private readonly basePath = 'http://157.245.105.135:8080/apt/'; //[BASEPATH]

  private readonly loginPatah = 'admin/login'; //[LOGIN]

  private readonly AddCourse = 'course/addcourse'; //[LOGIN]

  private readonly EditCourse = 'course/update/'; //[LOGIN]

  private readonly getallCourse = 'course/getall';

  private readonly postCategory = 'postcategory/addcategory';

  private readonly getCategory = 'postcategory/getallcategory';

  private readonly EditCategory = 'postcategory/update/';

  private  readonly AllUser = 'admin/getallusers'

  loginError = new Subject();

  token = localStorage.getItem('token') || null;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    X_ACCESS_TOKEN: `Bearer ${
      this.token ? JSON.parse(localStorage.getItem('token') || '') : null
    }`,
  });

  options = { headers: this.headers };

  login(email: string, password: string) {
    const credentialBody = {
      email: email,
      password: password,
    };
    return this.http
      .post(`${this.basePath}${this.loginPatah}`, credentialBody)
      .subscribe((res: any) => {
        
        
        if (res.flag == 1) {
          
          localStorage.setItem('name', JSON.stringify(res.response.userName));
          
          localStorage.setItem(
            'token',
            JSON.stringify(res.response.jwtResponse.X_ACCESS_TOKEN)
          );
          

          location.href = 'dashboard';
        } else {
          this.loginError.next(res.message);
        }
      });
  }

  AddCourses(model: AddCourse) {
    return this.http.post( 
      `${this.basePath}${this.AddCourse}`,
      model,
      this.options
    );
  }
  editCourses(id: string, model: EditCourse) {
    return this.http.put(
      `${this.basePath}${this.EditCourse}${id}`,
      model,
      this.options
    );
  }
  editCategory(id: string, model: EditCategory) {
    return this.http.put(
      `${this.basePath}${this.EditCategory}${id}`,
      model,
      this.options
    );
  }
  postCategorys(model: titleName) {
    return this.http.post(
      `${this.basePath}${this.postCategory}`,
      model,
      this.options
    );
  }

  getallusers() {
    return this.http.get(`${this.basePath}${this.AllUser}`, this.options);
  }

  getall() {
    return this.http.get(`${this.basePath}${this.getallCourse}`, this.options);
  }
  introgetall() {
    return this.http.get(`${this.basePath}${this.getCategory}`, this.options);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  // Login method Define
  login() {
    this._http.get<any>("http://localhost:3000/signup").subscribe((res: any[]) => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Log is Successfull");
        this.loginForm.reset();
        this.router.navigate(['/restaurant-dash'])
      } else {
        alert("User Not Found!!!");
      }
    }, (err: any) => {
      alert("Something is Wrong");
    }
    )
  }
}

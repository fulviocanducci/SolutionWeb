import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]  
    });    
  }

  login() {    
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      this.authService.authenticate(email, password)
        .subscribe(
          data => {
            if (data.authenticated === 1) {
              this.router.navigate(['admin/home']);
            }
          }, 
          err => console.log(err)
        );
    }
    return false;
  }

}

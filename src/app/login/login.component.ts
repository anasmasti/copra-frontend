import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyAuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(null,[
      Validators.required,
      Validators.email]),
    password : new FormControl(null,[
      Validators.required,Validators.minLength(6),
      ])
  })
  fieldTextType: any;
  loginmsgerr: any;
  errormsg:any;
  constructor(private toastr: ToastrService,public formBuilder: FormBuilder,
    public authService: MyAuthService,
    public router: Router) {}

  ngOnInit() {}
  
  loginUser() {this.authService.login(this.loginForm.value).then((msgerr) => { this.errormsg = msgerr})}
 
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  
  showpassword() {
    this.fieldTextType = !this.fieldTextType;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MyAuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    nom:new FormControl(null,[
      Validators.required,
      Validators.minLength(2)]),
    prenom: new FormControl(null,[
      Validators.required,
      Validators.minLength(2)]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email]),
    password: new FormControl(null,[
      Validators.required,
      Validators.minLength(6)]),
    confirmepassword: new FormControl(null,[
      Validators.required, this.checkPasswords]),
    telephone:new FormControl(null,[
      Validators.required,
      Validators.pattern(new RegExp("[0-9]{10}"))]),
    sexe:new FormControl(null,[
      Validators.required,]),
    ville: new FormControl(null,[
      Validators.required,]),
    codepostal : new FormControl(null,[
      Validators.required,]),
    addressedelivraison:new FormControl(null,[
      Validators.required,]),
  })

  constructor(private toastr: ToastrService, public formBuilder: FormBuilder,
    public authService: MyAuthService,
    public router: Router,) {}

  ngOnInit() {
  }
  registerUser() {
    this.authService.register(this.registerForm.value).subscribe(() => {
        this.registerForm.reset()
        this.router.navigate(['login']);
        this.toastr.success('Votre compte à été creé avec success', 'Merci !');

    })
  }
  checkPasswords(input: FormControl) { 
    if (input.parent) {
     let pass = input.parent.get('password');
    if (pass.value != "" && input.value != "" ) {
      if (pass.value !== input.value) {
       return { notSame: true }
      }else{ return null }}}}

 get nom() { return this.registerForm.get('nom'); }
 get prenom() { return this.registerForm.get('prenom'); }
 get email() { return this.registerForm.get('email'); }
 get password() { return this.registerForm.get('password'); }
 get confirmepassword() { return this.registerForm.get('confirmepassword'); }
 get telephone() { return this.registerForm.get('telephone'); }
 get sexe() { return this.registerForm.get('sexe'); }
 get ville() { return this.registerForm.get('ville'); }
 get codepostal() { return this.registerForm.get('codepostal'); }
 get addressedelivraison() { return this.registerForm.get('addressedelivraison'); }

}

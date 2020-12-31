import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MyAuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userresetpasswordForm = new FormGroup({
    password: new FormControl(null,[
      Validators.required,  Validators.minLength(6)]),
    confirmpassword: new FormControl(null,[
      Validators.required, this.checkPasswords]),
  })
  fieldTextType2: boolean;
  fieldTextType: boolean;
  constructor(private toastr: ToastrService,
    public sauthService: MyAuthService,
    private activatedRoute: ActivatedRoute,public router: Router) { }

  ngOnInit() {
  
  }

  updatepassword(){
    let userid = this.activatedRoute.snapshot.paramMap.get('userid');
    this.sauthService.updateUserPassword(userid,{ password : this.userresetpasswordForm.get('password').value, confirmepassword : this.userresetpasswordForm.get('confirmpassword').value, })
    .subscribe(()=>{
      this.router.navigate(['/login'])
      this.toastr.success("Mot de passe modifié", 'Modification!', {
        timeOut: 3000,positionClass: 'toast-top-right'
      });})
  
  }

  showpassword() {
    this.fieldTextType = !this.fieldTextType;
  }
  
  showcofirmpassword() {
    this.fieldTextType2 = !this.fieldTextType2;
  }

  checkPasswords(input: FormControl) { 
    if (input.parent) {
     let pass = input.parent.get('password');
    if (pass.value != "" && input.value != "" ) {
      if (pass.value !== input.value) {
       return { notSame: true }
      }else{ return null }}}}

 get password() { return this.userresetpasswordForm.get('password'); }
 get confirmpassword() { return this.userresetpasswordForm.get('confirmpassword'); }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyAuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  sendemailforresetpasswordForm = new FormGroup({
    email : new FormControl(null,[
      Validators.required,
      Validators.email]),
  })
  msgerr: any;
  constructor( public authService: MyAuthService,public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
   
  }
  sendemailforresetpassword(){
   return this.authService.sendemailforresetpassword(this.sendemailforresetpasswordForm.value)
    .subscribe(()=>{
      this.router.navigate(['/'])
      this.toastr.success('le lien de récupération a été envoyé à votre boîte aux lettres', 'Lien de  récupération envoyé', {
        timeOut: 3000,})
    },(error) => {this.msgerr = error.error})
  }

 get email() { return this.sendemailforresetpasswordForm.get('email'); }

}

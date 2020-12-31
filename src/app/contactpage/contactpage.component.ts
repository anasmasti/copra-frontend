import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  contactForm = new FormGroup({
    nom: new FormControl(null,[
      Validators.required,
      Validators.minLength(2)]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email]),
    phone: new FormControl(null,[
      Validators.required,
      Validators.pattern(new RegExp("[0-9]{10}"))]),
    message: new FormControl(null,[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)]),
  })
  constructor(private contactservice: ContactService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  contactUs(){
    this.contactservice.sendMessage({
      nom:this.contactForm.get('nom').value,
      email:this.contactForm.get('email').value,
      phone:this.contactForm.get('phone').value,
      message:this.contactForm.get('message').value,
    }).subscribe(() => {
      this.contactForm.reset();
      this.toastr.success("Merci de nous avoir contacter", 'Merci !', {
        timeOut: 3000,positionClass: 'toast-top-right'
      });
    })
  }

  get nom() { return this.contactForm.get('nom'); }
  get phone() { return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}

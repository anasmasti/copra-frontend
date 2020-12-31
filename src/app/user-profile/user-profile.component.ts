import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  fetchorderdetail;
  onlineUser: any;
  orderdetail: any;
  ordersdetailnotfound: boolean = false;
  valid: boolean = false;
  livre: boolean = false;
  recup: boolean = false;
  p;
  pa;
  shortDate;
  userinfoForm = new FormGroup({
    nom: new FormControl(null,[Validators.minLength(2)]),
    prenom: new FormControl(null,[Validators.minLength(2)]),
    telephone: new FormControl(null,[Validators.pattern(new RegExp("[0-9]{10}"))]),
    type: new FormControl(),
    email: new FormControl(null,[Validators.email]),
    sexe:  new FormControl(),
    codepostal: new FormControl(),
    ville: new FormControl(),
    addressedelivraison:  new FormControl(),
  })
  useradresseForm = new FormGroup({
    nom2: new FormControl(),
    prenom2: new FormControl(),
    telephone2: new FormControl(),
    type2: new FormControl(),
    codepostal2: new FormControl(),
    email2: new FormControl(),
    sexe2:  new FormControl(),
    ville2: new FormControl(),
    addressedelivraison2:  new FormControl(),
  })
  userpasswordForm = new FormGroup({
    password: new FormControl(null,[
      Validators.required,  Validators.minLength(6)]),
    confirmpassword: new FormControl(null,[
      Validators.required, this.checkPasswords]),
  })
  userpass: any;
  fieldTextType: boolean;
  fieldTextType2: boolean;
  constructor(private toastr: ToastrService,public orderserv: OrderService,
    public sauthService: MyAuthService,
    private activatedRoute: ActivatedRoute ){}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sauthService.getUserProfile(id).subscribe(data => {
      this.onlineUser = data;
    })
    this.orderserv.getordersdetail(id).subscribe((data)=>{
      this.orderdetail = data

      if(this.orderdetail == null || this.orderdetail.length == 0){
        this.ordersdetailnotfound = true}
    })
  }

  updatepassword(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sauthService.updateUserPassword(id,{ password : this.userpasswordForm.get('password').value, confirmepassword : this.userpasswordForm.get('confirmpassword').value, }).subscribe((data)=>{this.onlineUser = data
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

  updateuserinfo(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    const nom = $("#nom").val();
    const prenom = $("#prenom").val();
    const telephone = $("#telephone").val();
    const type = $("#type").val();
    const email = $("#email").val();
    const sexe = $("#sexe").val();
    const ville = $("#ville").val();
    const addressedelivraison = $("#addressedelivraison").val();
    this.userinfoForm.get('nom').setValue(nom);
    this.userinfoForm.get('prenom').setValue(prenom);
    this.userinfoForm.get('telephone').setValue(telephone);
    this.userinfoForm.get('type').setValue(type);
    this.userinfoForm.get('email').setValue(email);
    this.userinfoForm.get('sexe').setValue(sexe);
    this.userinfoForm.get('ville').setValue(ville);
    this.userinfoForm.get('addressedelivraison').setValue(addressedelivraison);
    const data = {
      nom: this.userinfoForm.get('nom').value,
      prenom: this.userinfoForm.get('prenom').value,
      telephone: this.userinfoForm.get('telephone').value,
      type:  this.userinfoForm.get('type').value,
      email: this.userinfoForm.get('email').value,
      sexe: this.userinfoForm.get('sexe').value,
      ville: this.userinfoForm.get('ville').value,
      addressedelivraison: this.userinfoForm.get('addressedelivraison').value,}
      this.sauthService.updateUserProfile(id,data).subscribe((data)=>{this.onlineUser = data;
        this.toastr.success("Tes informations sont modifiées", 'Modification!', {
          timeOut: 3000,positionClass: 'toast-top-right'
        })})
  }

  updateuseradresse(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    const nom2 = $("#nom2").val();
    const prenom2 = $("#prenom2").val();
    const telephone2 = $("#telephone2").val();
    const type2 = $("#type2").val();
    const email2 = $("#email2").val();
    const sexe2 = $("#sexe2").val();
    const codepostal2 = $("#codepostal2").val();
    const ville2 = $("#ville2").val();
    const addressedelivraison2 = $("#addressedelivraison2").val();
    this.useradresseForm.get('nom2').setValue(nom2);
    this.useradresseForm.get('prenom2').setValue(prenom2);
    this.useradresseForm.get('telephone2').setValue(telephone2);
    this.useradresseForm.get('type2').setValue(type2);
    this.useradresseForm.get('email2').setValue(email2);
    this.useradresseForm.get('sexe2').setValue(sexe2);
    this.useradresseForm.get('codepostal2').setValue(codepostal2);
    this.useradresseForm.get('ville2').setValue(ville2);
    this.useradresseForm.get('addressedelivraison2').setValue(addressedelivraison2);
    const data2 = {
      nom: this.useradresseForm.get('nom2').value,
      prenom: this.useradresseForm.get('prenom2').value,
      telephone: this.useradresseForm.get('telephone2').value,
      type:  this.useradresseForm.get('type2').value,
      email: this.useradresseForm.get('email2').value,
      sexe: this.useradresseForm.get('sexe2').value,
      codepostal: this.useradresseForm.get('codepostal2').value,
      ville: this.useradresseForm.get('ville2').value,
      addressedelivraison: this.useradresseForm.get('addressedelivraison2').value,}
    this.sauthService.updateUserProfile(id,data2).subscribe((data)=>{ this.onlineUser = data;
      this.toastr.success("L'adresse de livraison est modifié", 'Modification!', {
        timeOut: 3000,positionClass: 'toast-top-right'
      })})
  }

  fetchOrderDetail(id){
     this.orderserv.fetchorderdetail(id).subscribe(data=> this.fetchorderdetail = data)
  }

  get password() { return this.userpasswordForm.get('password'); }
  get confirmpassword() { return this.userpasswordForm.get('confirmpassword'); }
  get nom() { return this.userinfoForm.get('nom'); }
  get prenom() { return this.userinfoForm.get('prenom'); }
  get telephone() { return this.userinfoForm.get('telephone'); }
  get email() { return this.userinfoForm.get('email'); }
}

import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  onlineUser: Object = {};
  orderdetail: any;
  ordersdetailnotfound: boolean = false;
  valid: boolean = false;
  livre: boolean = false;
  recup: boolean = false;
  userinfoForm = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    telephone: new FormControl(),
    type: new FormControl(),
    email: new FormControl(),
    sexe:  new FormControl(),
    ville: new FormControl(),
    addressedelivraison:  new FormControl(),
  })
  useradresseForm = new FormGroup({
    nom2: new FormControl(),
    prenom2: new FormControl(),
    telephone2: new FormControl(),
    type2: new FormControl(),
    email2: new FormControl(),
    sexe2:  new FormControl(),
    ville2: new FormControl(),
    addressedelivraison2:  new FormControl(),
  })
  userpasswordForm = new FormGroup({
    password: new FormControl(),
  })
  userpass: any;
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
    this.sauthService.updateUserPassword(id,{ password : this.userpasswordForm.get('password').value}).subscribe((data)=>{this.onlineUser = data;
      this.toastr.success("Mot de passe modifié", 'Modification!', {
        timeOut: 3000,positionClass: 'toast-top-right'
      });})
  
  }

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
    const ville2 = $("#ville2").val();
    const addressedelivraison2 = $("#addressedelivraison2").val();
    this.useradresseForm.get('nom2').setValue(nom2);
    this.useradresseForm.get('prenom2').setValue(prenom2);
    this.useradresseForm.get('telephone2').setValue(telephone2);
    this.useradresseForm.get('type2').setValue(type2);
    this.useradresseForm.get('email2').setValue(email2);
    this.useradresseForm.get('sexe2').setValue(sexe2);
    this.useradresseForm.get('ville2').setValue(ville2);
    this.useradresseForm.get('addressedelivraison2').setValue(addressedelivraison2);
    const data2 = {
      nom: this.useradresseForm.get('nom2').value,
      prenom: this.useradresseForm.get('prenom2').value,
      telephone: this.useradresseForm.get('telephone2').value,
      type:  this.useradresseForm.get('type2').value,
      email: this.useradresseForm.get('email2').value,
      sexe: this.useradresseForm.get('sexe2').value,
      ville: this.useradresseForm.get('ville2').value,
      addressedelivraison: this.useradresseForm.get('addressedelivraison2').value,}
    this.sauthService.updateUserProfile(id,data2).subscribe((data)=>{ this.onlineUser = data;
      this.toastr.success("L'adresse de livraison est modifié", 'Modification!', {
        timeOut: 3000,positionClass: 'toast-top-right'
      })})
  }
}

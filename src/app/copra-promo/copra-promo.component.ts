import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MyAuthService } from '../services/auth.service';
import { CurrentUser } from '../models/user.model';

@Component({
  selector: 'app-copra-promo',
  templateUrl: './copra-promo.component.html',
  styleUrls: ['./copra-promo.component.css']
})
export class CopraPromoComponent implements OnInit {
  probycoprapromo: any;
  isLoggedIn: boolean;
  currentuser: any;
  p;
  constructor(private myserv: ProductService, private myauthService: MyAuthService) { }

  ngOnInit() {
    const defaultuc:  CurrentUser = { 
      _id:'5f27c0f6ad80c631c856597c',
      nom:"user",
      prenom:"user",}
    this.myserv.getprodbycoprapromo().subscribe(data => {this.probycoprapromo = data;})
    if (this.myauthService.isLoggedIn()) {
      this.isLoggedIn = true
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
     } 
     if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = defaultuc}
    }
  }



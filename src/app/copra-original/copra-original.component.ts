import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MyAuthService } from '../services/auth.service';
import { CurrentUser } from '../models/user.model';

@Component({
  selector: 'app-copra-original',
  templateUrl: './copra-original.component.html',
  styleUrls: ['./copra-original.component.css']
})
export class CopraOriginalComponent implements OnInit {
  probycopraoriginal: any;
  isLoggedIn: any;
  currentuser: any;

  constructor(private myserv: ProductService, private myauthService: MyAuthService) { }

  ngOnInit() {
    const defaultuc:  CurrentUser = { 
      _id:'5f27c0f6ad80c631c856597c',
      nom:"user",
      prenom:"user",}
    this.myserv.getprodbycopraoriginal().subscribe(data => {this.probycopraoriginal = data;}) 
     if (this.myauthService.isLoggedIn()) {
    this.isLoggedIn = true
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
   } 
   if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = defaultuc}
  }
  }




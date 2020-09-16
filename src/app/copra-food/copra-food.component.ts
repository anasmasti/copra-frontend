import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MyAuthService } from '../services/auth.service';
import { CurrentUser } from '../models/user.model';

@Component({
  selector: 'app-copra-food',
  templateUrl: './copra-food.component.html',
  styleUrls: ['./copra-food.component.css']
})
export class CopraFoodComponent implements OnInit {
  probycoprafood: any;
  isLoggedIn: any;
  currentuser: CurrentUser;

  constructor(private myserv: ProductService, private myauthService: MyAuthService) { }

  ngOnInit() {  
    const defaultuc:  CurrentUser = { 
      _id:'5f27c0f6ad80c631c856597c',
      nom:"user",
      prenom:"user",}
    this.myserv.getprodbycoprafood().subscribe(data => {this.probycoprafood = data;})
      if (this.myauthService.isLoggedIn()) {
    this.isLoggedIn = true
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
   } 
   if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = defaultuc}
  }

  }


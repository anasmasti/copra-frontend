import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../models/user.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  currentuser;
  productsearch;
  search = "";
  isempty = false;
  values: string;
  p;
  p2;
  
  constructor(private http: HttpClient, private myauthService: MyAuthService, private prodserv: ProductService) { }
  contentLoaded = false;
  isLoggedIn = false;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "dots": false,
    "autoplay": true,
    "arrows" : false,
    "autoplaySpeed": 4000,};
    slideConfig2 = {
      "slidesToShow": 7,
      "slidesToScroll": 1,
      "infinite": true,
      "dots": false,
      "autoplay": true,
      "arrows" : false,
      "autoplaySpeed": 2000,};
  ngOnInit() {
    const defaultuc:  CurrentUser = { 
      _id:'5f27c0f6ad80c631c856597c',
      nom:"user",
      prenom:"user",}
    setTimeout(() => {
      this.contentLoaded = true;
    }, 1000);
    if (this.search === "") {this.isempty = true;}
    this.prodserv.getproducts().subscribe(data => {
      this.productsearch = data
    })

   if (this.myauthService.isLoggedIn()) {
    this.isLoggedIn = true
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
   } 
   if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = defaultuc}
  }

  onKey(event: any) {
    this.values = event.target.value ;
    if (this.values != null){ this.isempty = false;}
    if (this.values === ""){ this.isempty = true;}
   
  }
}

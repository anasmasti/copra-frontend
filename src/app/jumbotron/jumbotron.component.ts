import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../models/user.model';
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  currentuser;
  productsearch;
  search = "";
  isempty = true;
  values: string;
 
  
  constructor(private http: HttpClient, private myauthService: MyAuthService, public authService: MyAuthService) { }
  contentLoaded = false;
  isLoggedIn = false;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "dots": false,
    "autoplay": true,
    "arrows" : false,
    "autoplaySpeed": 2000,};
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
    if (this.search != "") {this.isempty = false;}
    this.http.get<any>('http://localhost:5000/api/products').subscribe(data => {
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

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { MyAuthService } from '../services/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // loadAPI: Promise<any>; 
  url = "assets/js/myjs.js";
  products : Product[] = [] ;
  isLoggedIn = false;
  currentuser;
  constructor(private productservice: ProductService,public authService: MyAuthService,  private router: Router ) { }
 
   slideConfig = {
      "slidesToShow": 4,
      "slidesToScroll": 1,
      "infinite": true,
      "initialSlide": 0,
      "dots": true,
      "arrows": true,
      "autoplay": true,
      "autoplaySpeed": 2000,};
  ngOnInit() {
      // this.loadAPI = new Promise(resolve => {
      // this.loadScript();});

      this.productservice.getproducts().subscribe( data => {
      this.products = data;
      })

      if (this.authService.isLoggedIn()) {
        this.isLoggedIn = true  
        this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
       } 
       if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
  }
  


  // public loadScript() {
  //     let node = document.createElement("script");
  //     node.src = this.url;
  //     node.type = "text/javascript";
  //     node.async = true;
  //     node.charset = "utf-8";
  //     document.getElementsByTagName("head")[0].appendChild(node);
  // }

}

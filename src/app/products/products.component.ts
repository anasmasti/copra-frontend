import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loadAPI: Promise<any>; 
  url = "assets/js/myjs.js";

  constructor(private productservice: ProductService ) { }
  products;
  ngOnInit() {
      //load mw js file
      this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();});


     
      this.productservice.getproducts().subscribe( data => {
        this.products = data;
      })

   

  }

  public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
  }

}

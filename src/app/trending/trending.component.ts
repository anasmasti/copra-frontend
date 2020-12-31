import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  products;
  isLoggedIn: boolean;
  currentuser: any;

  constructor(private toastr: ToastrService,  private orderservice: OrderService, private prodserv: ProductService, private http: HttpClient, public authService: MyAuthService) { }

  ngOnInit() {
      this.prodserv.gettrendproducts().subscribe((data) => {
      this.products = data;})

      if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true  
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
      } 
      if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
      }

  addorder() {
    if (this.authService.isLoggedIn()) {
      const myuser = $("#myuser").val();
      const myproduct = $("#myproduct").val();
      const myquantity = $("#myquantity").val();
      this.orderservice.addtocart({
        user: myuser,
        product: myproduct,
        quantity: myquantity,
       }).subscribe();
      this.toastr.success("il est au panier :)", 'Merci', {
        timeOut: 3000,positionClass: 'toast-top-right'
      });
     } else{
      this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre ce produit a ton chariot", 'Désolé', {
        timeOut: 3000,positionClass: 'toast-top-right'
      });
     }
    }

}

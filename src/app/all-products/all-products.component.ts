import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CurrentUser } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { FacebookService, UIParams, UIResponse, InitParams } from 'ngx-facebook';
import { ApiUrl } from '../models/api-url.model';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any;
  isLoggedIn = false;
  currentuser;
  categories: any;
  catid;
  probycategories: any;
  p;
  constructor(private fb: FacebookService,private toastr: ToastrService,  private orderservice: OrderService, private actRoute: ActivatedRoute,public router: Router, private http: HttpClient,private myserv: ProductService,  public authService: MyAuthService) { 
    let initParams: InitParams = {
      appId: '2772668952968600',
      xfbml: true,
      version: 'v8.0'
    };
 
    fb.init(initParams);
  }

  ngOnInit() {
    const defqultuc:  CurrentUser = { 
     _id:'5f27c0f6ad80c631c856597c',
     nom:"user",
     prenom:"user",}
     this.http.get<any>(ApiUrl.API_URL + '/products').subscribe(data => {
     this.products = data;})

     this.myserv.getcategory().subscribe(data => {this.categories = data;
     if(this.categories._id ===""){this.categories._id = 5555455}})
     if (this.authService.isLoggedIn()) {
     this.isLoggedIn = true  
     this.currentuser = JSON.parse(localStorage.getItem('currentUser'))} 
     if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = defqultuc}

     this.getprodbycat("5f3d1e6d8b3dd62824bebb9d")

     var fullHeight = function() {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();

    $('#sidebarCollapse').unbind('click');
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    }

    getprodbycat(id){
      this.myserv.getproductsbycategory(id).subscribe(data => {this.probycategories = data;})
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

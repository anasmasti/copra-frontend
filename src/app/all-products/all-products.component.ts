import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CurrentUser } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';


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
  catid
  probycategories: any;
  constructor(private actRoute: ActivatedRoute,public router: Router, private http: HttpClient,private myserv: ProductService,  public authService: MyAuthService) { }

  ngOnInit() {
    const defqultuc:  CurrentUser = { 
     _id:'5f27c0f6ad80c631c856597c',
     nom:"user",
     prenom:"user",}
     this.http.get<any>('http://localhost:5000/api/products').subscribe(data => {
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
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    }

    getprodbycat(id){
      this.myserv.getproductsbycategory(id).subscribe(data => {this.probycategories = data;})
    }

}

import { Component, OnInit, Inject } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MyAuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';
import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';

declare var $ :any;


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  public payPalConfig2 ? : IPayPalConfig;
  commandewhatsappurl = "https://wa.me/212660548100?text=je suis intéressé par ce produit: http://localhost:4200/products/{{products?._id}}/5f4a30971cce3907b663cee0"
  products : Product[] ;
  order: any[] = [];
  myproductid : Product[] ;
  orderForm = new FormGroup({
    user: new FormControl(),
    product: new FormControl(),
    quantity: new FormControl(),
  })
  max;
  isLoggedIn = false;
  currentuser: any;
  quantitystatut = false
  myquanval: any;
  constructor(private fb: FacebookService, private http: HttpClient, public router: Router, public authService: MyAuthService,private toastr: ToastrService,  private orderservice: OrderService, private actRoute: ActivatedRoute,private productservice: ProductService, private cartservice: CartService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true  
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
     } 
     if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
  
     this.getproduct();
     this.initConfig();
    //  $(document).ready(function(){
    //     $('.qty').prop('disabled', true);
    //   $(document).on('click','.qtyplus',function(){
    //     this.max = $('.qty').val(parseInt($('.qty').val()) + 1 );
    //    console.log(this.max)
    //   });
    //     $(document).on('click','.qtyminus',function(){
    //     $('.qty').val(parseInt($('.qty').val()) - 1 );
    //       if ($('.qty').val() == 0) {
    //         $('.qty').val(1);
    //       }
    //       });
    // });
  }
    

sharefacebook(url: string) {
 
    const params: UIParams = {
      href: 'https://www.facebook.com/COPRA-112300153852615',
      method: 'share'
    };
   
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
   
  }
addorder() {
    const productid = this.actRoute.snapshot.paramMap.get('id');
    const userid = this.actRoute.snapshot.paramMap.get('userid');
    this.orderForm.get('product').setValue(productid);
    this.orderForm.get('user').setValue(userid);
    this.order = this.orderForm.value;
    if (this.authService.isLoggedIn()) {
     if (this.orderForm.get('quantity').value == null) {
       this.quantitystatut = true
     } else {
      this.quantitystatut = false
      this.orderservice.addtocart(this.order).subscribe();
      this.orderForm.reset();
      this.router.navigate(['/cart/' + userid ]);
      this.toastr.success("il est au panier :)", 'Merci', {
        timeOut: 3000,positionClass: 'toast-top-left'
      });
     }
     
     } else{
      this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre ce produit a ton chariot", 'Désolé', {
        timeOut: 3000,positionClass: 'toast-top-left'
      });
     }
}

getproduct(){
   const id = this.actRoute.snapshot.paramMap.get('id');
   this.productservice.selectproducts(id).subscribe(data => {
   this.products = data;})}

addorderdetail2(){
  if (this.authService.isLoggedIn()) {
  const prix = $("#prix").val();
  const adr = $("#adr").val();
  const myprod = $("#myprod").val();
  const myquan = $("#myquan").val();
  const userid = this.actRoute.snapshot.paramMap.get('userid');
  if (myquan === "") {
    this.quantitystatut = true
  } else {
  this.quantitystatut = false
  this.http.post('http://localhost:5000/api/orderdetail/',   
  {order: {product : myprod ,quantity : myquan},
  user : userid,
  totalprice:prix * myquan,
  adresse: adr}).subscribe()
  this.toastr.success('Tu as acheté(e) avec success', 'Merci !');
  this.router.navigate(['/thankyou/' + userid ]);}}
  else{
    this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre ce produit a ton chariot", 'Désolé', {
      timeOut: 3000,positionClass: 'toast-top-right'
    });
  }
}
good(){
  alert("rrr")
}

private initConfig(): void { 
  let totforpp:any
function gettotaleprice(callback){
    setTimeout ( () => {  
       let prix = $("#prix").val();
       let myquan = $("#myquan").val();
       totforpp = myquan * prix;
       console.log(totforpp)
callback();
}, 200);
} 
gettotaleprice(()=>{
  this.payPalConfig2 = {
      currency: 'USD',
      clientId: 'AbDvjz3mZ0P-zEp7TCRDgVftpJRtphqN2CPOBqNeuOnuPF_AyJh6rnvGhsVZOPrE2hGA6a3m6CIH1J5N',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
          purchase_units: [{
              amount: {
                  currency_code: 'USD',
                  value: totforpp,
                 },
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
         size: 'small',
          layout: 'vertical',
          color: 'silver',
          shape: 'pill',
          label: 'checkout',
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then(details => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
         

      },
      onError: err => {
          console.log('OnError', err);
         
      },
}

})

}}
import { Product } from './../models/product.model';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyAuthService } from '../services/auth.service';
import { IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public payPalConfig ? : IPayPalConfig;
  orders: any[];
  countoforders: string;
  totvalue: any = 0;
  ispay = false
  orderdetailForm = new FormGroup({
    user: new FormControl(),
    product: new FormControl(),
    quantity: new FormControl(),
    totalprice: new FormControl(),
    adresse: new FormControl(),
  })
  ordersdetail: any;
  quan = {};
  prod = {};
  isLoggedIn: any;
  currentuser: any;
  tot;
  ordersnotfound: boolean = false;
  constructor(public authService: MyAuthService, public router: Router, private actRoute: ActivatedRoute, private http: HttpClient, private toastr: ToastrService,private activatedRoute: ActivatedRoute,
    private productService: ProductService, 	private cartservice: CartService, private orderservice: OrderService) { }


  ngOnInit() {
    const userid = this.actRoute.snapshot.paramMap.get('userid');
    this.orderservice.getorder(userid).subscribe( data => {
    this.orders = data;  
    if(this.orders == null || this.orders.length == 0){
      this.ordersnotfound = true
    }
    for (let index = 0; index < this.orders.length; index++) {
      this.totvalue += this.orders[index].quantity * this.orders[index].product.price; }});


    this.orderservice.getcountorder(userid).subscribe( data => {
    this.countoforders = data });
    
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true  
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
     } 
     if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
    
     this.initConfig();

  }
  addorderdetail(){
    const tot = $("#tot").val();
    const adr = $("#adr").val();
    let myprod: any=[];
    let myquan: any=[];
    const userid = this.actRoute.snapshot.paramMap.get('userid');
    this.orderservice.getorder(userid).subscribe( data => {
    this.ordersdetail = data;   
    for (let i = 0; i < this.ordersdetail.length; i++) {
       this.quan[i] = $(`#quan${i}`).val();
       this.prod[i] = $(`#prod${i}`).val();
       myprod.push(this.prod[i])
       myquan.push(this.quan[i])}  
    this.orderdetailForm.get('user').setValue(userid);
    this.orderdetailForm.get('totalprice').setValue(tot);
    this.orderdetailForm.get('adresse').setValue(adr);
    for (let x = 0; x < this.ordersdetail.length; x++) {
     this.http.post('http://localhost:5000/api/orderdetail/',   
    {order: {product : myprod[x] ,quantity : myquan[x]},
    user : this.orderdetailForm.get('user').value,
    totalprice: this.orderdetailForm.get('totalprice').value,
    adresse: this.orderdetailForm.get('adresse').value,}).subscribe()}
    this.orderdetailForm.reset();
    this.toastr.success('Tu as acheté(e) avec success', 'Merci !');
    this.router.navigate(['/thankyou/' + userid ]);
   })}


private initConfig(): void { let totforpp: any;
  function gettotaleprice(callback){
      setTimeout ( () => { totforpp = $('#tot').val() ;
  callback();
}, 1100);
  } 
  gettotaleprice(()=>{
    this.payPalConfig = {
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
            layout: 'vertical',
            color: 'gold',
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

}
deleteorder(id:any){
  this.orderservice.deletefromorders(id).subscribe((data) => {
    const userid = this.actRoute.snapshot.paramMap.get('userid');
    this.orderservice.getorder(userid).subscribe( data => {
    this.orders = data;  
    if(this.orders == null || this.orders.length == 0){
      this.ordersnotfound = true
    }
    for (let index = 0; index < this.orders.length; index++) {
      this.totvalue += this.orders[index].quantity * this.orders[index].product.price; }});
  });
  this.toastr.success('Supprimer avec success', 'Suprimé!', {
    timeOut: 4000, positionClass: 'toast-top-right'
  });
}

}

  
  


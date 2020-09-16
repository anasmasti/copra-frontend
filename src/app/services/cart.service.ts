import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

import { Router} from "@angular/router";


import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";



@Injectable({
  providedIn: 'root'
})
export class CartService {

  server_utl = "http://localhost:5000/api";

  


  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private http: HttpClient, private productservice: ProductService,   private router: Router,) 
  { 

  }

  
}


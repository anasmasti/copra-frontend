import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products;
  mycolor : string;
  constructor(private http: HttpClient) { }



  ngOnInit() {
      this.http.get<any>('http://localhost:8000/api/products/index').subscribe(data => {
      this.products = data;
    })
  }
  
}

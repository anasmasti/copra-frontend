import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  products;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get<any>('http://localhost:5000/api/products/trend').subscribe(data => {
      this.products = data;})
  }

}

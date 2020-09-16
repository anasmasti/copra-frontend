import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAuthService } from '../services/auth.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  products;
  isLoggedIn: boolean;
  currentuser: any;
  constructor(private http: HttpClient, public authService: MyAuthService) { }

  ngOnInit() {
      this.http.get<any>('http://localhost:5000/api/products/trend').subscribe(data => {
      this.products = data;})

        if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true  
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
      } 
      if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
      }

}

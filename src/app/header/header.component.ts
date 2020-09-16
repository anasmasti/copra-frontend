import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MyAuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 count: number;
 catid
  constructor(private activatedRoute: ActivatedRoute, public authService: MyAuthService, private orderservice: OrderService, public router: Router) { }
  isLoggedIn = false;
  currentuser;
  ngOnInit() {
      if (this.authService.isLoggedIn()) {
        this.isLoggedIn = true  
        this.currentuser = JSON.parse(localStorage.getItem('currentUser'))  
        setInterval(() => {
        this.orderservice.getcountorder(this.currentuser._id).subscribe( data => {
        this.count = data;   });
        }, 4000);
       } 
       if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
     
  }
dologout(){
  this.authService.logout();
  this.router.navigate(['login']);
}



}

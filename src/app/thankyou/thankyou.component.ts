import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAuthService } from '../services/auth.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  onlineUser: any;
  constructor(public sauthService: MyAuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    let id = this.activatedRoute.snapshot.paramMap.get('userid');
    this.sauthService.getUserProfile(id).subscribe(data => {
      this.onlineUser = data;
    })
  }

}

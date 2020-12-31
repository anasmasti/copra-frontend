import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TwitterService } from 'ngx-twitter-api';
import { ApiUrl } from '../models/api-url.model';
@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css']
})
export class ShowBlogsComponent implements OnInit {
  blog: any;
  tweets: Object;

  constructor(private twitter: TwitterService, private http: HttpClient, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.http.get<any>( ApiUrl.API_URL +"/blog/"+id).subscribe(data => {
    this.blog = data;})
    this.getHomeTimeline()
  }
  getHomeTimeline(){
    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      {
        consumerKey: 'iExpQ1TcJ6KeVscMM6ZAnYn1D',
        consumerSecret: 'Mmh0RP3lON58B66UcMA6KrTLsZjdhHlKTwMNd4SyW9U9fE46gV'
      },
      {
        token: '1558833242-Xe8mvfkdyJojP29yynZjPm52cTUwSBoS1qQbUvC',
        tokenSecret: 'RDmFVfIDRLcCdaSzt6tZmSuMLZLcmq4sPbeQwiDZRks7w'
      }
  ).subscribe((twette)=>{
      this.tweets = twette;
  });
  }
}

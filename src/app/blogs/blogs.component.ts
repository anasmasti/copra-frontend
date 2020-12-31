import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../models/api-url.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(ApiUrl.API_URL+ "/blog/").subscribe(data => {
      this.blogs = data;
    })
  }

}

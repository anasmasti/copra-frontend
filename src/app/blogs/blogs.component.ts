import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/blog/').subscribe(data => {
      this.blogs = data;
    })
  }

}

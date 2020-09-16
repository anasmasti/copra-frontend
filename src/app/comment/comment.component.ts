import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  isLoggedIn = false 
  currentuser: any;
  comments: any;
  commentForm = new FormGroup({
    user: new FormControl(),
    product: new FormControl(),
    comment: new FormControl(),
  })
  commentsend: any;
  commentnotfound: boolean;
  constructor(private toastr: ToastrService,private actRoute: ActivatedRoute,private http: HttpClient,public authService: MyAuthService) { }

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:5000/api/comment/'+id).subscribe(data => {
      this.comments = data;
      this.commentnotfound = false
      if(this.comments == null || this.comments == 0 || this.comments.length == 0){
        this.commentnotfound = true
      }
    })
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true  
      this.currentuser = JSON.parse(localStorage.getItem('currentUser'))
     } 
     if(!this.isLoggedIn) { this.isLoggedIn = false; this.currentuser = this.authService.getCurrentUser()}
  }
  addcomment(){
    const id = this.actRoute.snapshot.paramMap.get('id');
    const userid = this.actRoute.snapshot.paramMap.get('userid');
    this.commentForm.get('product').setValue(id);
    this.commentForm.get('user').setValue(userid);
    this.commentsend = this.commentForm.value;
    if (this.authService.isLoggedIn()) {
    this.http.post('http://localhost:5000/api/comment/', this.commentsend).subscribe(() => {
      window.location.reload();
    })
    this.commentForm.reset();}else{
      this.toastr.error("Tu dois t'etre Connecter pour que tu puisses mettre un commentaire à ce produit", 'Désolé', {
        timeOut: 3000,positionClass: 'toast-top-left'
      });
    }
  }

}

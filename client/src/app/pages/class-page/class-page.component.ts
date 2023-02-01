import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {

  classId! : string | null;
  posts: Post[] = [];

  post = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private api: ApiClientService) { }

  ngOnInit(): void {
    this.classId = this.route.snapshot.paramMap.get('id');
    this.getPosts();
  }

  getPosts () {
    this.api.getPosts(this.classId!).subscribe({
      next: posts => this.posts = posts,
      error: err => console.log(err)
    });
  }

  handlePostSubmit () {
    if(this.post.value && this.classId) {
      this.api.addPost(this.classId, this.post.value).subscribe({
        next: newPost => this.posts.push(newPost)
      })
    };
  }

}

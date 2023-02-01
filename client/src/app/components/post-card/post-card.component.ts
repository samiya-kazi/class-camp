import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post! : Post
  hide = true;

  comment = new FormControl('', [Validators.required]);

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
  }

  toggleHide () {
    this.hide = !this.hide;
  }

  handleSubmit () {
    if (this.comment.value) {
      this.api.addComment(this.post._id, this.comment.value).subscribe({
        next: comments => {
          this.post.comments = comments;
          this.comment.reset();
        }
      })
    }
  }
}

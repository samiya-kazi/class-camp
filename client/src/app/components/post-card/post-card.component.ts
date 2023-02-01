import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post! : Post
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHide () {
    this.hide = !this.hide;
  }
}

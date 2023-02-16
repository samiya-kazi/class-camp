import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstituteUser } from 'src/app/models/institute-user.model';
import { Post } from 'src/app/models/post.model';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { SetClassAction } from 'src/app/store/actions/class.action';
import { SetInstituteAction } from 'src/app/store/actions/institute.action';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {

  classId! : string | null;
  posts: Post[] = [];
  instituteUser!: InstituteUser;

  post = new FormControl('', [Validators.required]);

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute, 
    private api: ApiClientService
  ) { }

  ngOnInit(): void {
    
    const class$ = this.store.select(store => store.class);
    class$.subscribe(clssArr => {
      this.classId = clssArr[0]._id;
      this.getPosts(); 
    });

    this.classId = this.route.snapshot.paramMap.get('id');
    this.api.getClassById(this.classId!).subscribe(clss => {
      this.store.dispatch(SetClassAction({payload: clss}));
      this.store.dispatch(SetInstituteAction({payload: clss.institute}));
    });

    const instituteUser$ = this.store.select(store => store.instituteUser);
    instituteUser$.subscribe(instituteUserArr => {
      this.instituteUser = instituteUserArr[0]; 
    });
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

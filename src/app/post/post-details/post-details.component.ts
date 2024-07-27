import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  
  post!: User;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private postUser: PostComponent
  ) { }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = 1;
    this.post = this.postUser.user[id]
    // if (id) {
    //   const post = this.dataService.getUserById(id);
    //   if (post) {
    //     this.post = post;
    //   } else {
    //     console.error(`Post with id ${id} not found`);
    //   }
    // } else {
    //   console.error('Invalid post id');
    // }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  postData!: Post;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.postData = data['post'];
    });
  }

  goBackToMain(): void {
    this.router.navigate(['/']).then(success => {
      if (success) {
        Notiflix.Notify.success('Successfully navigated to main page');
      } else {
        Notiflix.Notify.failure('Navigation to main page failed');
      }
    });
  }

}

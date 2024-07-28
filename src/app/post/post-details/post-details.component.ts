import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post!: User;
  Edit = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getUser().subscribe({
      next: (response) => {
        this.post = response.find(user => user.id === id)!;
      }
    })
  }

  Editing() {
    this.Edit = !this.Edit;
  }

  Saving(){
    this.Edit = !this.Edit;
  }
}

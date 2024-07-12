import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activedRouter.snapshot.queryParams)
  }

}

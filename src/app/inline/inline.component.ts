import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor(private title: Title) { 
  }

  ngOnInit(): void {
    this.title.setTitle('Open Graph Page')
  }

}

import { Component } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Books: Book[] = [
    {
      number: 0,
      name: 'Отрочество',
      author: 'Толстой'
    },
    {
      number: 1,
      name: 'Дубровский',
      author: 'Пушкин'
    },
    {
      number: 2,
      name: 'Шинель',
      author: 'Гоголь'
    }
  ]
  create_book = {
    name: null,
    author: null,
  };
  creatBook(){
    this.Books.push({
      name: this.create_book.name,
      author: this.create_book.author
    })
  }
}

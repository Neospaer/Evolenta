import { Component} from '@angular/core';
import { Book } from './Book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Books: Book[] = [
    {
      name: 'Отрочество',
      author: 'Толстой'
    },
    {
      name: 'Дубровский',
      author: 'Пушкин'
    },
    {
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

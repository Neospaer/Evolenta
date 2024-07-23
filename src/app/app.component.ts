import { Component, ViewChild } from '@angular/core';
import { Book } from './Book';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild(MatTable) table!: MatTable<any>;

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

  displayedColumns: string[] = ['Номер', 'Название', 'Автор'];
  dataSource = this.Books;

  creatBook(){
    this.Books.push({
      number: this.Books.length,
      name: this.create_book.name,
      author: this.create_book.author
    })
    this.table.renderRows();
  }
}

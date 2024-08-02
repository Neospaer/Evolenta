import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { AddTodo } from '../store/todo.action';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  addTasks() {
    if (this.todoForm.valid) {
      this.store.dispatch(new AddTodo({
        value: this.todoForm.controls['todo'].value,
        completed: false,
      }));
      this.todoForm.reset();
    }
  }
}

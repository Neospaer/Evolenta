import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todoForm!: FormGroup;

  constructor(
    private todoService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  addTasks() {
    this.todoService.create({
      value: this.todoForm.controls['todo'].value,
      completed: false,
    });
    this.todoForm.reset();
  }
}

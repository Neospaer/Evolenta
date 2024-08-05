import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { User } from '../Interfaces/User';
import * as Notiflix from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }


  onDeleteUser(userId: string): void {
    Notiflix.Confirm.show(
      'Подтверждение удаления',
      'Вы уверены, что хотите удалить этого пользователя?',
      'Да',
      'Нет',
      () => {
        this.dataService.deleteUser(userId).subscribe(() => {
          Notiflix.Notify.success('Пользователь удален');
          this.users = this.users.filter(user => user.id !== userId);
        });
      },
      () => {
        Notiflix.Notify.info('Удаление отменено');
      }
    );
  }
}

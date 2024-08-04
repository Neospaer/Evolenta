import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { UserById } from 'src/app/Interfaces/User';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {

  user!: UserById;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id')!;
    this.dataService.getUser(userId).subscribe(user => {
      this.user = user;
    });
  }

  onDeleteUser(): void {
    this.dataService.deleteUser(this.user.id).subscribe(() => {
      Notiflix.Notify.success('Пользователь удален');
      this.router.navigate(['/admin/users']);
    }, error => {
      Notiflix.Notify.failure('Ошибка при удалении пользователя');
    });
  }
}

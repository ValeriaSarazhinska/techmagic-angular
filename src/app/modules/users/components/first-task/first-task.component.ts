import { Component, OnInit } from '@angular/core';
import { UserBaseComponent } from '../user-base/user-base.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['../user-base/user-base.component.css'],
})
export class FirstTaskComponent extends UserBaseComponent implements OnInit {
  readonly apiUrl = 'assets/data/users.json';
  subscription?: Subscription;

  constructor(private userService: UserService) {
    super();
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.subscription = this.userService
      .getUsers<User[]>(this.apiUrl)
      .subscribe((users) => {
        this.users = users;
      });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

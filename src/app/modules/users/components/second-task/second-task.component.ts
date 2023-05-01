import { Component, OnInit } from '@angular/core';
import { UserBaseComponent } from '../user-base/user-base.component';
import { UserService } from '../../services/user.service';
import { User, UserFromApi } from '../../models/user.interface';
import { map, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from '../user-base/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['../user-base/user-base.component.css'],
})
export class SecondTaskComponent extends UserBaseComponent implements OnInit {
  subscription?: Subscription;
  constructor(private userService: UserService, private dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.userService
      .getUsers<UserFromApi[]>()
      .pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1],
            email: user.email,
            phone: user.phone,
            image: `https://i.pravatar.cc/200?u=${user.email}`,
          }))
        )
      )
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  override deleteSelected() {
    this.selectedUserIds.forEach((id) => {
      this.userService.deleteUser(id).subscribe();
    });
    super.deleteSelected();
  }

  openModal() {
    const dialogRef = this.dialog.open(AddUserModalComponent);
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.users.push({
          ...user,
          image: `https://i.pravatar.cc/200?u=${user.email}`,
        });
      }
    });
  }
}

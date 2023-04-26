import { Component, OnInit } from '@angular/core';
import {
  User,
  UserSelectionEvent,
  UserSortEvent,
} from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUserIds: number[] = [];
  isAllSelected = false;
  searchTerm = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onUserSelect({ userId, selected }: UserSelectionEvent): void {
    if (selected) {
      this.selectedUserIds.push(userId);
    } else {
      this.selectedUserIds = this.selectedUserIds.filter((id) => id !== userId);
    }
    this.isAllSelected = this.selectedUserIds.length === this.users.length;
  }

  selectAll(): void {
    this.selectedUserIds = this.users.map((user) => user.id);
  }

  deselectAll(): void {
    this.selectedUserIds = [];
  }

  onDeleteSelected(): void {
    this.users = this.users.filter(
      (user) => !this.selectedUserIds.includes(user.id)
    );
    this.selectedUserIds = [];
    this.isAllSelected = false;
  }

  sortUsers({ field, order }: UserSortEvent): void {
    const sortOrder = order === 'asc' ? 1 : -1;
    this.users = [...this.users].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder * aValue.localeCompare(bValue);
      }

      if (aValue < bValue) {
        return -sortOrder;
      }

      return sortOrder;
    });
  }
}

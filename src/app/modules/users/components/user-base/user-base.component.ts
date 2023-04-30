import { Component } from '@angular/core';
import {
  User,
  UserSelectionEvent,
  UserSortEvent,
} from '../../models/user.interface';

@Component({
  selector: 'app-user-base',
  templateUrl: './user-base.component.html',
  styleUrls: ['./user-base.component.css'],
})
export class UserBaseComponent {
  users: User[] = [];
  selectedUserIds: number[] = [];
  isAllSelected = false;
  searchTerm = '';

  constructor() {}

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

  deleteSelected(): void {
    this.users = this.users.filter(
      (user) => !this.selectedUserIds.includes(user.id)
    );
    this.deselectAll();
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

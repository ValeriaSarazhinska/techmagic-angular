import { Component, EventEmitter, Output } from '@angular/core';
import {
  UserSortEvent,
  UserSortField,
  UserSortOrder,
} from '../../../models/user.interface';

@Component({
  selector: 'app-user-sort',
  templateUrl: './user-sort.component.html',
  styleUrls: ['./user-sort.component.css'],
})
export class UserSortComponent {
  sortField: UserSortField = 'id';
  sortOrder: UserSortOrder = 'asc';
  @Output() sort = new EventEmitter<UserSortEvent>();

  onSort(): void {
    this.sort.emit({ field: this.sortField, order: this.sortOrder });
  }
}

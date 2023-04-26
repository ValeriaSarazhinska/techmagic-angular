import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserSelectionEvent } from '../../../models/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() isSelected = false;
  @Output() userSelect = new EventEmitter<UserSelectionEvent>();

  onSelectionChange(): void {
    this.userSelect.emit({ userId: this.user.id, selected: this.isSelected });
  }
}

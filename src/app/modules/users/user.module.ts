import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-list/user-card/user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UserSortComponent } from './components/user-list/user-sort/user-sort.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    FilterUsersPipe,
    UserSortComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
  ],
  exports: [UserListComponent],
})
export class UserModule {}

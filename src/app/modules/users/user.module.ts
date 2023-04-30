import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-base/user-card/user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UserSortComponent } from './components/user-base/user-sort/user-sort.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserBaseComponent } from './components/user-base/user-base.component';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserModalComponent } from './components/user-base/add-user-modal/add-user-modal.component';

@NgModule({
  declarations: [
    UserBaseComponent,
    UserCardComponent,
    FilterUsersPipe,
    UserSortComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    AddUserModalComponent,
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
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [UserBaseComponent],
})
export class UserModule {}

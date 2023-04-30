import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTaskComponent } from './modules/users/components/first-task/first-task.component';
import { SecondTaskComponent } from './modules/users/components/second-task/second-task.component';

const routes: Routes = [
  { path: '', component: FirstTaskComponent },
  { path: 'second', component: SecondTaskComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

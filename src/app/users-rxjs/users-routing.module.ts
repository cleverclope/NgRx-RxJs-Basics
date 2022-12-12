import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

const usersRoutes: Routes = [
  { path: '',
    redirectTo:"users",
    pathMatch:"full"
  },

  {
    path:'users',
    component: UsersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }

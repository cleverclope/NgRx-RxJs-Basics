import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from './posts-ngrx/posts.module';
import { UsersModule } from './users-rxjs/users.module';


const routes: Routes = [
  { path: '',
    redirectTo:"users",
    pathMatch:"full"
  },

 {
    path: 'posts',
    loadChildren: () => import("./posts-ngrx/posts.module").then(module => PostsModule)
  },

  {
    path: 'users',
    loadChildren: () => import("./users-rxjs/users.module").then(module => UsersModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

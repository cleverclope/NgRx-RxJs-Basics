import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from './posts-ngrx/posts.module';


const routes: Routes = [
  { path: '',
    redirectTo:"posts",
    pathMatch:"full"
  },

 {
    path: 'posts',
    loadChildren: () => import("./posts-ngrx/posts.module").then(module => PostsModule)
  },

  // {
  //   path: 'Auth',
  //   loadChildren: () => import("./auth/modules/auth.module").then(module => AuthModule)
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

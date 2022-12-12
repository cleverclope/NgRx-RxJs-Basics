import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '',
    redirectTo:"posts",
    pathMatch:"full"
  },

  {
    path:'posts',
    component: PostsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports :[
    RouterModule
  ]
})
export class PostsRoutingModule { }

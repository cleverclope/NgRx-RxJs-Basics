import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './store/reducers';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsEffects } from './store/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsModule { }

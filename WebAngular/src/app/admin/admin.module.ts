import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
  ],
  declarations: [
    HomeComponent, 
    CommentComponent
  ]
})
export class AdminModule { }

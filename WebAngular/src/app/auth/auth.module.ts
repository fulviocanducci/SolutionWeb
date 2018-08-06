import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { GuardService } from './core/auth/guard.service';
import { LoggedService } from './core/auth/logged.service';
import { CommentComponent } from './admin/comment/comment.component';
import { LoggofService } from './core/auth/loggof.service';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      canActivate: [ GuardService ]
    },
    {
      path: 'admin/home',
      component: HomeComponent,
      canActivate: [ LoggedService ]
    },
    {
      path: 'admin/comment',
      component: CommentComponent,
      canActivate: [ LoggedService ]
    }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
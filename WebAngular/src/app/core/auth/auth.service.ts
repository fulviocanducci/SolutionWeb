import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { Token } from '../token/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private userService:UserService) { }

  authenticate(email: string, password: string) {
    return this.userService.login(email, password)
      .pipe(tap(res => {
        if (res.authenticated === 1) {
          this.tokenService.setToken(res.token);
        } else {
          this.tokenService.removeToken();
        }
      }));
  }
}

import { Injectable } from '@angular/core';

import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private userService:UserService) { }

  login(email: string, password: string) {
    this.userService.login(email, password)
      .subscribe(data => {
        data.
      }, 
      err => console.log(err));
  }
}

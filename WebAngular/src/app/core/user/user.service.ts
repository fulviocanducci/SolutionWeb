import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../token/token.service';
import { Token } from '../token/token';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>(`${environment.url_api}login`, {email, password});
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  loggof(): void {
    this.tokenService.removeToken();
  }
}

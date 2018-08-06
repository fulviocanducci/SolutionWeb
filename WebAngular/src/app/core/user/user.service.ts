import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../token/token.service';
import { Token } from '../token/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url_api: string = 'http://localhost:9090/api/';

  constructor(private tokenService: TokenService,
  private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>(this.url_api, {email, password});
  }
}

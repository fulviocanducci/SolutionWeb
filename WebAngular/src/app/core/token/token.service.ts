import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private KEY: string = 'token';

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(this.KEY);
  }

  removeToken(): void {
    window.localStorage.removeItem(this.KEY);
  }
  
}

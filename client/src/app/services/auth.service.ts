import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { firstValueFrom, Observable } from 'rxjs';
import { LoginRes } from '../models/loginRes.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  async Login(login: Login) {
    try {
      const res = await firstValueFrom(
        this.http.post<LoginRes>('http://localhost:3000/api/auth/login', {
          email: login.email,
          password: login.password,
        })
      );
      if (res?.token) {
        localStorage.setItem('token', res.token);
      }
      return res
    } catch (err: any) {
      throw 'error';
    }
  }

  async AddUser(user: User) {
    user.id = 0
    try {
      const res = await this.http.post<LoginRes>('http://localhost:3000/api/auth/register', user)
      if (res) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return res
    } catch (err: any) {
      throw 'error';
    }
  }
}
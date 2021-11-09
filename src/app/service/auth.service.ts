import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  entrar(userlogin: UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>('https://projenick.herokuapp.com/usuario/logar',userlogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://projenick.herokuapp.com/usuario/cadastrar',user)
  }
}

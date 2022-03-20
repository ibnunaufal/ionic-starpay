import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService
  ) { }


  login(username: String, password: String) {
    let data = {
      username: username,
      password: password
    };

    return this.http.login(data);
  }
}

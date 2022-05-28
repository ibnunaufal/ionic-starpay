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
    // let data = {
    //   username: username,
    //   password: password
    // };
    let data = {"tipe":"LOGIN","username":username,"password":password,"token":"","appid":"","website":"transaksi"}

    return this.http.post("/framework/core/public/index.php/LOGIN/LOGIN/MOBILE",data);
  }

  post(url, data){
    return this.http.post(url, data);
    // return this.http.post("/framework/core/public/index.php/LOGIN/LOGIN/MOBILE",data);
  }

  get(url){
    return this.get(url);
  }

  pay(){

  }

  inq(url, data){
    return this.http.post(url, data);
  }

}

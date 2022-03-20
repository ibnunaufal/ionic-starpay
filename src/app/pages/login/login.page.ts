import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pin
  constructor(
    private storage: Storage,
    private loading: LoadingService,
    private alert: AlertService,
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  test(){}

  login(){
    console.log("asdad")
    this.storage.get('appId').then((res) => {
      this.http.test().then((res)).catch((err) => {
        console.log(err)
      })
      // if(res){
      //   // {"tipe":"LOGIN",
      //   // "username":"NAUFAL5100",
      //   // "password":"NX2JMX",
      //   // "token":"",
      //   // "appid":"EJB9L749UJY6CF37",
      //   // "website":"transaksi"}: 

      //   var data = {
      //     tipe: 'LOGIN',
      //     token: '',
      //     username: res,
      //     password: this.pin,
      //     appid: "",
      //     website: 'transaksi'
      //   };
      //   this.loading.show();
      //   this.http.login(data, 'LOGIN/LOGIN').then((res:any) => {
      //     this.loading.hide();
      //     if(res.status == 'SUKSESCEKUSERNAME'){
      //       this.storage.set('appId', res)
      //       this.router.navigateByUrl('/login')
      //     }else{
      //       this.alert.toastError('Silahkan register terlebih dahulu')
      //     }
      //   }).catch((err) => {
      //     this.loading.hide();
      //     this.alert.toastError(err)
      //   })
        
      // }else{
      //   this.alert.toastError("Masukkan Email/No HP")
      // }  
    })
    
  }
}

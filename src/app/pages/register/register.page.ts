import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email;
  constructor(
    private http: HttpService,
    private router: Router,
    private storage: Storage,
    private alert: AlertService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    // this.sessionCheck()
  }

  register(){
    console.log(this.email)
    if(this.email){
      var data = {
        tipe: 'CEKUSERNAME',
        token: '',
        appid: this.email,
        website: 'transaksi'
      };
      this.loading.show();
      this.http.login(data, 'CEKUSERNAME').then((res:any) => {
        this.loading.hide();
        if(res.status == 'SUKSESCEKUSERNAME'){
          this.storage.set('appId', this.email)
          this.router.navigateByUrl('/login')
        }else{
          this.alert.toastError('Silahkan register terlebih dahulu')
        }
      }).catch((err) => {
        this.loading.hide();
        this.alert.toastError(err)
      })
      
    }else{
      this.alert.toastError("Masukkan Email/No HP")
    }
  }

  sessionCheck(){
    this.storage.get("appId").then((res) => {
      var data = {
        tipe: 'CEKUSERNAME',
        token: '',
        appid: res.appid ? res.appid : '',
        website: 'transaksi'
      };

      this.loading.show();
      this.http.login(data, 'CEKUSERNAME').then((res:any) => {
        this.loading.hide();
        if(res.status == 'SUKSESCEKUSERNAME'){
          this.router.navigateByUrl('/login')
        }else{
          this.alert.toastError('Silahkan register terlebih dahulu')
        }
      }).catch((err) => {
        this.loading.hide();
        this.alert.toastError(err)
      })
    })
  }




}

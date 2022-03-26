import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private router: Router
  ) {
    this.createDB()
    if(environment.production){
      this.storage.get('profile').then((res:any) => {
        if(res.username){
          // arahin ke login
          this.router.navigateByUrl('login')
        }else{
          // arahin ke register
          this.router.navigateByUrl('register')
        }
      })
    }else{
      
    }
  }

  async createDB(){
    await this.storage.create();
  }

  /*
  alur
  -> cek local storage ada username/email ga
    - kalo ada arahin ke halaman login / di autologin-in juga bisa
    - kalo gaada halaman register
  */
}

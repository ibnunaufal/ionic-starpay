import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  inbox:any;
  isLoading = false;
  isNull = false;
  constructor(
    private auth: AuthService,
    private storage: Storage
  ) { 
    this.getInbox(1);
  }

  ngOnInit() {
  }

  getInbox(page){
    this.storage.get('profile').then((res:any) => {
      let url = "/framework/core/public/index.php/REQUEST/act/REPORT/mob_inbox/MOBILE"
      var data = {
        noid: res.noid,
        username: res.username,
        token: res.token,
        appid: res.appid
      };
      this.isLoading = true;
      this.isNull = false;
      this.auth.post(url, data).then((res:any) => {
        console.log("success")
        this.inbox = res.data;
        this.isLoading = false;
        if(!res.data){
          this.isNull = true
        }else{
          this.isNull = false
        }
      }).catch((res) => {
        this.isLoading = false
        this.isNull = false
      })
    })
  }

  subString(string){
    let x = String(string).substring(0, 40) + "..."
    return x
  }

}

import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingCtrl: LoadingController
  ) { }
  show() {
    this.loadingCtrl
      .create({
        message: "Please Wait.."
      })
      .then(res => {
        res.present();
      });
  }

  hide() {
    this.loadingCtrl.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rekap',
  templateUrl: './rekap.page.html',
  styleUrls: ['./rekap.page.scss'],
})
export class RekapPage implements OnInit {

  bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  tahun = []
  thisYear;
  selectedMonth;
  selectedYear;

  rekap;
  
  isLoading = false;
  isNull = false;
  constructor(
    private storage: Storage,
    private auth: AuthService
  ) {
    this.thisYear = Number(new Date().getFullYear())
    this.selectedYear = String(this.thisYear);
    // this.selectedMonth = Number(new Date().getMonth()) + 1
    this.selectedMonth = 2
    console.log(this.selectedMonth)
    for(let x = 2020; x <= this.thisYear; x++){
      this.tahun.push(String(x))
    }
    this.thisYear = String(this.thisYear)
    this.getData(this.selectedMonth < 10 ? "0"+this.selectedMonth : this.selectedMonth, this.selectedYear)
   }

  ngOnInit() {
  }

  getData(month, year){
    
    // https://starpayindonesia.com/framework/core/public/index.php/REQUEST/act/REPORT/web_mutasi_saldo_bulan/WEB
    // {"detail":{"bulan":"03","tahun":2022},"noid":"0010001000000029","username":"NAUFAL5100","token":"6PLYVVRMQYHE82Z1B78L","appid":"EJB9L749UJY6CF37"}
    this.storage.get('profile').then((res:any) => {
      // let url = "/framework/core/public/index.php/REQUEST/act/REPORT/mob_hist_rekap_trx/MOBILE"
      let url = "/framework/core/public/index.php/REQUEST/act/REPORT/mob_hist_rekap_trx/MOBILE"
      var data = {
        bulantahun: String(month) + String(year),    
        noid: res.noid,
        username: res.username,
        token: res.token,
        appid: res.appid
      };
      this.isLoading = true;
      this.isNull = false;
      this.auth.post(url, data).then((res:any) => {
        console.log("success")
        this.isLoading = false;
        this.rekap = res.data
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

  filter(){
    this.getData(this.selectedMonth < 10 ? "0"+this.selectedMonth : this.selectedMonth, this.selectedYear)
  }

}

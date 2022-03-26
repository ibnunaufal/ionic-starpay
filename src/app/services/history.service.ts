import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpService
  ) { }

  getByMonth(month: String, year: String) {
    
    // https://starpayindonesia.com/framework/core/public/index.php/REQUEST/act/REPORT/web_transaksi_bulan/WEB
    let data = {"detail":{"bulan":month,"tahun":Number(year)},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
    // let data = {"tipe":"LOGIN","username":username,"password":password,"token":"","appid":"","website":"transaksi"}

    return this.http.post("/framework/core/public/index.php/REQUEST/act/REPORT/web_transaksi_bulan/WEB",data);
  }
}

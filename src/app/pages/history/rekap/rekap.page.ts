import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekap',
  templateUrl: './rekap.page.html',
  styleUrls: ['./rekap.page.scss'],
})
export class RekapPage implements OnInit {

  bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  tahun = []
  thisYear
  constructor() {
    this.thisYear = Number(new Date().getFullYear())
    for(let x = 2020; x <= this.thisYear; x++){
      this.tahun.push(String(x))
    }
    console.log(this.tahun)
    this.thisYear = String(this.thisYear)
    console.log(this.thisYear)
   }

  ngOnInit() {
  }

}

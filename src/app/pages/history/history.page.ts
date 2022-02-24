import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  isRekap = true
  constructor() { }

  ngOnInit() {
  }

  set(){
    if(this.isRekap){
      this.isRekap = false
    }else{
      this.isRekap = true
    }
  }

}

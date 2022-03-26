import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.page.html',
  styleUrls: ['./last.page.scss'],
})
export class LastPage implements OnInit {

  constructor(
    private storage: Storage,
    private historyService: HistoryService
  ) { 
    this.getByMonth()
  }

  ngOnInit() {
  }

  getByMonth(){
    this.historyService.getByMonth("03","2022").then((res) => {
      console.log(res)
    })
  }
}

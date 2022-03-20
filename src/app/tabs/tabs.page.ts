import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  status = "home"
  constructor() {}

  set(stat){
    console.log(this.status)
    this.status = stat
    console.log(this.status)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menus = [
    {
      name: "PLN Group",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/pln.png",
      class: "menu3"
    },
    {
      name: "Telkom Group",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/telkom.png",
      class: "menu3"
    },
    {
      name: "PDAM",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/pdam.png",
      class: "menu3"
    },
    {
      name: "BPJS",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/bpjs.png",
      class: "menu3"
    },
    {
      name: "Pulsa",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/hp.png",
      class: "menu3"
    },
    {
      name: "Multifinance",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/multifinance.png",
      class: "menu3"
    },
    {
      name: "TV Berlangganan",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/tv.png",
      class: "menu3"
    },
    {
      name: "Topup E-Wallet",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/wallet.png",
      class: "menu3"
    },
    {
      name: "HP Pascabayar",
      active: true,
      page: "/app/tabs/home/card",
      icon: "../../../assets/home-icon/hp.png",
      class: "menu3"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  selectedArr;

  firstWord;

  idTrx

  constructor(
    private navParams: NavParams,
    private storage: Storage
  ) { 

    this.selectedArr = this.navParams.get('item');
    console.log(this.selectedArr)
    this.firstWord = String(this.selectedArr.name.split(" ")[0]).toLowerCase();
    console.log(this.firstWord)
  }

  ngOnInit() {
  }

  proses(){
    if(this.firstWord == "pln"){
      // see comment below
      /*
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PLN/POSTPAID/1231231231231231231/7297502125/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PLN/PREPAID/123123123123123123/6604342089/WEB
        {"detail":{"nominal":20000,"admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PLN/NONTAGLIS/1231231231231231231/3852550991/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
    }else if(this.firstWord == "telkom"){
      /*
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/TELKOM/TELEPON/0627-123123123/9898073151/WEB
        {"detail":{"nominal":"","admin_bank":""},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/TELKOM/SPEEDY/123123123123123/6687222256/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/TELKOM/HALO/08123123123/9530792730/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
    }else if(this.firstWord == "pdam"){
      /*
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PDAM/KABSEMARANG/123123123/2732975204/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
    }else if(this.firstWord == "bpjs"){
      // not yet, gaada di web
    }else if(this.firstWord == "pulsa"){
      /* 
      https://starpayindonesia.com/framework/core/public/index.php/REQUEST/act/REPORT/report_produk_pulsa/WEB
        body = {"detail":{"operator":"TELKOMSEL"},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      response = [{"produk_tipe":"TELKOMSEL5","M3":5450},{"produk_tipe":"TELKOMSEL10","M3":10300},{"produk_tipe":"TELKOMSEL20","M3":20250},{"produk_tipe":"TELKOMSEL25","M3":25000},{"produk_tipe":"TELKOMSEL50","M3":50200},{"produk_tipe":"TELKOMSEL100","M3":97700},{"produk_tipe":"TSEL_DATA_60MB_7HARI","M3":11200},{"produk_tipe":"TSEL_DATA_BULK_1GB_30HARI","M3":25200},{"produk_tipe":"TSEL_DATA_BULK_3GB+2GB_VIDMAX_24JAM_30HARI","M3":57200},{"produk_tipe":"TSEL_DATA_BULK_5GB+2GB_VIDMAX_24JAM_30HARI","M3":98800}]

      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PULSA/TELKOMSEL5/081212121212/4462434378/WEB
        {"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
      var telkomsel = ['0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851'];
			var indosat = ['0855', '0856', '0857', '0858', '0814', '0815', '0816']; 
			var xl = ['0817', '0818', '0819', '0859', '0877', '0878']; 
			var tri = ['0896', '0897', '0898', '0899'];
			var smartfren = ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'];

      let nomor = "081225951789"
      var prefix = nomor.substring(0, 4);
      let selected

			if (telkomsel.indexOf(prefix) >= 0) {
				selected = 'TELKOMSEL';
			} else if (indosat.indexOf(prefix) >= 0) {
				selected = 'INDOSAT';
			} else if (xl.indexOf(prefix) >= 0) {
				selected = 'XL';
			} else if (tri.indexOf(prefix) >= 0) {
				selected = 'TRI';
			} else if (smartfren.indexOf(prefix) >= 0) {
				selected = 'SMARTFREN';
			};

    }else if(this.firstWord == "multifinance"){
      /* 
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/MULTIFINANCE/BAF/123123123123/9888173350/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      Request URL: https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/MULTIFINANCE/FIF/123123123123123/0547734779/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
    }else if(this.firstWord == "tv"){
      /*
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/TV/INDOVISION/123123123123/2879980005/WEB
        {"detail":{"nominal":"","admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"} 
      */
    }else if(this.firstWord == "pertagas"){
      /*
      https://starpayindonesia.com/framework/core/public/index.php/TRXINQUIRY/act/PERTAGAS/PTGPRA/123123123123123/2091671944/WEB
        {"detail":{"nominal":20000,"admin_bank":3000},"noid":"0010001000000029","username":"NAUFAL5100","token":"7ALCJBZEWZ7SEPRKHZGU","appid":"EJB9L749UJY6CF37"}
      */
    }
  }

  inq(){
    var data = {
      // detail: {
      //   nominal: $scope.trx.amount,
      //   admin_bank: $scope.trx.admin
      // },
      // noid: localStorage.noid,
      // username: localStorage.nohp,
      // token: localStorage.token,
      // appid: localStorage.appid
    };

    // RequestService.inq(data, $scope.trx.product, $scope.trx.type, $scope.trx.idpel, $scope.trx.traceid).then(function(response) {
    //   if (response.response_code == '0000') {
    //     $scope.trx.reff = response.reff;
    //     $scope.trx.name = response.idpel_name;
    //     $scope.trx.content = response.content;

    //     $scope.inqResult = response.response_html;

    //     $scope.inq = true;
    //   } else {
    //     $scope.showAlert(response.response_message);
    //   };
    // });
  }

}

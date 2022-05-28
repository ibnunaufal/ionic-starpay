import { Injectable } from "@angular/core";
import { HeaderService } from "./header.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout, catchError } from "rxjs/operators";
import { ErrorService } from "./error.service";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private header: HeaderService,
    private http: HttpClient,
    private error: ErrorService,
    private storage: Storage
    ) { }

  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     this.header.getHeaders().then((headers) => {
  //       const httpOptions = {
  //         headers: headers,
  //         observe: 'response' as 'response'
  //       };
  //       this.http
  //         .get(environment.API_URL + url, headers)
  //         .pipe(
  //           timeout(environment.TIMEOUT),
  //           catchError(this.error.handleError)
  //         )
  //         .subscribe((response: any) => {
  //           this.storage
  //             .set(
  //               "token",
  //               response.headers.get("Authorization").replace("Bearer ", "")
  //             )
  //             .then(() => {
  //               // this.token = data.headers
  //               //   .get("Authorization")
  //               //   .replace("Bearer ", "");

  //               // this.authState.next(true);

  //               resolve(response);
  //             });
  //         }, reject);
  //     });
  //   });
    
  // }


  postFailed(url, data) {
    return new Promise((resolve, reject) => {
      this.header.getHeaders().then((headers) => {
        this.http
          .post(environment.API_URL + url, data, headers)
          .pipe(
            timeout(environment.TIMEOUT),
            catchError(this.error.handleError)
          )
          .subscribe((response: any) => {
            this.storage
              .set(
                "token",
                response.headers.get("Authorization").replace("Bearer ", "")
              )
              .then(() => {
                // this.token = data.headers
                //   .get("Authorization")
                //   .replace("Bearer ", "");

                // this.authState.next(true);

                resolve(response);
              });
          }, reject);
      });
    });
  }


  put(url, data) {
    return new Promise((resolve, reject) => {
      this.header.getHeaders().then((headers) => {
        this.http
          .put(environment.API_URL + url, data, headers)
          .pipe(
            timeout(environment.TIMEOUT),
            catchError(this.error.handleError)
          )
          .subscribe((response: any) => {
            this.storage
              .set(
                "token",
                response.headers.get("Authorization").replace("Bearer ", "")
              )
              .then(() => {
                // this.token = data.headers
                //   .get("Authorization")
                //   .replace("Bearer ", "");

                // this.authState.next(true);

                resolve(response);
              });
          }, reject);
      });
    });
  }

  login(data, link) {
    // return new Promise((resolve, reject) => {
    //   this.http
    //     .post(environment.API_URL + "katalis/login", data, {
    //       observe: "response",
    //     })
    //     .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
    //     .subscribe((data) => {
    //       this.storage
    //         .set(
    //           "token",
    //           data.headers.get("Authorization").replace("Bearer ", "")
    //         )
    //         .then(() => {
    //           // this.token = data.headers
    //           //   .get("Authorization")
    //           //   .replace("Bearer ", "");

    //           // this.authState.next(true);
    //           console.log(data)
    //           resolve(data);
    //         });
    //     }, reject);
    // });
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.API_URL + "/framework/core/public/index.php/" + link + "/MOBILE", data, {
          observe: "response",
        })
        .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
        .subscribe((data) => {
          resolve(data);
        }, reject);
    });
  }

  post(url, body){

    return new Promise((resolve, rejects) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'VERSI_STARPAY': '',
      });
      this.http.post( environment.API_URL + url, body, {headers: headers})
      .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
      .subscribe((data) => {
        resolve(data);
      }, rejects);
    })

    // let urle = "https://starpayindonesia.com/framework/core/public/index.php/LOGIN/LOGIN/MOBILE"
    // // let data = {"tipe":"LOGIN","username":"NAUFAL5100","password":"NX2JMX","token":"","appid":"","website":"transaksi"}
    // var data = {"tipe": "LOGIN","username": "ibnunaufal5758@gmail.com","password": "123456","token": "","appid": "","website": "transaksi"};
    // // var headers = new HttpHeaders()
    // // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   // 'VERSI_STARPAY': '',
    // });
    // // let options = new ({ headers: headers });
    // return new Promise((resolve, reject) => {
    //   this.http.post(url, data, {headers: headers})
    //     .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
    //     .subscribe((data) => {
    //       resolve(data);
    //     }, reject);
      // this.http
      //   .post(environment.API_URL + "/framework/core/public/index.php/" + link + "/MOBILE", data, {
      //     observe: "response",
      //   })
      //   .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
      //   .subscribe((data) => {
      //     resolve(data);
      //   }, reject);
    // });
  }

  postInqPay(url, body){
    return new Promise((resolve, rejects) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'VERSI_STARPAY': '',
      });
      this.http.post( environment.API_URL + url, body, {headers: headers})
      .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
      .subscribe((data) => {
        resolve(data);
      }, rejects);
    })
  }

  get(url){

    return new Promise((resolve, rejects) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'VERSI_STARPAY': '',
      });
      // this.http.get( environment.API_URL + url, {headers: headers})
      this.http.get(environment.API_URL + url)
      .pipe(timeout(environment.TIMEOUT), catchError(this.error.handleError))
      .subscribe((data) => {
        resolve(data);
      }, rejects);
    })
  }

}

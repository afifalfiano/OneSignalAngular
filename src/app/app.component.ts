import { Component, Inject } from '@angular/core';
import { OnesignalService } from './onesignal.service';
import {OneSignal} from 'onesignal-ngx'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'OneSignalAngular';

  constructor(private os: OnesignalService,
    private oneSignal: OneSignal,
    private httpClient: HttpClient) {
   this.os.onInit();
  }

  async onSend() {
    // await this.oneSignal.sendTag("test", "test").then(response => {
    //   console.log(response);
    // })
    // this.oneSignal.registerForPushNotifications()
    const body = {
      "app_id": "a21db96c-ccde-408c-851d-99ffd5409f57",
      "included_segments": ["Subscribed Users"],
      "data": {"Silahkan cek kembali monev": "Anda harus mengecek monev"},
      "contents": {"en": "Bagus, anda sudah mengecek monev"},
      "headings": {"en": "Cek Monev"}
    };
    const url = 'https://onesignal.com/api/v1/notifications';
    const token = 'ZDlkM2FmYmYtNDNiNS00N2FmLTgzMTAtMWIwNWIyOTBkYmFk';
    // const newHedaer: Headers = new Headers({
     
    // })
    this.httpClient.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).subscribe(response => {
      console.log(response);
    })
  }

}

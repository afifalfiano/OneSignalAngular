import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnesignalService {

  constructor() { }
  async onLoad(): Promise<any> {
    window.OneSignal = window.OneSignal || [];
    return new Promise((resolve) => {
      window.OneSignal.push(function() {
        resolve(window.OneSignal);
      });
    });
  }

  onInit():void {
    this.onLoad().then((OneSignal)=>{
      OneSignal.init({
        appId: "a21db96c-ccde-408c-851d-99ffd5409f57",
      });
    })
  }
}

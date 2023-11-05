import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';


@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }
  getEmoji(){
    return ajax("https://emojihub.yurace.pro/api/random")
  }
}

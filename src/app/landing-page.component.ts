import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageService } from './landing-page.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  emoji: any;
  constructor(private lpService: LandingPageService){

  }
  ngOnInit(){
    this.lpService.getEmoji().pipe(map((res)=>res.response)).subscribe((res)=>{
      console.log(res);
      this.emoji = res
    })
  }
}

import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover:String=''
  @Input()
  cardTitle:String=''

  @Input()
  Id:string = '0'
}

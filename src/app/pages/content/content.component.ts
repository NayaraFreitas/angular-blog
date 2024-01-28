import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {datafake} from '../../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover:string =''
  contentTitle:string = ''
  contentDescription:string=''

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
     )

     this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null){
    const result = datafake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

    // if(!result) {
    //   this.contentTitle = result.title
    // }
  }

}



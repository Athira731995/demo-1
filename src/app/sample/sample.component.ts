import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  name="Athira"
  data:string[]=["emp101","emp102","emp103","emp104"]
  colors:string[]

  constructor() { }
  ngOnInit(): void {
  }

}

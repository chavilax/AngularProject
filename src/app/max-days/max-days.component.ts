import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-days',
  templateUrl: './max-days.component.html',
  styleUrls: ['./max-days.component.css']
})
export class MaxDaysComponent implements OnInit {

  @Input()max:number=0;
  @Input()dayMin:any='';
  @Input()dayMax:any=''; 


  constructor() { }

  ngOnInit(): void {
  }

}

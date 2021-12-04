import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


let arr1 = new Array<day>();
export class day{
date !:string;
openPrice !:number;
closePrice !:number;
highPrice !:number;
lowPrice !:number;
difference !:number;
}



@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  arr =arr1;
   max !:number;
   dayMin !:string;
   dayMax !:string;

  dataSource !: MatTableDataSource<day>;
  displayedColumns: string[] = ['date', 'openPrice', 'closePrice', 'highPrice','lowPrice','difference'];
ReturnMaxNotSort(){
  let arrToSort=this.arr;
  console.log("arrToSort",arrToSort);
  arrToSort.sort((a,b) => a.date.localeCompare(b.date));
  this.ReturnMaxSort(arrToSort);
}
 
 ReturnMaxSort(arr:any){
   debugger
   let max !:number;
   max=0;
   let dayMin !:day;
   let dayMax !:day;
   for (let index = arr.length-1; index >=0 ; index--) {
    for (let index2 = arr.length-1; index2 >=0 ; index2--){
      let sum=arr[index2].highPrice-arr[index2].lowPrice;
      if(sum >max){
        max=sum;
        dayMin=arr[index];
        dayMax=arr[index2];
      }
    }
   }
   this.max=max;
   this.dayMin=dayMin.date;
   this.dayMax=dayMax.date;

 }

 @ViewChild(MatPaginator) paginator !: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort;
  data!:any;
 
  constructor(private http : HttpClient) {
  
   }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
 
    this.http.get<any>('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo').subscribe({
      next: data => {
       this.data=data["Time Series (Daily)"];
        for (const key in this.data){
           {
            let day1=new day();
            day1.openPrice=this.data[key]['1. open'];
            day1.closePrice=this.data[key]['4. close'];
            day1.highPrice=this.data[key]['2. high'];
            day1.difference=this.data[key]['4. close']-this.data[key]['1. open'];
            day1.lowPrice=this.data[key]['3. low'];
            day1.date=key;
             this.arr.push(day1);
          }
        }
        this.dataSource = new MatTableDataSource(this.arr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    this.ReturnMaxSort(this.arr)
    this.ReturnMaxNotSort()
   
      },
      error: error => {
          console.log('There was an error!', error);
      }
  })       
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  msg:string="";
  txtcolor:string="red";
  name:string="praveen";
m1(s:string){
  this.msg=s;
}
m2(){
  this.msg="";

}
m3(){
  console.log("event binding example")
}

  constructor() {

    

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  a:number=0;
  b:number=0;
  res:number=0;
  //create stylesheet
  mystyle={
    "color":"","visibility":"visible"
  }
  //create methods
  sum(){
    this.res=this.a+this.b;
    this.mystyle={"color":"green","visibility":"visible"}
  }
  mult(){
    this.res=this.a*this.b;
    this.mystyle={"color":"red","visibility":"visible"

    }
  }

  constructor() { }

  ngOnInit() {
  }

}

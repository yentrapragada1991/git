import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputtext:string="praveen kumar "
  isbold:boolean=true;
  
  fontsize:number=60;
  textcolour:string="green";
  //constructor  used
  user:any;
constructor(){
 this. user={
    name:"praveen",
    designation:"developer",
    place:"hyderabad",
    pincode:1234,
    
    phone:[
      9848616714,
      98486,
      4566
      
    ]
        

  }
 }
}



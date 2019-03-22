import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
user:any;
@Input('name') username:string;
  
  constructor() {
    
   }

  ngOnInit() {
    this.user={
      name:this.username,
      age:11,
      phone:[123456,567
        

      ]

    };
  }

}

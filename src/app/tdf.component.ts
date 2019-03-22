import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  firstname:string;
  lastname:string;
  msg:string;
  register(form1){
    if(form1.valid){
      this.msg=this.firstname+this.lastname;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

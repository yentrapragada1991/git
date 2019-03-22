import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  course:string[]=["java","c","mvc","testing","c++"]
  color:string="red";

  constructor() { }

  ngOnInit() {
  }

}

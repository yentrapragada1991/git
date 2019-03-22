import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  einfo={"name":"praveen kumar","job":"developEr","sal":10000.2546,"da":5000.3487,
 doj:new Date()
   }; 

  constructor() { }

  ngOnInit() {
  }

}

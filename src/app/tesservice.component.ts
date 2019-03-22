import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-tesservice',
  templateUrl: './tesservice.component.html',
  styleUrls: ['./tesservice.component.css']
})
export class TesserviceComponent implements OnInit {


  constructor(private pvc: TestService) {
  
  this.pvc.printToConsole("kumar")
   }

  ngOnInit() {
  }

}

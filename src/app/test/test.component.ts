import { Component, OnInit } from '@angular/core';
import{DomSanitizer,SafeResourceUrl}from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  prodid:string="p001";
  prodname:string="dell";
  prodpic:string="infosys-logo-JPEG.jpg";
  prodvideo:string=".\videos\TRA3106.3gp"
  safeurl:SafeResourceUrl;

  constructor(Sanitizer:DomSanitizer) {
    this.safeurl=Sanitizer.bypassSecurityTrustResourceUrl
    (this.prodvideo);
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  facultyinfo={"name":"praveen","course":["mvc","anjular"]};
  prods=[{"pid":"p001","name":"infosys","price":4000,"pic":"infosys-logo-JPEG.jpg"},
{"pid":"p002","name":"sample","price":3000,"pic":"sample.jpg"},
{"pid":"p003","name":"sample1","price":2000,"pic":"sample1.jpg"}]

  constructor() { }

  ngOnInit() {
  }

}

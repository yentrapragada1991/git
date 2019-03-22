import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf1',
  templateUrl: './mdf1.component.html',
  styleUrls: ['./mdf1.component.css']
})
export class Mdf1Component implements OnInit {
  myform:FormGroup;
  msg:string="";

  constructor() { 
    //buiding model with properties by applying vlidations
    this.myform=new FormGroup({
      firstname:new FormControl("",[Validators.required]),
      lastname:new FormControl("",[Validators.required]),
      emailid:new FormControl("",[Validators.email])
    },
    {updateOn:"change"}
    );//closing form group

      
    
  }//closing contructor
  register(){
    if(this.myform.valid){
      this.msg=this.myform.value.firstname+ ":"+
      this.myform.value.lastname+":"+this.myform.value.emailid;
    }
  }

  ngOnInit() {
  }

}

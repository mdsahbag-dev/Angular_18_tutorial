import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

  div1BgColor: string = 'bg-danger';
  isDiv2Active: boolean = false;
  num1:string = '';
  num2:string = '';
  isCheckBoxActive: boolean = false ;

  
   studentList: any[] = [
    {stdId:23,totalMarks:44, name:'Sameer', city:'Noida', isPersent: true},
    {stdId:21,totalMarks:84, name:'Anup', city:'Delhi', isPersent: false},
    {stdId:52,totalMarks:96, name:'Rinku', city:'Pune', isPersent: true},
    {stdId:33,totalMarks:54, name:'Tom', city:'Delhi', isPersent: false},
    {stdId:78,totalMarks:74, name:'John', city:'NYC', isPersent: false},

   ]


  addRedClass(){
    this.div1BgColor ='bg-danger'
  }
  addBlueClass(){
    this.div1BgColor = 'bg-primary'
  }
  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active
  }

}

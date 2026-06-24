import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule, RouterLinkActive],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {

   isDiv1Visible: boolean = true;
   isDiv2Visible: boolean = true;
   num1: string = '';
   num2: string = '';
   isActive: boolean = true;
   selectedState: string ='India';

   cityArray: string[] = ['Pune','Mumbai', 'Noida','Delhi']

   studentList: any[] = [
    {stdId:23, name:'Sameer', city:'Noida', isPersent: true},
    {stdId:21,name:'Anup', city:'Delhi', isPersent: false},
    {stdId:52,name:'Rinku', city:'Pune', isPersent: true},
    {stdId:33,name:'Tom', city:'Delhi', isPersent: false},
    {stdId:78,name:'John', city:'NYC', isPersent: false},

   ]


   showDiv1(){
    this.isDiv1Visible = true;
   }
   hideDiv1(){
    this.isDiv1Visible = false;
   }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible
  } 
   
  checkBoxShow(){
    this.isActive = !this.isActive
  }


}

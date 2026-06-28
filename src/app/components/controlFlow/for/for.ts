import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.html',
  styleUrl: './for.css',
})
export class For {

  dayNumber: string = '';

  cityArray: string[] = ['Pune','Mumbai', 'Noida','Delhi']

  studentList: any[] = [
    {stdId:23, name:'Sameer', city:'Noida', isPersent: true},
    {stdId:21,name:'Anup', city:'Delhi', isPersent: false},
    {stdId:52,name:'Rinku', city:'Pune', isPersent: true},
    {stdId:33,name:'Tom', city:'Delhi', isPersent: false},
    {stdId:78,name:'John', city:'NYC', isPersent: false},

  ]

}

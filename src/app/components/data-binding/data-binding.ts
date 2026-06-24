import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName : string = "Angular 18"
  inputType = "checkbox"
  rolNumber: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Mohammad Sahbag")

  constructor(){

  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {

  isDiv1Visible: boolean = true;
  isWarningVisible: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus:string = '';

  showDiv1(){
   this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isWarningVisible = !this.isWarningVisible;
  }


}

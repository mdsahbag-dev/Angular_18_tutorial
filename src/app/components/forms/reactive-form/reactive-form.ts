import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {


  studentForm: FormGroup = new FormGroup({

    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerms: new FormControl(),
    
  });

  formValue: any ;

  onSave(){
    this.formValue = this.studentForm.value
  }
  
}

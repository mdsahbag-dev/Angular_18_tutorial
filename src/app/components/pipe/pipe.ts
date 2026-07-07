import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from './custom-pipe/na-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {

  firstName: string = 'Angular 18';
  sentence: string = 'this is demo session'
  currentDate: Date = new Date();

  student: any = {
    name: 'Sahbag',
    city: 'Gurugram',
    empId: 669,
    state:''
  }

  currentTime: Observable<Date> = new Observable<Date>;

  constructor(){
     this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}

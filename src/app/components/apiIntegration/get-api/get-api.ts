import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {

  userList: any [] = [];

  constructor(private http: HttpClient){

  }

  getAllUser(){
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) =>{
      this.userList = res;
    },
     error =>{
      debugger;
       console.log("Something went wrong!");
    })
  }
}
 
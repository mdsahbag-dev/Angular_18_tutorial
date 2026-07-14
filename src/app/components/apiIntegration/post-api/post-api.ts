import { Component } from '@angular/core';
import { Alert } from "../../../reusableComponent/alert/alert";
import { MyButton } from '../../../reusableComponent/my-button/my-button';

@Component({
  selector: 'app-post-api',
  imports: [Alert, MyButton],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {}

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { StructuralDirective } from "./components/structural-directive/structural-directive";
import { EmployeeList } from "./components/employee-list/employee-list";
import { AddEmployee } from "./components/add-employee/add-employee";
import { AttributeDirective } from "./components/attribute-directive/attribute-directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}

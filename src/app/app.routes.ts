import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { DataBinding } from './components/data-binding/data-binding';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDirective } from './components/structural-directive/structural-directive';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { Ifelse } from './components/controlFlow/ifelse/ifelse';
import { For } from './components/controlFlow/for/for';
import { Switch } from './components/controlFlow/switch/switch';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployee
    },
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'emp-list',
        component:EmployeeList
    },
    {
        path:'structural-dir',
        component:StructuralDirective
    },
    {
        path:'attribute-dir',
        component:AttributeDirective
    },
      {
        path:'if-else',
        component:Ifelse
    },
      {
        path:'for',
        component:For
    },
      {
        path:'switch',
        component:Switch
    }
];

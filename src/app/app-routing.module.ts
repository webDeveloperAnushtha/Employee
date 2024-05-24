import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './features/employees/add-employee/add-employee.component';

const routes: Routes = [{  // path for routing
    path: 'admin/employees',
    component : EmployeeListComponent
},
   { path: 'admin/employees/add',
    component: AddEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

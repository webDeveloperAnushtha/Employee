import { Component } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  model: AddEmployeeRequest;

  constructor(private employeeService: EmployeeService ) {
    this.model = {
      EmpName:''
    };
  }

  onFormSubmit() {
    this.employeeService.addEmployee(this.model)
    .subscribe({
      next: (response)=>{
        console.log('This was success!!')
      }
    }
  )
    //console.log(this.model);
  }
}

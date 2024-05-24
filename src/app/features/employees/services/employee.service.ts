import { Injectable } from '@angular/core';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

  //method to add employee

  addEmployee(model:AddEmployeeRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7245/api/employees', model)
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  getEmployees() {
    return [
      {"id": 1, "name":"Andrew", "age": 32},
      {"id": 2, "name":"Felipe", "age": 23},
      {"id": 3, "name":"Bartolomeu", "age": 98},
      {"id": 4, "name":"Tiboqueu", "age": 874},
    ]
  }
}

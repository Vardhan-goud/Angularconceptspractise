import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
  constructor(private hc:HttpClient) { }

  employeedata:any[]=
  [{name:'vardhan',sal:2000},{name:'karthik',sal:40000},{name:'roham',sal:20330}];

  getempdata():any[]
  {
    return this.employeedata;
  }

  makehttprequest():Observable<any>
  {
    return this.hc.get<any>("https://reqres.in/api/users?page=2");
  }

}

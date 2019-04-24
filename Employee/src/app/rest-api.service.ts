import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  API_ENDPOINT = "http://localhost:8888/dummy.restapiexample.com/api/v1";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  addEmployee(emp){
    return this.http.post(this.API_ENDPOINT + "/addEmployee",emp);
  }

  getEmployee(){
    return this.http.get(this.API_ENDPOINT + "/getEmployee");
  }

  updateEmployee(employee){
    return this.http.put(this.API_ENDPOINT + "/updateEmployee/"+ employee.empId,employee);
  }

  deleteEmployee(empId){
    return this.http.delete(this.API_ENDPOINT + "/deleteEmployee/"+empId,this.httpOptions);
  }
}

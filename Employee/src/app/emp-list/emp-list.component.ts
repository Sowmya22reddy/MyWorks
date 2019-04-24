import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  Employees;
  constructor(private restApiService:RestApiService) { }

  ngOnInit() {

    this.restApiService.getEmployee().subscribe(
      (response) =>{
        this.Employees = response;
      }
    )

    

}
deleteEmployee(empId) {
  if (window.confirm('Are you sure, you want to delete?')){
    this.restApiService.deleteEmployee(empId).subscribe(data => {
      // this.Employees = data;
      this.ngOnInit();
    })
  }
} 

}

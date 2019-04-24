import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {

  addEmp: FormGroup;
  submitted = false;
  resp;
  // urls = URLHelper.urls;

  constructor(private formBuilder: FormBuilder,
              private restApiService:RestApiService) { }

  ngOnInit() {

    this.addEmp = this.formBuilder.group({
      empId:['',[Validators.required,Validators.minLength(3)]],
      empName: ['', [Validators.required, Validators.minLength(6)]],
      empDesignation: ['', Validators.required],
      empAddress:['',Validators.required]
      
  });

  }

  get f() { return this.addEmp.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addEmp.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProd.value));

    this.restApiService.addEmployee(this.addEmp.value).subscribe(
      (response) =>{
        this.resp = response;
        //alert(this.resp.message);
        
        console.log(this.resp);
        alert(this.resp.message);
                         
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}

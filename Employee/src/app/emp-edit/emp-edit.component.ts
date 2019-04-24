import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {

  empEdit: FormGroup;
  submitted = false;
  resp;

  constructor(private formBuilder: FormBuilder,
    private restApiService:RestApiService) { }

  ngOnInit() {

    this.empEdit = this.formBuilder.group({
      empId:['',[Validators.required,Validators.minLength(3)]],
      empName: ['', [Validators.required, Validators.minLength(6)]],
      empDesignation: ['', Validators.required],
      empAddress:['',Validators.required]
      
  });

  }

  get f() { return this.empEdit.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.empEdit.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProd.value));

    this.restApiService.updateEmployee(this.empEdit.value).subscribe(
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

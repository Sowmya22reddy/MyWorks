import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpListComponent } from './emp-list/emp-list.component';


const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'create-employee' },
{ path: 'emp-create', component: EmpCreateComponent },
{ path: 'emp-list', component: EmpListComponent },
{ path: 'emp-edit/:id', component: EmpEditComponent }  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

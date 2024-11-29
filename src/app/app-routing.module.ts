import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/secure.guard';

import { ChaussuresComponent } from './chaussures/chaussures.component';


const routes: Routes = [
  {path : "chaussures" , component : ChaussuresComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
   { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MissionlistComponent },
  { path: 'detail', component: MissiondetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CadToOthersComponent }  from './cad-to-others/cad-to-others.component';
import { OthersToCadComponent }  from './others-to-cad/others-to-cad.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadto', pathMatch: 'full' },
  { path: 'cadto', component: CadToOthersComponent },
  { path: 'tocad', component: OthersToCadComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

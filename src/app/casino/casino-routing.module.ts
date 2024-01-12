import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoManagerComponent } from './casino-manager/casino-manager.component';

const routes: Routes = [
  { path: '', component: CasinoManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasinoRoutingModule { }
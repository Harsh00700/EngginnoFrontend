import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachiningComponent } from './machining.component';

const routes: Routes = [{ path: '', component: MachiningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachiningRoutingModule { }

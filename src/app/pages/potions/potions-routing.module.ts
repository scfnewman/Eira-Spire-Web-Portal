import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotionsPage } from './potions.page';

const routes: Routes = [
  {
    path: '',
    component: PotionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotionsPageRoutingModule {}

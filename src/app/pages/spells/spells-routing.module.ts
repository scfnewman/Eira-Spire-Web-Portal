import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpellsPage } from './spells.page';

const routes: Routes = [
  {
    path: '',
    component: SpellsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellsPageRoutingModule {}

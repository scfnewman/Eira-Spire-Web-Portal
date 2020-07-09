import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellsPageRoutingModule } from './spells-routing.module';

import { SpellsPage } from './spells.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	SpellsPageRoutingModule,
	ComponentsModule,
	PipesModule
  ],
  declarations: [SpellsPage]
})
export class SpellsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotionsPageRoutingModule } from './potions-routing.module';

import { PotionsPage } from './potions.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PotionsPageRoutingModule,
		ComponentsModule,
		PipesModule
	],
	declarations: [PotionsPage]
})
export class PotionsPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSortPipe } from './skill-sort.pipe';



@NgModule({
	declarations: [
		SkillSortPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		SkillSortPipe
	]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSortPipe } from './skill-sort.pipe';
import { CategorySortPipe } from './category-sort.pipe';



@NgModule({
	declarations: [
		SkillSortPipe,
		CategorySortPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		SkillSortPipe,
		CategorySortPipe
	]
})
export class PipesModule { }

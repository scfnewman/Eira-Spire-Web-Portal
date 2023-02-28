import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSortPipe } from './skill-sort.pipe';
import { CategorySortPipe } from './category-sort.pipe';
import { PageSortPipe } from './page-sort.pipe';
import { CharacterSortPipe } from './character-sort.pipe';



@NgModule({
	declarations: [
		SkillSortPipe,
		CategorySortPipe,
  		PageSortPipe,
   	 	CharacterSortPipe,
	],
	imports: [
		CommonModule
	],
	exports: [
		SkillSortPipe,
		CategorySortPipe,
		PageSortPipe,
		CharacterSortPipe
	]
})
export class PipesModule { }

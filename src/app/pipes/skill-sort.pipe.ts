import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'skillSort',
	pure: false
})
export class SkillSortPipe implements PipeTransform {

	transform(_Skills: any[], ...Args: any[]): any {
		if (!_Skills) return null;

		return _Skills.sort((a, b) => {
			if (a.Name > b.Name) return 1;
			if (a.Name == b.Name) return 0;
			return -1;
		})
	}

}

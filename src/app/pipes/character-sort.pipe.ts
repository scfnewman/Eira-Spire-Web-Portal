import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'characterSort'
})
export class CharacterSortPipe implements PipeTransform {

	transform(_Characters: any[], ...args: any[]): any {
		if(!_Characters) return null;

		return _Characters.sort((a, b) => {
			if(a.Alive == b.Alive && a.Retired == b.Retired) {
				if(a.Name > b.Name) return 1;
				if(a.Name == b.Name) return 0;
				if(a.Name < b.Name) return -1;
			} else {
				if(a.Alive && !b.Alive) return -1;
				if(!a.Alive && b.Alive) return 1;

				if(a.Retired && !b.Retired) return 1;
				if(!a.Retired && b.Retired) return -1;
			}
		})
	}

}

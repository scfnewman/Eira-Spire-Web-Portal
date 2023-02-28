import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pageSort'
})
export class PageSortPipe implements PipeTransform {

	transform(_Pages: any, ...args: any[]): any {
		if (!_Pages) return null;

		return _Pages.sort((a, b) => {
			if (a.Category == b.Category) {
				if (a.Title > b.Title) return 1;
				if (a.Title == b.Title) return 0;
				if (a.Title < b.Title) return -1;
			} else {
				if (a.Category > b.Category) return 1;
				if (a.Category == b.Category) return 0;
				if (a.Category < b.Category) return -1;
			}
		})
	}

}

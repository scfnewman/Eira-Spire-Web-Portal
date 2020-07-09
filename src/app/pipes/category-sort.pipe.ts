import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySort'
})
export class CategorySortPipe implements PipeTransform {

  transform(_Categories: any, ...Args: any[]): any {
	if(!_Categories) return null;
	
	return _Categories.sort((a,b) => {
		if(a > b) return 1;
		if(a==b) return 0;
		if(a < b) return -1;
	});
  }

}

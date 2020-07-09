import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-potion-category-popover',
	templateUrl: './potion-category-popover.component.html',
	styleUrls: ['./potion-category-popover.component.scss'],
})
export class PotionCategoryPopoverComponent implements OnInit {

	PotionCategories: any[];

	constructor(
		public _DataService: DataService,
		public _PopCtrl: PopoverController
	) { 
		this.PotionCategories = [];

		this._DataService.PotionData.forEach(Potion => {
			if(!this.PotionCategories.find(Category => {
				if(Potion.Category == Category) return true;
			})) this.PotionCategories.push(Potion.Category);
		});
	}

	ngOnInit() { }

	Select(_Potion) {
		this._PopCtrl.dismiss(_Potion)
	}

	Close() {
		this._PopCtrl.dismiss();
	}

}

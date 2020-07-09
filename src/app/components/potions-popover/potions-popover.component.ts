import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-potions-popover',
  templateUrl: './potions-popover.component.html',
  styleUrls: ['./potions-popover.component.scss'],
})
export class PotionsPopoverComponent implements OnInit {

	constructor(
		public _DataService: DataService,
		public _PopCtrl: PopoverController
	) { }

	ngOnInit() { }

	Select(_Potion) {
		this._PopCtrl.dismiss(_Potion)
	}

	Close()
	{
		this._PopCtrl.dismiss();
	}

}

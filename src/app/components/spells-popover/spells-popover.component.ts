import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-spells-popover',
  templateUrl: './spells-popover.component.html',
  styleUrls: ['./spells-popover.component.scss'],
})
export class SpellsPopoverComponent implements OnInit {

	constructor(
		private _DataService: DataService,
		private _PopCtrl: PopoverController
	) { }

	ngOnInit() { }

	Select(_Spell) {
		this._PopCtrl.dismiss(_Spell)
	}

	Close()
	{
		this._PopCtrl.dismiss();
	}

}

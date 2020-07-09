import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-skills-popover',
	templateUrl: './skills-popover.component.html',
	styleUrls: ['./skills-popover.component.scss'],
})
export class SkillsPopoverComponent implements OnInit {

	constructor(
		public _DataService: DataService,
		public _PopCtrl: PopoverController
	) { }

	ngOnInit() { }

	Select(_Skill) {
		this._PopCtrl.dismiss(_Skill)
	}

	Close()
	{
		this._PopCtrl.dismiss();
	}

}

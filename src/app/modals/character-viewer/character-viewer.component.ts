import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-character-viewer',
	templateUrl: './character-viewer.component.html',
	styleUrls: ['./character-viewer.component.scss'],
})
export class CharacterViewerModal implements OnInit {

	@Input() Data;

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	IsMagician() : Boolean
	{
		if(this.Data.Skills && this.Data.Skills.filter(Skill => {
			if(Skill.Name == "Magician") return Skill;
		}).length > 0) return true;
		return false;
	}

	IsApothecary() : Boolean
	{
		if(this.Data.Skills && this.Data.Skills.filter(Skill => {
			if(Skill.Name == "Apothecary") return Skill;
		}).length > 0) return true;
		return false;
	}

}

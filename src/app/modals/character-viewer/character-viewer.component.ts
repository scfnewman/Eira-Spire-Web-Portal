import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-character-viewer',
	templateUrl: './character-viewer.component.html',
	styleUrls: ['./character-viewer.component.scss'],
})
export class CharacterViewerModal implements OnInit {

	@Input() Data;

	HideSummary: boolean = false;
	HideDeath: boolean = false;
	HideBackground: boolean = false;
	HideEarnedName: boolean = false;
	HideSections: boolean[] = [];

	constructor(
		private _ModalCtrl: ModalController,
		public _Sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.Data.Sections.forEach(() => this.HideSections.push(false));
	}

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

	GetRankString(Rank) {
		if (Rank == 0) return 'Thane';
		if (Rank == 1) return 'Head Adviser';
		if (Rank == 2) return 'Stone Circle';
		if (Rank == 3) return 'Guard';
		if (Rank == 4) return 'Citizen';
		if (Rank == 5) return 'Associate';
	}

}

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

}

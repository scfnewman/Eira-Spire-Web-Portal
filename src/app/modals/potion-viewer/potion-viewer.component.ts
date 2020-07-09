import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-potion-viewer',
	templateUrl: './potion-viewer.component.html',
	styleUrls: ['./potion-viewer.component.scss'],
})
export class PotionViewerModal implements OnInit {

	@Input() Data;

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

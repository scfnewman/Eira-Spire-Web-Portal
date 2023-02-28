import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-artisan-editor',
	templateUrl: './artisan-editor.component.html',
	styleUrls: ['./artisan-editor.component.scss'],
})
export class ArtisanEditorModal implements OnInit {

	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }

	Submit() {

	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

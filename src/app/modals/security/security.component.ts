import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-security',
	templateUrl: './security.component.html',
	styleUrls: ['./security.component.scss'],
})
export class SecurityModal implements OnInit {

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }


	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

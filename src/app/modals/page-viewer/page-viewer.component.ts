import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-page-viewer',
	templateUrl: './page-viewer.component.html',
	styleUrls: ['./page-viewer.component.scss'],
})
export class PageViewerModal implements OnInit {

	@Input() Data;

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

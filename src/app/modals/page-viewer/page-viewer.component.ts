import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-page-viewer',
	templateUrl: './page-viewer.component.html',
	styleUrls: ['./page-viewer.component.scss'],
})
export class PageViewerModal implements OnInit {

	@Input() Data;

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

}

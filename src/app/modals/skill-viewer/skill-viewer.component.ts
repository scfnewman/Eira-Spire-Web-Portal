import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-skill-viewer',
  templateUrl: './skill-viewer.component.html',
  styleUrls: ['./skill-viewer.component.scss'],
})
export class SkillViewerModal implements OnInit {

	@Input() Data;

	constructor(
		private _ModalCtrl: ModalController
	) { }

	ngOnInit() { }

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

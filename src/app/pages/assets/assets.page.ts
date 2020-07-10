import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { CharacterEditorModal } from '../../modals/character-editor/character-editor.component';
import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';
import { AssetEditorModal } from 'src/app/modals/asset-editor/asset-editor.component';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.page.html',
	styleUrls: ['./assets.page.scss'],
})
export class AssetsPage implements OnInit {

	constructor(
		public _DataService: DataService,
		public _ModalCtrl: ModalController,
		public _PopCtrl: PopoverController,
		public _AuthService: AuthService
	) { }

	ngOnInit() {
	}

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: AssetEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Asset",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

}

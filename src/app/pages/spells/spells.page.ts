import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';
import { SpellEditorModal } from 'src/app/modals/spell-editor/spell-editor.component';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {

	constructor(
		private _DataService: DataService,
		private _ModalCtrl: ModalController,
		private _PopCtrl: PopoverController,
		private _AuthService: AuthService
	) { }

	ngOnInit() {
	}

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: SpellEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Spell",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

}

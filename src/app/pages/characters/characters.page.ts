import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { CharacterEditorModal } from '../../modals/character-editor/character-editor.component';
import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.page.html',
	styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

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
			component: CharacterEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Character",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

	GetRankString(Rank) {
		if (Rank == 0) return 'Thane';
		if (Rank == 1) return 'Head Advisor';
		if (Rank == 2) return 'Stone Circle';
		if (Rank == 3) return 'Guard';
		if (Rank == 4) return 'Citizen';
		if (Rank == 5) return 'Associate';
	}

}

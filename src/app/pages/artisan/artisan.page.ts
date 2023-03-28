import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';
import { ArtisanEditorModal } from 'src/app/modals/artisan-editor/artisan-editor.component';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-artisan',
	templateUrl: './artisan.page.html',
	styleUrls: ['./artisan.page.scss'],
})
export class ArtisanPage implements OnInit {

	constructor(
		public _DataService: DataService,
		public _ModalCtrl: ModalController,
		public _PopCtrl: PopoverController,
		public _AuthService: AuthService,
		public _DatePipe: DatePipe
	) { }

	ngOnInit() {
	}

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: ArtisanEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Potion",
				"Data": _Data
			}
		})

		return await Pop.present();
	}


}

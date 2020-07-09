import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PageEditorModal } from 'src/app/modals/page-editor/page-editor.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.page.html',
	styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

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
			component: PageEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Page",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

}

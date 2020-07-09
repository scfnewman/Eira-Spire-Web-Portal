import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';
import { SkillEditorModal } from 'src/app/modals/skill-editor/skill-editor.component';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.page.html',
	styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

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
			component: SkillEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Skill",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { CharacterEditorModal } from 'src/app/modals/character-editor/character-editor.component';
import { PageEditorModal } from 'src/app/modals/page-editor/page-editor.component';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterViewerModal } from 'src/app/modals/character-viewer/character-viewer.component';
import { PageViewerModal } from 'src/app/modals/page-viewer/page-viewer.component';

@Component({
	selector: 'app-options-popover',
	templateUrl: './options-popover.component.html',
	styleUrls: ['./options-popover.component.scss'],
})
export class OptionsPopoverComponent implements OnInit {

	@Input() Type: string;
	@Input() Data: any;

	constructor(
		private _ModalCtrl: ModalController,
		private _PopCtrl: PopoverController,
		private _AuthService: AuthService
	) { }

	ngOnInit() { }

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: this.Type == "Character" ? CharacterEditorModal : this.Type == "Page" ? PageEditorModal : null,
			componentProps: {
				"Data": this.Data
			}
		})
		this._PopCtrl.dismiss();
		return await Modal.present();
	}

	async OpenViewer() {
		const Modal = await this._ModalCtrl.create({
			component: this.Type == "Character" ? CharacterViewerModal : this.Type == "Page" ? PageViewerModal : null,
			componentProps: {
				"Data": this.Data
			}
		})
		this._PopCtrl.dismiss();
		return await Modal.present();

	}

}

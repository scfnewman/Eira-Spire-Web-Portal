import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { CharacterEditorModal } from 'src/app/modals/character-editor/character-editor.component';
import { PageEditorModal } from 'src/app/modals/page-editor/page-editor.component';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterViewerModal } from 'src/app/modals/character-viewer/character-viewer.component';
import { PageViewerModal } from 'src/app/modals/page-viewer/page-viewer.component';
import { PotionEditorModal } from 'src/app/modals/potion-editor/potion-editor.component';
import { SkillEditorModal } from 'src/app/modals/skill-editor/skill-editor.component';
import { SpellEditorModal } from 'src/app/modals/spell-editor/spell-editor.component';
import { PotionViewerModal } from 'src/app/modals/potion-viewer/potion-viewer.component';
import { SkillViewerModal } from 'src/app/modals/skill-viewer/skill-viewer.component';
import { SpellViewerModal } from 'src/app/modals/spell-viewer/spell-viewer.component';
import { AssetEditorModal } from 'src/app/modals/asset-editor/asset-editor.component';
import { AssetViewerModal } from 'src/app/modals/asset-viewer/asset-viewer.component';

@Component({
	selector: 'app-options-popover',
	templateUrl: './options-popover.component.html',
	styleUrls: ['./options-popover.component.scss'],
})
export class OptionsPopoverComponent implements OnInit {

	@Input() Type: string;
	@Input() Data: any;

	constructor(
		public _ModalCtrl: ModalController,
		public _PopCtrl: PopoverController,
		public _AuthService: AuthService
	) { }

	ngOnInit() {
		console.log(this._AuthService.GetUserUID())
	 }

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: this.GetEditorType(this.Type),
			componentProps: {
				"Data": this.Data
			}
		})
		this._PopCtrl.dismiss();
		return await Modal.present();
	}

	async OpenViewer() {
		const Modal = await this._ModalCtrl.create({
			component: this.GetViewerType(this.Type),
			componentProps: {
				"Data": this.Data
			}
		})
		this._PopCtrl.dismiss();
		return await Modal.present();

	}

	GetEditorType(_Type) {
		switch (_Type) {
			case "Character": return CharacterEditorModal;
			case "Page": return PageEditorModal;
			case "Potion": return PotionEditorModal;
			case "Skill": return SkillEditorModal;
			case "Spell": return SpellEditorModal;
			case "Asset": return AssetEditorModal;
		}
	}

	GetViewerType(_Type) {
		switch (_Type) {
			case "Character": return CharacterViewerModal;
			case "Page": return PageViewerModal;
			case "Potion": return PotionViewerModal;
			case "Skill": return SkillViewerModal;
			case "Spell": return SpellViewerModal;
			case "Asset": return AssetViewerModal;
		}
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-potion-editor',
	templateUrl: './potion-editor.component.html',
	styleUrls: ['./potion-editor.component.scss'],
})
export class PotionEditorModal implements OnInit {

	@Input() Data: any;

	PotionData: FormGroup;
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DataService: DataService
	) { }

	ngOnInit() {
		this.PotionData = this._FormBuilder.group({
			Category: new FormControl((this.Data && this.Data.Category) ? this.Data.Category : null, Validators.required),
			Name: new FormControl((this.Data && this.Data.Name) ? this.Data.Name : null, Validators.required),
			Definition: new FormControl((this.Data && this.Data.Definition) ? this.Data.Definition : null, Validators.required),
			Form: new FormControl((this.Data && this.Data.Form) ? this.Data.Form : null, Validators.required),
			Description: new FormControl((this.Data && this.Data.Description) ? this.Data.Description : null, Validators.required),
			RoleplayingEffect: new FormControl((this.Data && this.Data.RoleplayingEffect) ? this.Data.RoleplayingEffect : null, Validators.required),
			MechanicalEffect: new FormControl((this.Data && this.Data.MechanicalEffect) ? this.Data.MechanicalEffect : null, Validators.required),
			Recipe: new FormControl((this.Data && this.Data.Recipe) ? this.Data.Recipe : null, Validators.required),
			Notes: new FormControl((this.Data && this.Data.Notes) ? this.Data.Notes : null)
		})
	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	Submit() {
		if (this.PotionData.valid) {
			this.Error = false;
			let Data = this.PotionData.value;

			let Details = {
				Category: Data.Category,
				Name: Data.Name,
				Definition: Data.Definition,
				Form: Data.Form,
				Description: Data.Description,
				RoleplayingEffect: Data.RoleplayingEffect,
				MechanicalEffect: Data.MechanicalEffect,
				Recipe: Data.Recipe,
				Notes: Data.Notes,
				PageID: this.Data ? this.Data.PageID : Data.Name.replace(/\s/g, "-").toUpperCase()
			}

			if (this.Data) {
				this._DataService.UpdatePotion(Details);
			}
			else {
				this._DataService.AddPotion(Details);
			}

			this.DismissModal();
		}
		else {
			this.Error = true;
		}
	}
}

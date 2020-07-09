import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-spell-editor',
	templateUrl: './spell-editor.component.html',
	styleUrls: ['./spell-editor.component.scss'],
})
export class SpellEditorModal implements OnInit {

	@Input() Data: any;

	SpellData: FormGroup;
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DataService: DataService
	) { }

	ngOnInit() {
		this.SpellData = this._FormBuilder.group({
			Category: new FormControl((this.Data && this.Data.Category) ? this.Data.Category : null, Validators.required),
			Name: new FormControl((this.Data && this.Data.Name) ? this.Data.Name : null, Validators.required),
			Cost: new FormControl((this.Data && this.Data.Cost) ? this.Data.Cost : null, Validators.required),
			Description: new FormControl((this.Data && this.Data.Description) ? this.Data.Description : null, Validators.required),
			Effects: new FormControl((this.Data && this.Data.Effects) ? this.Data.Effects : null, Validators.required)
		})
	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	Submit() {
		if (this.SpellData.valid) {
			this.Error = false;
			let Data = this.SpellData.value;

			let Details = {
				Category: Data.Category,
				Name: Data.Name,
				Cost: Data.Cost,
				Description: Data.Description,
				Effects: Data.Effects,
				PageID: this.Data ? this.Data.PageID : Data.Name.replace(/\s/g, "-").toUpperCase()
			}

			if (this.Data) {
				this._DataService.UpdateSpell(Details);
			}
			else {
				this._DataService.AddSpell(Details);
			}

			this.DismissModal();
		}
		else {
			this.Error = true;
		}
	}

}

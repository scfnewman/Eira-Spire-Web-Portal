import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-skill-editor',
	templateUrl: './skill-editor.component.html',
	styleUrls: ['./skill-editor.component.scss'],
})
export class SkillEditorModal implements OnInit {

	@Input() Data: any;

	SkillData: FormGroup;
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DataService: DataService
	) { }

	ngOnInit() {
		this.SkillData = this._FormBuilder.group({
			Category: new FormControl((this.Data && this.Data.Category) ? this.Data.Category : null, Validators.required),
			Name: new FormControl((this.Data && this.Data.Name) ? this.Data.Name : null, Validators.required),
			Cost: new FormControl((this.Data && this.Data.Cost) ? this.Data.Cost : null, Validators.required),
			Description: new FormControl((this.Data && this.Data.Description) ? this.Data.Description : null, Validators.required),
		})
	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	Submit() {
		if (this.SkillData.valid) {
			this.Error = false;
			let Data = this.SkillData.value;

			let Details = {
				Category: Data.Category,
				Name: Data.Name,
				Cost: Data.Cost,
				Description: Data.Description,
				PageID: (this.Data && this.Data.PageID) ? this.Data.PageID : Data.Name.replace(/\s/g, "-").toUpperCase(),
				LastUpdate: Date.now()
			}

			if (this.Data && this.Data.PageID) {
				this._DataService.UpdateSkill(Details);
			}
			else {
				this._DataService.AddSkill(Details);
			}

			this.DismissModal();
		}
		else {
			this.Error = true;
		}
	}

}

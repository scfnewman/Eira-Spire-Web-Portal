import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-artisan-editor',
	templateUrl: './artisan-editor.component.html',
	styleUrls: ['./artisan-editor.component.scss'],
})
export class ArtisanEditorModal implements OnInit {

	@Input() Data: any;

	ArtisanData: FormGroup;
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DataService: DataService
	) {
		this.ArtisanData = this._FormBuilder.group({
			Name: new FormControl((this.Data && this.Data.Name) ? this.Data.Name : null, Validators.required),
			Form: new FormControl((this.Data && this.Data.Form) ? this.Data.Form : null, Validators.required),
			Type: new FormControl((this.Data && this.Data.Type) ? this.Data.Type : null, Validators.required),
			Description: new FormControl((this.Data && this.Data.Description) ? this.Data.Description : null, Validators.required),
		})
	}

	ngOnInit() { }

	Submit() {

	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

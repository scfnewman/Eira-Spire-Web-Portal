import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-asset-editor',
	templateUrl: './asset-editor.component.html',
	styleUrls: ['./asset-editor.component.scss'],
})
export class AssetEditorModal implements OnInit {

	@Input() Data: any;

	AssetData;
	AssetSections: FormGroup[] = [];
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DataService: DataService,
		private _DatePipe: DatePipe,
		private _AuthService: AuthService
	) { }

	ngOnInit() {
		this.AssetData = this._FormBuilder.group({
			Name: new FormControl((this.Data && this.Data.Name) ? this.Data.Name : null, Validators.required),
			Dimensions: new FormControl((this.Data && this.Data.Dimensions) ? this.Data.Dimensions : null),
			Count: new FormControl((this.Data && this.Data.Count) ? this.Data.Count : null, Validators.required),
			Owner: new FormControl((this.Data && this.Data.Owner) ? this.Data.Owner : null, Validators.required),
			Description: new FormControl((this.Data && this.Data.Description) ? this.Data.Description : null)
		})

		if (this.Data && this.Data.Sections) {
			this.Data.Sections.forEach(Section => {
				this.AddSection(Section.Heading, Section.Body);
			})
		}
	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	Submit() {
		if (this.AssetData.valid && this.CheckSectionValidity()) {
			this.Error = false;
			let Data = this.AssetData.value;

			let SectionsData: any[] = [];

			this.AssetSections.forEach(Section => {
				let Data = {
					Heading: Section.value.Heading,
					Body: Section.value.Body
				}

				SectionsData.push(Data);
			})

			let Details = {
				Name: Data.Name,
				Dimensions: Data.Dimensions,
				Count: Data.Count,
				Owner: Data.Owner,
				Description: Data.Description,
				Sections: SectionsData,
				PageID: this.Data ? this.Data.PageID : (Data.Name + "-" + Data.Dimensions + "-" + Data.Owner).replace(/\s/g, "-").toUpperCase(),
				LastEdited: this._DatePipe.transform(Date.now(), 'd/M/yy, h:mm a'),
				LastEditedBy: this._AuthService.GetUserFullName(),
				Creator: this.Data ? this.Data.Creator : this._AuthService.GetUserUID()
			}

			if (this.Data) {
				this._DataService.UpdateAsset(Details);
			}
			else {
				this._DataService.AddAsset(Details);
			}

			this.DismissModal();
		}
		else {
			this.Error = true;
		}
	}

	AddSection(_Heading?: string, _Body?: string) {
		let NewSection = this._FormBuilder.group({
			Heading: new FormControl(_Heading ? _Heading : null, Validators.required),
			Body: new FormControl(_Body ? _Body : null)
		})

		this.AssetSections.push(NewSection);
	}

	DeleteSection(_Index) {
		let del = this.AssetSections[_Index];

		this.AssetSections = this.AssetSections.filter(Section => {
			if (Section != del) return Section;
		})
	}

	CheckSectionValidity(): boolean {
		let ValidSections: boolean = true;

		this.AssetSections.forEach(Section => {
			if (Section.invalid) ValidSections = false;;
		});

		return ValidSections;
	}

}

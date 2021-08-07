import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
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
	SpellSections: FormGroup[] = [];
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _AlertCtrl: AlertController,
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
		if (this.SpellData.valid && this.CheckSectionValidity()) {
			this.Error = false;
			let Data = this.SpellData.value;

			let SectionsData: any[] = [];

			this.SpellSections.forEach(Section => {
				let Data = {
					Heading: Section.value.Heading,
					Body: Section.value.Body
				}

				SectionsData.push(Data);
			})

			let Details = {
				Category: Data.Category,
				Name: Data.Name,
				Cost: Data.Cost,
				Description: Data.Description,
				Effects: Data.Effects,
				Sections: SectionsData,
				PageID: this.Data ? this.Data.PageID : Data.Name.replace(/\s/g, "-").toUpperCase(),
				LastUpdate: Date.now()
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

	AddSection(_Heading?: string, _Body?: string) {
		let NewSection = this._FormBuilder.group({
			Heading: new FormControl(_Heading ? _Heading : null, Validators.required),
			Body: new FormControl(_Body ? _Body : null)
		})

		this.SpellSections.push(NewSection);
	}

	DeleteSection(_Index) {
		this._AlertCtrl.create({
			header: 'Warning!',
			message: 'Are you sure you wish to delete this section?',
			buttons: [{
				text: 'No',
				role: 'cancel'
			},
			{
				text: 'Yes',
				role: 'success',
				handler: () => {
					let del = this.SpellSections[_Index];

					this.SpellSections = this.SpellSections.filter(Section => {
						if (Section != del) return Section;
					})
				}
			}]
		}).then(_Alert => {
			_Alert.present();
		})

	}

	AddRitualSections() {
		this.AddSection('Performing the Ritual');
		this.AddSection('Additional Targets');
		this.AddSection('Option');
		this.AddSection('Common Elements');
	}

	CheckSectionValidity(): boolean {
		let ValidSections: boolean = true;

		this.SpellSections.forEach(Section => {
			if (Section.invalid) ValidSections = false;;
		});

		return ValidSections;
	}

}

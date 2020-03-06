import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-page-editor',
	templateUrl: './page-editor.component.html',
	styleUrls: ['./page-editor.component.scss'],
})
export class PageEditorModal implements OnInit {

	@Input() Data;

	PageData: FormGroup;
	PageSections: FormGroup[] = [];
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _DatePipe: DatePipe,
		private _DataService: DataService
	) { }

	ngOnInit() {
		this.PageData = this._FormBuilder.group({
			Title: new FormControl((this.Data && this.Data.Title) ? this.Data.Title : null, Validators.required),
			Subtitle: new FormControl((this.Data && this.Data.Subtitle) ? this.Data.Subtitle : null),
			Category: new FormControl((this.Data && this.Data.Category) ? this.Data.Category : null, Validators.required),
			Author: new FormControl((this.Data && this.Data.Author) ? this.Data.Author : null, Validators.required),
			Body: new FormControl((this.Data && this.Data.Body) ? this.Data.Body : null)
		});

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
		if (this.PageData.valid && this.CheckSectionValidity) {
			let SectionsData: any[] = [];

			let PageID = (this.Data && this.Data.PageID) ? this.Data.PageID : (this.PageData.value.Title + "|" + this.PageData.value.Author + "|" + this._DatePipe.transform(Date.now())).replace(/\s/g, "-").toUpperCase();

			this.PageSections.forEach(Section => {
				let Data = {
					Heading: Section.value.Heading,
					Body: Section.value.Body
				}

				SectionsData.push(Data);
			})

			let Data = {
				Title: this.PageData.value.Title,
				Subtitle: this.PageData.value.Subtitle,
				Category: this.PageData.value.Category,
				Author: this.PageData.value.Author,
				Body: this.PageData.value.Body,
				LastEdited: this._DatePipe.transform(Date.now(), 'short'),
				Sections: SectionsData,
				PageID: PageID
			}

			if (this.Data) this._DataService.UpdatePage(Data);
			else this._DataService.AddPage(Data);

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

		this.PageSections.push(NewSection);
	}

	DeleteSection(_Index) {
		let del = this.PageSections[_Index];

		this.PageSections = this.PageSections.filter(Section => {
			if (Section != del) return Section;
		})
	}

	CheckSectionValidity(): boolean {
		let ValidSections: boolean = true;

		this.PageSections.forEach(Section => {
			if (Section.invalid) ValidSections = false;;
		});

		return ValidSections;
	}

}

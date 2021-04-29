import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorModal implements OnInit {

	@Input() Data;

	Schema = {
		fields: [{
			type: "heading",
			content: "Details"
		}, {
			type: "text",
			name: "Name"
		}, {
			type: "textarea",
			name: "Content"
		}, {
			type: "select",
			name: "Select",
			options: ["one", "two", "three"]
		}, {
			type: "checkbox",
			name: "Check"
		}]
	};

	Form: FormGroup;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder
	) {
		this.Form = _FormBuilder.group({
			content: new FormControl(null)
		});
	}

	ngOnInit() {
		this.Form.controls.content.valueChanges.subscribe(Data => {
			console.log(Data);
		})
	 }

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

}

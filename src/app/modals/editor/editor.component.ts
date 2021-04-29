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

	Error: string;

	Schema = {
		fields: [{
			type: "heading",
			content: "Details",
			required: false
		}, {
			type: "text",
			name: "Name",
			required: false
		}, {
			type: "textarea",
			name: "Content",
			required: false
		}, {
			type: "select",
			name: "Select",
			options: ["one", "two", "three"],
			required: false
		}, {
			type: "checkbox",
			name: "Check",
			required: false
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

	Submit() {
		
	}
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-materials',
	templateUrl: './materials.page.html',
	styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

	constructor(
		public _DataService: DataService
	) { }

	ngOnInit() {
	}

	Save(_Event, _Material) {
	}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(
		private _ActivatedRoute: ActivatedRoute,
		private _AuthService: AuthService,
		private _Platform: Platform
	) { }

	ngOnInit() {
	}
}

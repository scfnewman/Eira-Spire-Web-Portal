import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public appPages = [
		{
			title: 'Home',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'Characters',
			url: '/characters',
			icon: 'list'
		},
		{
			title: 'Pages',
			url: '/pages',
			icon: 'book'
		},
		{
			title: 'Help',
			url: '/help',
			icon: 'help'
		}
		// {
		// 	title: 'Players',
		// 	url: '/players',
		// 	icon: 'person'
		// },
		// {
		// 	title: 'Settings',
		// 	url: '/settings',
		// 	icon: 'settings'
		// }
	];

	constructor(
		private _AuthService: AuthService
	) {}

	ngOnInit() { }
}

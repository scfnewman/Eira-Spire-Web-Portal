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
			icon: 'people'
		},
		{
			title: 'Pages',
			url: '/pages',
			icon: 'book'
		},
		{
			title: 'Skills',
			url: '/skills',
			icon: 'brush'
		},
		{
			title: 'Potions',
			url: '/potions',
			icon: 'flask'
		},
		{
			title: 'Spells',
			url: '/spells',
			icon: 'flame'
		},
		{
			title: 'Assets',
			url: '/assets',
			icon: 'home'
		},
		{
			title: 'Help',
			url: '/help',
			icon: 'help'
		}
		// {
		// 	title: 'Settings',
		// 	url: '/settings',
		// 	icon: 'settings'
		// }
	];

	constructor(
		public _AuthService: AuthService
	) {}

	ngOnInit() { }
}

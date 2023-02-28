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
			icon: 'home',
			lines: 'full'
		},
		{
			title: 'Characters',
			url: '/characters',
			icon: 'people',
			lines: 'none'
		},
		{
			title: 'Pages',
			url: '/pages',
			icon: 'book',
			lines: 'full'
		},
		{
			title: 'Skills',
			url: '/skills',
			icon: 'brush',
			lines: 'none'
		},
		{
			title: 'Potions',
			url: '/potions',
			icon: 'flask',
			lines: 'none'
		},
		{
			title: 'Spells',
			url: '/spells',
			icon: 'flame',
			lines: 'none'
		},
		{
			title: 'Artisan Recipes',
			url: '/artisan',
			icon: 'hammer',
			lines: 'none'
		},
		{
			title: 'Materials & Herbs',
			url: '/materials',
			icon: 'leaf',
			lines: 'full'
		},
		{
			title: 'Help',
			url: '/help',
			icon: 'help',
			lines: 'none'
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

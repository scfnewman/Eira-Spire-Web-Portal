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
			icon: 'dice'
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
	) {
		let url = "https://nerdbot.com/wp-content/uploads/2020/01/1r3fn3-e1579990017466.jpg";
		let height = 499;
		let width = 786;

		// Inside here we already have the dimensions of the loaded image
		var style = [
			// Hacky way of forcing image's viewport using `font-size` and `line-height`
			'font-size: 1px;',
			'line-height: ' + height % 2 + 'px;',

			// Hacky way of forcing a middle/center anchor point for the image
			'padding: ' + height * .5 + 'px ' + width * .5 + 'px;',

			// Set image dimensions
			'background-size: ' + width + 'px ' + height + 'px;',

			// Set image URL
			'background: url(' + url + ') no-repeat;'

		].join(' ');

		// notice the space after %c
		console.log('%c ', style);
	}

	ngOnInit() { }
}

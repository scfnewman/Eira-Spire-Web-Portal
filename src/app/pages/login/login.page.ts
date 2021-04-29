import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityModal } from 'src/app/modals/security/security.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	Login: FormGroup;
	Error: string;

	constructor(
		private _MenuCtrl: MenuController,
		private _AuthService: AuthService,
		private _FormBuilder: FormBuilder,
		private _Router: Router,
		private _ModalCtrl: ModalController
	) {
		this.Login = this._FormBuilder.group({
			email: new FormControl(null, Validators.compose([Validators.email, Validators.required])),
			password: new FormControl(null, Validators.required)
		})
	}

	ngOnInit() {
	}

	ionViewWillEnter() {
		this._MenuCtrl.enable(false);
	}

	ionViewWillLeave() {
		this._MenuCtrl.enable(true);
	}

	async Submit() {
		if (this.Login.valid) {
			this._AuthService.Login(this.Login.value.email, this.Login.value.password)
				.then(result => {
					this._AuthService.GetUserData()
						.then(result => {
							this.Login.reset();
							this._Router.navigate(['/home']);
						});
				})
				.catch(err => {
					this.Error = "Invalid username or password";
					this.Login.controls.password.reset();
				})
		}
		else {
			this.Error = "Please enter your login details"
		}
	}

	OpenSecurityModal() {
		this._ModalCtrl.create({
			component: SecurityModal
		}).then(_Modal => {
			_Modal.present();
		})
	}

}

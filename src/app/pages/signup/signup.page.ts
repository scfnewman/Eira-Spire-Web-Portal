import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	Signup: FormGroup
	Error: string

	constructor(
		private _MenuCtrl: MenuController,
		private _FormBuilder: FormBuilder,
		private _AuthService: AuthService,
		private _Router: Router
	) {
		this.Signup = _FormBuilder.group({
			FirstName: new FormControl(null, Validators.required),
			LastName: new FormControl(null, Validators.required),
			Email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
			EmailConfirm: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
			Password: new FormControl(null, Validators.required),
			PasswordConfirm: new FormControl(null, Validators.required)
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

	Submit() {
		if (this.Signup.valid) {
			this.Error = "";
			if (this.EmailAndPasswordConfirmed()) {
				this._AuthService.Signup(
					this.Signup.value.FirstName,
					this.Signup.value.LastName,
					this.Signup.value.Email,
					this.Signup.value.Password
				)
				.then(res => {
					this._AuthService.GetUserData()
						.then(result => {
							this.Signup.reset();
							this._Router.navigate(['/home']);
						});
				})
				.catch(err => {
					this.Error = err;
				})
			}
		}
		else {
			this.Error = "All fields are required";
		}
	}

	EmailAndPasswordConfirmed(): boolean {
		if (this.Signup.value.Email != this.Signup.value.EmailConfirm) {
			this.Error = "Email Addresses don't match";
			return false;
		}

		if (this.Signup.value.Password != this.Signup.value.PasswordConfirm) {
			this.Error = "Passwords don't match";
			return false;
		}

		return true;
	}

}

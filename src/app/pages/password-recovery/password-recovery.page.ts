import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

	Recovery: FormGroup;
	Error: string;
	Response: string;

	constructor(
		private _MenuCtrl: MenuController,
		private _AuthService: AuthService,
		private _FormBuilder: FormBuilder,
		private _Router: Router
	) {
		this.Recovery = this._FormBuilder.group({
			email: new FormControl(null, Validators.compose([Validators.email, Validators.required]))
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
		if (this.Recovery.valid) {
			this._AuthService.RequestResetEmail(this.Recovery.value.email);
			this.Recovery.reset();
			this.Response = "An email has been sent to the account, if it exists"
			this.Error = null;
		}
		else {
			this.Error = "Please enter your email address"
			this.Response = null;
		}


	}

}

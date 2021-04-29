import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	Auth: Observable<firebase.User>
	UserData: any;
	UserInfo: any;

	constructor(
		private _FirebaseAuth: AngularFireAuth,
		private _DataService: DataService
	) {
		this.Auth = _FirebaseAuth.authState;
	}

	async Login(_Email: string, _Password: string): Promise<any> {
		return new Promise<void>((resolve, reject) => {
			this._FirebaseAuth.signInWithEmailAndPassword(_Email, _Password)
				.then(value => {
					resolve();
				})
				.catch(err => {
					reject(false);
				});
		})

	}

	async Signup(_FirstName: string, _LastName: string, _Email: string, _Password: string): Promise<any> {
		return new Promise<void>((resolve, reject) => {
			this._FirebaseAuth.createUserWithEmailAndPassword(_Email, _Password)
				.then(res => {
					firebase.auth().currentUser.sendEmailVerification()
						.then(res => {
							let Data = {
								FirstName: _FirstName,
								LastName: _LastName,
								Verified: false
							}

							this._DataService.AddUserData(firebase.auth().currentUser.uid, Data);
							resolve()
						})
						.catch(err => {
							reject(err);
						});
				})
				.catch(err => {
					reject(err);
				});
		})
	}

	Logout() {
		this.UserData = null;
		this.UserInfo = null;

		this._FirebaseAuth.signOut();
	}

	isAuthenticated() {
		if (firebase.auth().currentUser)
			return true;
		else
			return false;
	}

	GetUserInfo(): Promise<any> {
		return new Promise<void>((resolve) => {
			this.UserInfo = firebase.auth().currentUser;
			resolve();
		});
	}

	GetUserData(): Promise<any> {
		return new Promise<void>((resolve) => {
			this._DataService.GetUserData(firebase.auth().currentUser.uid).subscribe(Data => {
				this.UserData = Data;
				resolve();
			})
		});
	}

	RequestResetEmail(Email) {
		firebase.auth().sendPasswordResetEmail(Email)
			.then(Res => { })
			.catch(Err => { })
	}
}

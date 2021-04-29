import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	UserData: any;
	UserInfo: any;

	constructor(
		private _FirebaseAuth: AngularFireAuth,
		private _DataService: DataService
	) { }

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
					this._FirebaseAuth.currentUser.then(User => {
						User.sendEmailVerification()
							.then(res => {
								let Data = {
									FirstName: _FirstName,
									LastName: _LastName,
									Verified: false
								}
								
								this._DataService.AddUserData(User.uid, Data);
								resolve()
							})
							.catch(err => {
								reject(err);
							});
					})
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
		return new Promise<void>((resolve, reject) => {
			this._FirebaseAuth.currentUser.then(User => {
				if (User) resolve();
				else reject();
			}).catch(err => {
				reject();
			})
		})

	}

	GetUserInfo(): Promise<any> {
		return new Promise<void>((resolve) => {
			this._FirebaseAuth.currentUser.then(User => {
				this.UserInfo = User;
				resolve();
			});

		});
	}

	GetUserData(): Promise<any> {
		return new Promise<void>((resolve) => {
			this.GetUserInfo().then(() => {
				this._DataService.GetUserData(this.UserInfo.uid).subscribe(Data => {
					this.UserData = Data;
					resolve();
				})
			});


			
		});
	}

	RequestResetEmail(Email) {
		this._FirebaseAuth.sendPasswordResetEmail(Email);
	}
}

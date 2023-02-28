import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
	) {
	}

	async Login(_Email: string, _Password: string): Promise<any> {
		return new Promise<void>((resolve, reject) => {
			this._FirebaseAuth.setPersistence("local").then(() => {
				this._FirebaseAuth.signInWithEmailAndPassword(_Email, _Password)
					.then(value => {
						resolve();
					})
					.catch(err => {
						reject(false);
					});
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
			this._FirebaseAuth.onAuthStateChanged((_User) => {
				this.GetUserData().then(() => {
					resolve();
				});				
			}, (_Error => {
				reject();
			}));
		})

	}

	GetUserInfo(): Promise<any> {
		return new Promise<void>((resolve) => {
			this._FirebaseAuth.onAuthStateChanged(_User => {
				this.UserInfo = _User;
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

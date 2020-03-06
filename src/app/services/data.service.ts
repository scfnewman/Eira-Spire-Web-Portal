import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	CharacterData;
	SkillData;
	PageData;
	UserData;

	constructor(
		private _FireStore: AngularFirestore
	) {
		this._FireStore.collection<any>('characters').valueChanges().subscribe(data => {
			this.CharacterData = data;
		});
		this._FireStore.collection<any>('skills').valueChanges().subscribe(data => {
			this.SkillData = data;
		});
		this._FireStore.collection<any>('pages').valueChanges().subscribe(data => {
			this.PageData = data;
		})
		this._FireStore.collection<any>('users').valueChanges().subscribe(data => {
			this.UserData = data;
		})
	}

	AddUserData(UID, Data) {
		this._FireStore.doc<any>('users/' + UID).set(Data);
	}

	GetUserData(UID) {
		return this._FireStore.doc<any>('users/' + UID).valueChanges();
	}

	UpdateUserData(UID, Data)
	{
		this._FireStore.doc<any>('users/' + UID).update(Data);
	}

	AddCharacter(Data) {
		this._FireStore.doc<any>('characters/' + Data.PageID).set(Data);
	}

	UpdateCharacter(Data) {
		this._FireStore.doc<any>('characters/' + Data.PageID).update(Data);
	}

	AddPage(Data) {
		this._FireStore.doc<any>('pages/' + Data.PageID).set(Data);
	}

	UpdatePage(Data) {
		this._FireStore.doc<any>('pages/' + Data.PageID).update(Data);
	}
}

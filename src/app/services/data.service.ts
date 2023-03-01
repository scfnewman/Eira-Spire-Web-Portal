import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	CharacterData;
	SkillData;
	PotionData;
	SpellData;
	PageData;
	UserData;
	AssetData;
	ArtisanData;
	MaterialData;

	constructor(
		private _FireStore: AngularFirestore
	) {
		this._FireStore.collection<any>('characters').valueChanges().subscribe(data => {
			this.CharacterData = data;
		});
		this._FireStore.collection<any>('skills').valueChanges().subscribe(data => {
			this.SkillData = data;
		});
		this._FireStore.collection<any>('potions').valueChanges().subscribe(data => {
			this.PotionData = data;
		});
		this._FireStore.collection<any>('spells').valueChanges().subscribe(data => {
			this.SpellData = data;
		});
		this._FireStore.collection<any>('pages').valueChanges().subscribe(data => {
			this.PageData = data;
		})
		this._FireStore.collection<any>('users').valueChanges().subscribe(data => {
			this.UserData = data;
		})
		this._FireStore.collection<any>('assets').valueChanges().subscribe(data => {
			this.AssetData = data;
		})
		this._FireStore.collection<any>('artisan').valueChanges().subscribe(data => {
			this.ArtisanData = data;
		})
		this._FireStore.collection<any>('materials').valueChanges().subscribe(data => {
			this.MaterialData = data;
		})
	}

	AddUserData(UID, Data) {
		this._FireStore.doc<any>('users/' + UID).set(Data);
	}

	GetUserData(UID) {
		return this._FireStore.doc<any>('users/' + UID).valueChanges();
	}

	UpdateUserData(UID, Data) {
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

	AddPotion(Data) {
		this._FireStore.doc<any>('potions/' + Data.PageID).set(Data);
	}

	UpdatePotion(Data) {
		this._FireStore.doc<any>('potions/' + Data.PageID).update(Data);
	}

	AddSkill(Data) {
		this._FireStore.doc<any>('skills/' + Data.PageID).set(Data);
	}

	UpdateSkill(Data) {
		this._FireStore.doc<any>('skills/' + Data.PageID).update(Data);
	}

	AddSpell(Data) {
		this._FireStore.doc<any>('spells/' + Data.PageID).set(Data);
	}

	UpdateSpell(Data) {
		this._FireStore.doc<any>('spells/' + Data.PageID).update(Data);
	}

	AddAsset(Data) {
		this._FireStore.doc<any>('assets/' + Data.PageID).set(Data);
	}

	UpdateAsset(Data) {
		this._FireStore.doc<any>('assets/' + Data.PageID).update(Data);
	}

	AddArtisanRecipe(Data) {
		this._FireStore.doc<any>('artisan/' + Data.PageID).set(Data);
	}

	UpdateArtisanRecipe(Data) {
		this._FireStore.doc<any>('artisan/' + Data.PageID).update(Data);
	}

	AddMaterial(Data) {
		this._FireStore.doc<any>('materials/' + Data.PageID).set(Data);
	}

	UpdateMaterial(Data) {
		this._FireStore.doc<any>('materials/' + Data.PageID).update(Data);
	}

	/**
	 * Removes the inline styling applied when copying directly from a Wiki Page
	 * @param _String String to remove styling from
	 * @returns Cleaned string
	 */
	RemovePreformatting(_String: string) {
		_String = _String.replace(/style="margin: 0px 0px 22px; font-size: 16px; line-height: 24px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #ffffff;"/gm, "");
		_String = _String.replace(/style="color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; background-color: #ffffff;"/gm, "");
		_String = _String.replace(/style="color: #0088cc; text-decoration-line: none; position: relative; z-index: 100;"/gm, "");
		return _String.replace(/style="color: #0088cc; text-decoration-line: none; position: relative; z-index: 100; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; background-color: #ffffff;"/gm, "");
	}
}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillsPopoverComponent } from 'src/app/components/skills-popover/skills-popover.component';
import { PotionsPopoverComponent } from 'src/app/components/potions-popover/potions-popover.component';
import { SpellsPopoverComponent } from 'src/app/components/spells-popover/spells-popover.component';
import { DataService } from 'src/app/services/data.service';
import { PotionCategoryPopoverComponent } from 'src/app/components/potion-category-popover/potion-category-popover.component';

@Component({
	selector: 'app-character-editor',
	templateUrl: './character-editor.component.html',
	styleUrls: ['./character-editor.component.scss'],
})
export class CharacterEditorModal implements OnInit {

	@Input() Data: any;

	CharacterData: FormGroup;
	CharacterSkills: Array<any>;
	CharacterPotions: Array<any>;
	CharacterSpells: Array<any>;
	CharacterSections: FormGroup[] = [];
	Error: boolean = false;

	constructor(
		private _ModalCtrl: ModalController,
		private _FormBuilder: FormBuilder,
		private _PopCtrl: PopoverController,
		private _DataService: DataService
	) { }

	ngOnInit() {
		this.CharacterData = this._FormBuilder.group({
			Alive: new FormControl((this.Data && this.Data.Alive) ? this.Data.Alive : false),
			Retired: new FormControl((this.Data && this.Data.Retired) ? this.Data.Retired : false),
			FirstName: new FormControl((this.Data && this.Data.FirstName) ? this.Data.FirstName : null, Validators.required),
			LastName: new FormControl((this.Data && this.Data.LastName) ? this.Data.LastName : null),
			EarnedName: new FormControl((this.Data && this.Data.EarnedName) ? this.Data.EarnedName : null),
			Identity: new FormControl((this.Data && this.Data.Identity) ? this.Data.Identity : null, Validators.required),
			Age: new FormControl((this.Data && this.Data.Age) ? this.Data.Age : null, Validators.required),
			Gender: new FormControl((this.Data && this.Data.Gender) ? this.Data.Gender : null, Validators.required),
			Lineage: new FormControl((this.Data && this.Data.Lineage) ? this.Data.Lineage : null, Validators.required),
			Virtue: new FormControl((this.Data && this.Data.Virtue) ? this.Data.Virtue : null, Validators.required),
			Rank: new FormControl((this.Data && this.Data.Rank) ? this.Data.Rank.toString() : null, Validators.required),
			Summary: new FormControl((this.Data && this.Data.Summary) ? this.Data.Summary : null),
			Background: new FormControl((this.Data && this.Data.Details.Background) ? this.Data.Details.Background : null),
			NameStory: new FormControl((this.Data && this.Data.Details.NameStory) ? this.Data.Details.NameStory : null),
			DeathStory: new FormControl((this.Data && this.Data.DeathStory) ? this.Data.DeathStory : null),
		})
		this.CharacterSkills = this.Data && this.Data.Skills ? this.Data.Skills : null;
		this.CharacterPotions = this.Data && this.Data.Potions ? this.Data.Potions : null;
		this.CharacterSpells = this.Data && this.Data.Spells ? this.Data.Spells : null;

		if (this.Data && this.Data.Sections) {
			this.Data.Sections.forEach(Section => {
				this.AddSection(Section.Heading, Section.Body);
			})
		}
	}

	DismissModal() {
		this._ModalCtrl.dismiss();
	}

	async OpenSkillsPopover() {
		const Pop = await this._PopCtrl.create({
			component: SkillsPopoverComponent
		})

		await Pop.present();

		return await Pop.onDidDismiss().then(Data => {
			if (Data) {
				if (!this.CharacterSkills)
					this.CharacterSkills = new Array<any>();

				for (let _Skill of this.CharacterSkills) {
					if (_Skill.Name == Data.data.Name) {
						_Skill.Count += 1;
						return;
					}
				}

				let _Skill = {
					"Name": Data.data.Name,
					"Count": 1
				}

				this.CharacterSkills.push(_Skill);
			}
		})
	}

	RemoveSkill(_Skill) {
		this.CharacterSkills = this.CharacterSkills.filter(Skill => {
			if (Skill != _Skill) return Skill;
			else {
				Skill.Count--;
				if (Skill.Count > 0) return Skill;
			}
		})
	}

	async OpenPotionsPopover() {
		const Pop = await this._PopCtrl.create({
			component: PotionsPopoverComponent
		})

		await Pop.present();

		return await Pop.onDidDismiss().then(Data => {
			if (Data) {
				if (!this.CharacterPotions)
					this.CharacterPotions = new Array<any>();

				let _Potion = {
					"Name": Data.data.Name
				}

				if(!this.CharacterPotions.find(_P => {
					if(_P.Name == _Potion.Name) return true
				})) this.CharacterPotions.push(_Potion);
			}
		})
	}

	async OpenPotionCategories() {
		const Pop = await this._PopCtrl.create({
			component: PotionCategoryPopoverComponent
		})

		await Pop.present();

		return await Pop.onDidDismiss().then(Data => {
			console.log(Data);
			if (Data) {
				if (!this.CharacterPotions)
					this.CharacterPotions = new Array<any>();
				
				this._DataService.PotionData.forEach(Potion => {
					if (Potion.Category == Data.data) {
						if (!this.CharacterPotions.find(_P => {
							if (Potion.Name == _P.Name) return true;
						})) this.CharacterPotions.push({"Name": Potion.Name});
					}
				});
			}
		})
	}

	RemovePotion(_Potion) {
		this.CharacterPotions = this.CharacterPotions.filter(Potion => {
			if (Potion != _Potion) return Potion;
		})
	}

	async OpenSpellsPopover() {
		const Pop = await this._PopCtrl.create({
			component: SpellsPopoverComponent
		})

		await Pop.present();

		return await Pop.onDidDismiss().then(Data => {
			if (Data) {
				if (!this.CharacterSpells)
					this.CharacterSpells = new Array<any>();

				let _Spell = {
					"Name": Data.data.Name
				}

				if(!this.CharacterSpells.find(_S => {
					if(_S.Name == _Spell.Name) return true;
				})) this.CharacterSpells.push(_Spell);
			}
		})
	}

	RemoveSpell(_Spell) {
		this.CharacterSpells = this.CharacterSpells.filter(Spell => {
			if (Spell != _Spell) return Spell;
		})
	}

	IsMagician(): Boolean {
		if (this.CharacterSkills && this.CharacterSkills.filter(Skill => {
			if (Skill.Name == "Magician") return Skill;
		}).length > 0) return true;
		return false;
	}

	IsApothecary(): Boolean {
		if (this.CharacterSkills && this.CharacterSkills.filter(Skill => {
			if (Skill.Name == "Apothecary") return Skill;
		}).length > 0) return true;
		return false;
	}

	Submit() {
		if (this.CharacterData.valid && this.CheckSectionValidity()) {
			this.Error = false;
			let Data = this.CharacterData.value;

			let SectionsData: any[] = [];

			this.CharacterSections.forEach(Section => {
				let Data = {
					Heading: Section.value.Heading,
					Body: Section.value.Body
				}

				SectionsData.push(Data);
			})

			let Details = {
				Alive: Data.Alive,
				Retired: Data.Retired,
				FirstName: Data.FirstName,
				LastName: Data.LastName,
				EarnedName: Data.EarnedName,
				Identity: Data.Identity,
				Age: Data.Age,
				Gender: Data.Gender,
				Lineage: Data.Lineage,
				Virtue: Data.Virtue,
				Rank: Data.Rank,
				Summary: Data.Summary,
				Details: {
					Background: Data.Background,
					NameStory: Data.NameStory
				},
				DeathStory: Data.DeathStory,
				Skills: this.CharacterSkills,
				Potions: this.CharacterPotions,
				Spells: this.CharacterSpells,
				Sections: SectionsData,
				PageID: this.Data ? this.Data.PageID : (Data.FirstName + "-" + Data.LastName).toUpperCase()
			}

			if (this.Data) {
				this._DataService.UpdateCharacter(Details);
			}
			else {
				this._DataService.AddCharacter(Details);
			}

			this.DismissModal();
		}
		else {
			this.Error = true;
		}
	}

	AddSection(_Heading?: string, _Body?: string) {
		let NewSection = this._FormBuilder.group({
			Heading: new FormControl(_Heading ? _Heading : null, Validators.required),
			Body: new FormControl(_Body ? _Body : null)
		})

		this.CharacterSections.push(NewSection);
	}

	DeleteSection(_Index) {
		let del = this.CharacterSections[_Index];

		this.CharacterSections = this.CharacterSections.filter(Section => {
			if (Section != del) return Section;
		})
	}

	CheckSectionValidity(): boolean {
		let ValidSections: boolean = true;

		this.CharacterSections.forEach(Section => {
			if (Section.invalid) ValidSections = false;;
		});

		return ValidSections;
	}
}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SkillsPopoverComponent } from 'src/app/components/skills-popover/skills-popover.component';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-character-editor',
	templateUrl: './character-editor.component.html',
	styleUrls: ['./character-editor.component.scss'],
})
export class CharacterEditorModal implements OnInit {

	@Input() Data: any;

	CharacterData: FormGroup;
	CharacterSkills: Array<any>;
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
			LastName: new FormControl((this.Data && this.Data.LastName) ? this.Data.LastName : null, Validators.required),
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

	Submit() {
		if (this.CharacterData.valid) {
			this.Error = false;
			let Data = this.CharacterData.value;

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
				PageID: this.Data ? this.Data.PageID : Data.FirstName + Data.LastName
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
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthGuard } from './services/auth.guard'

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { OptionsPopoverComponent } from './components/options-popover/options-popover.component';
import { SkillsPopoverComponent } from './components/skills-popover/skills-popover.component';
import { PotionCategoryPopoverComponent } from './components/potion-category-popover/potion-category-popover.component';
import { PotionsPopoverComponent } from './components/potions-popover/potions-popover.component';
import { SpellsPopoverComponent } from './components/spells-popover/spells-popover.component';
import { HeaderComponent } from './components/header/header.component';

import { PageEditorModal } from './modals/page-editor/page-editor.component';
import { PageViewerModal } from './modals/page-viewer/page-viewer.component';
import { CharacterViewerModal } from './modals/character-viewer/character-viewer.component';
import { PotionEditorModal } from './modals/potion-editor/potion-editor.component'
import { SkillEditorModal } from './modals/skill-editor/skill-editor.component'
import { SpellEditorModal } from  './modals/spell-editor/spell-editor.component'
import { PotionViewerModal } from './modals/potion-viewer/potion-viewer.component'
import { SkillViewerModal } from './modals/skill-viewer/skill-viewer.component'
import { SpellViewerModal } from './modals/spell-viewer/spell-viewer.component'
import { CharacterEditorModal } from './modals/character-editor/character-editor.component';
import { AssetEditorModal } from './modals/asset-editor/asset-editor.component';
import { AssetViewerModal } from './modals/asset-viewer/asset-viewer.component';
import { EditorModal } from './modals/editor/editor.component';
import { SecurityModal } from './modals/security/security.component';

import { AssetsPage } from './pages/assets/assets.page';
import { CharactersPage } from './pages/characters/characters.page';
import { HelpPage } from './pages/help/help.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { PagesPage } from './pages/pages/pages.page';
import { PasswordRecoveryPage } from './pages/password-recovery/password-recovery.page';
import { PlayersPage } from './pages/players/players.page';
import { PotionsPage } from './pages/potions/potions.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SignupPage } from './pages/signup/signup.page';
import { SkillsPage } from './pages/skills/skills.page';
import { SpellsPage } from './pages/spells/spells.page';

import { PipesModule } from './pipes/pipes.module';
import { DatePipe } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseConfig } from 'src/credentials';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
	declarations: [
		AppComponent,
		AssetsPage,
		CharactersPage,
		HelpPage,
		HomePage,
		LoginPage,
		PagesPage,
		PasswordRecoveryPage,
		PlayersPage,
		PotionsPage,
		SettingsPage,
		SignupPage,
		SkillsPage,
		SpellsPage,

		CharacterEditorModal,
		PageEditorModal,
		PotionEditorModal,
		SkillEditorModal,
		SpellEditorModal,
		AssetEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		PotionViewerModal,
		SkillViewerModal,
		SpellViewerModal,
		AssetViewerModal,
		EditorModal,
		SecurityModal,

		HeaderComponent,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
		PotionsPopoverComponent,
		SpellsPopoverComponent,
		PotionCategoryPopoverComponent
	],
	entryComponents: [
		AssetsPage,
		CharactersPage,
		HelpPage,
		HomePage,
		LoginPage,
		PagesPage,
		PasswordRecoveryPage,
		PlayersPage,
		PotionsPage,
		SettingsPage,
		SignupPage,
		SkillsPage,
		SpellsPage,

		CharacterEditorModal,
		PageEditorModal,
		PotionEditorModal,
		SkillEditorModal,
		SpellEditorModal,
		AssetEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		PotionViewerModal,
		SkillViewerModal,
		SpellViewerModal,
		AssetViewerModal,
		EditorModal,
		SecurityModal,

		HeaderComponent,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
		PotionsPopoverComponent,
		SpellsPopoverComponent,
		PotionCategoryPopoverComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		PipesModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(FirebaseConfig),
		AngularFirestoreModule,
		EditorModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		AuthGuard,
		AuthService,
		DataService,
		DatePipe,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

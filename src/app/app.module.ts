import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FirebaseConfig } from './../credentials';

import { AuthGuard } from './services/auth.guard'

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { CharacterEditorModal } from './modals/character-editor/character-editor.component';
import { OptionsPopoverComponent } from './components/options-popover/options-popover.component';
import { SkillsPopoverComponent } from './components/skills-popover/skills-popover.component';
import { PageEditorModal } from './modals/page-editor/page-editor.component';
import { DatePipe } from '@angular/common';
import { CharacterViewerModal } from './modals/character-viewer/character-viewer.component';
import { PageViewerModal } from './modals/page-viewer/page-viewer.component';
import { PotionsPopoverComponent } from './components/potions-popover/potions-popover.component';
import { SpellsPopoverComponent } from './components/spells-popover/spells-popover.component';
import { PipesModule } from './pipes/pipes.module';
import { PotionEditorModal } from './modals/potion-editor/potion-editor.component'
import { SkillEditorModal } from './modals/skill-editor/skill-editor.component'
import { SpellEditorModal } from  './modals/spell-editor/spell-editor.component'
import { PotionViewerModal } from './modals/potion-viewer/potion-viewer.component'
import { SkillViewerModal } from './modals/skill-viewer/skill-viewer.component'
import { SpellViewerModal } from './modals/spell-viewer/spell-viewer.component'

@NgModule({
	declarations: [
		AppComponent,
		CharacterEditorModal,
		PageEditorModal,
		PotionEditorModal,
		SkillEditorModal,
		SpellEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		PotionViewerModal,
		SkillViewerModal,
		SpellViewerModal,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
		PotionsPopoverComponent,
		SpellsPopoverComponent,
	],
	entryComponents: [
		CharacterEditorModal,
		PageEditorModal,
		PotionEditorModal,
		SkillEditorModal,
		SpellEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		PotionViewerModal,
		SkillViewerModal,
		SpellViewerModal,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
		PotionsPopoverComponent,
		SpellsPopoverComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		AngularFireModule.initializeApp(FirebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule,
		PipesModule
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

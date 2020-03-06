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
import { SkillSortPipe } from './pipes/skill-sort.pipe';
import { PageEditorModal } from './modals/page-editor/page-editor.component';
import { DatePipe } from '@angular/common';
import { CharacterViewerModal } from './modals/character-viewer/character-viewer.component';
import { PageViewerModal } from './modals/page-viewer/page-viewer.component';


@NgModule({
	declarations: [
		AppComponent,
		CharacterEditorModal,
		PageEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
		SkillSortPipe,
	],
	entryComponents: [
		CharacterEditorModal,
		PageEditorModal,
		CharacterViewerModal,
		PageViewerModal,
		OptionsPopoverComponent,
		SkillsPopoverComponent,
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

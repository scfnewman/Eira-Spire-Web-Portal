import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { ArtisanPage } from './pages/artisan/artisan.page';
import { AuthGuard } from './services/auth.guard';
import { MaterialsPage } from './pages/materials/materials.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomePage,
		canActivate: [AuthGuard]
	},
	{
		path: 'logout',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'characters',
		component: CharactersPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'pages',
		component: PagesPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'players',
		component: PlayersPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'settings',
		component: SettingsPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'signup',
		component: SignupPage
	},
	{
		path: 'password-recovery',
		component: PasswordRecoveryPage
	},
	{
		path: 'help',
		component: HelpPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'potions',
		component: PotionsPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'spells',
		component: SpellsPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'skills',
		component: SkillsPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'assets',
		component: AssetsPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'artisan',
		component: ArtisanPage,
		canActivate: [AuthGuard]
	},
	{
		path: 'materials',
		component: MaterialsPage,
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

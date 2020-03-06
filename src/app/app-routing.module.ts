import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'logout',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
	},
	{
		path: 'characters',
		loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersPageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesPageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'players',
		loadChildren: () => import('./pages/players/players.module').then(m => m.PlayersPageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'signup',
		loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
	},
  {
    path: 'password-recovery',
    loadChildren: () => import('./pages/password-recovery/password-recovery.module').then( m => m.PasswordRecoveryPageModule)
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

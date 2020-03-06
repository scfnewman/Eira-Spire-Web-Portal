import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private _AuthService: AuthService,
		private _Router: Router
	) { }

	async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const Authed = await this._AuthService.isAuthenticated();

		if (Authed)
			return true;
		else {
			this._Router.navigate(['/login']);
			return false
		}

	}

}

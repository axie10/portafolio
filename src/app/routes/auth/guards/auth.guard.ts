import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard {

    constructor(
        private authService: AuthService
    ) { }

    //funcion para tarer el estado de la autenticacion
    private checkAuth(): boolean | Observable<boolean> {
        return this.authService.checkAuthentication();
    }

    //FUNCION PARA PROTEGER LAS RUTAS 
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuth();
    }
    
    //FUNCION PARA PROTEGER LAS RUTAS 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuth();
    }
    
}
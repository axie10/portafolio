import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanMatchFn, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({providedIn: 'root'})

export class LoginGuard {

    constructor(
        private authService: AuthService,
        private router:Router
    ) { }
    
    private pag404(): boolean {
        if(sessionStorage.getItem('token')){
            this.router.navigate(['/home']);
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    
    //FUNCION PARA PROTEGER LAS RUTAS 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.pag404();
    }
    
}
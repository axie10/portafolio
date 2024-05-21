import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/auth/user.interface';


@Injectable({providedIn: 'root'})
export class AuthService {

    private user: User [] = [];

    constructor(
        private router: Router
    ) {
        //guardamos en el array user lo que tengamos en el localstorage y asi ya tenemos ese array con los datos que teniamos guardados
        this.user = JSON.parse(localStorage.getItem('user')!) || [];
    }

    //FUNCION GENERAL PARA DESPUES DE LAS ACCIONES PODEMOS GUARDAR EN LOCALSTORAGE CON LOS NUEVOS DATOS
    guardarEnLocalStorage(value: User []){
        localStorage.setItem('user', JSON.stringify(value));
    }

    //REGISTRO DE USUARO NUEVO
    crearusuario(userNuevo: User): void {

        //comprobamos tanto el nombre de usuario para que no pueda haber dos iguales como el email para decirle que ya esta registrado
        for(let i = 0; i < this.user.length; i++){
            //SI EL USUARIO YA EXISTE LE AVISO QUE TIENE QUE REGISTRARSE CON OTRO NOMBRE DE USUARIO
            if(this.user[i].user === userNuevo.user){
                alert('Debe ingresar otro nombre de usuario');
                return;
            //SI EL EMAIL YA EXISTE YA LE DECIMOS QUE AY ESTA REGISTRADO
            } else if(this.user[i].email === userNuevo.email){
                alert('El email ya esta registrado');
                return;
            } 
        }
        //si no esta registrado ni el nombre de usuario ni el email lo añadimos al array user
        this.user.push(userNuevo);
        //y guardamos en el localstorage el array user con el nuevo usuario
        this.guardarEnLocalStorage(this.user);
        alert('Usuario creado correctamente');
        //y lo mandamos al login para que pueda hacer logearse
        this.router.navigate(['/login']);

    }

    //LOGIN
    validarUsuario(usuario:string, contraseña:string): boolean | string{

        //recorremos el array user para ver si el usuario y la contraseña que hemos introducido coinciden con alguno de los que tenemos en el array user
        for(let i = 0; i < this.user.length; i++){
            if(this.user[i].user === usuario && this.user[i].contraseña === contraseña){
                alert('Bienvenido');
                //guardamos en el sessionstorage el usuario que coincide con el usuario para poder usarlo en el app.component.ts
                sessionStorage.setItem('user', this.user[i].user);
                //guardamos en el sessionstorage el token que es el id del usuario que coincide con el usuario y la contraseña
                sessionStorage.setItem('token', this.user[i].id);
                return true;
            }
        }
        alert('Usuario o contraseña incorrectos');
        return false;
    }

    //LOGOUT
    logout(){
        sessionStorage.clear();
    }

    //COMPROBAR SI ESTA AUTENTICADO EL USUARIO Y CADA VEZ QUE RECARGE LA PAGINA O SE VAYA A OTRA PAGINA NO TENGAMOS QUE HACER LOGIN DE NUEVO
    checkAuthentication(): Observable<boolean> {

        
        return new Observable<boolean>(observer => {

            //comprobamos si hay un token en el sessionstorage 
            if(sessionStorage.getItem('token')){
                
                //y si lo hay lo guardamos en la variable token
                const token = sessionStorage.getItem('token');

                //recorremos el array user para ver si el token que tenemos en el sessionstorage coincide con alguno de los tokens que tenemos en el array user
                for(let i = 0; i < this.user.length; i++){
                    if(this.user[i].id === token){
                        
                        //y le decimos al observer que es true
                        observer.next(true);
                        //y salimos de la funcion
                        return;
                    }
                }
                //si no coincide el token con ninguno de los que tenemos en el array user le decimos que no esta autenticado y lo mandamos al login
                this.router.navigate(['/login']);
                observer.next(false);

            } else {
                //si no hay token en el sessionstorage lo mandamos al login
                this.router.navigate(['/login']);
                observer.next(false);
            }
        });
    }
    
}


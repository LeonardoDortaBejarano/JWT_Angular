import { Injectable, inject } from "@angular/core";

import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { AuthResponse } from "../models/AuthResponse";
import { jwtDecode } from "jwt-decode";

@Injectable( {providedIn : "root"})

export class AuthService {

     private token:string = ""

     constructor(private httpClient: HttpClient/* ,private cookieService: CookieService */){

     }

     public getToken():string | null{
      return sessionStorage.getItem("token");
     }

     isLogged():boolean {
        if (this.getToken() != null) {
          return true
        }
        return false;
      }

    isTokenValid():boolean {
      let dateTime = new Date();
      if (this.getToken() != null) {
        const decodeToken = jwtDecode(this.getToken()!);
        if (decodeToken.exp! < new Date().getTime() ) {
          return true;
        } 
      }
      return false;
    }
    
    
    

    logout(): void {
      sessionStorage.removeItem("token");
    }


     public register(user: string, password: string):void {
      console.log(`user ${user}   password ${password}`)
       this.httpClient.post<AuthResponse>("http://localhost:8080/auth/register",{username : user ,password: password }).subscribe(data => {
         this.token = data.token;
         sessionStorage.setItem("token",this.token);
     });
    }

    public login(user: string, password: string):void {
      console.log(`user ${user}   password ${password}`)
       this.httpClient.post<AuthResponse>("http://localhost:8080/auth/login",{username : user ,password: password }).subscribe((data) => {
         this.token = data.token;
         sessionStorage.setItem("token",this.token);
     });
    }

    public postResource():Observable<Object> {
      let respond: string = "";
       return this.httpClient.post<string>("http://localhost:8080/resources","");
     
    }

}
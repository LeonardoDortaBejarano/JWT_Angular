import { Injectable } from "@angular/core";

@Injectable( {providedIn : "root"})
export class LoginService {
     private token:string = "1"

     public getToken():string{
        return this.token;
     }

}
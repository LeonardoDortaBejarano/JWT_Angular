import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   constructor(private authService: AuthService){}
  
  isLogged() :boolean{
    return this.authService.isLogged() 
  }

  logout():void {
    console.log("sadasd")
    return this.authService.logout() 
  }
}

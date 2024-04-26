import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ResourcesComponent } from '../resources/resources.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent]
})
export class HomeComponent {

}

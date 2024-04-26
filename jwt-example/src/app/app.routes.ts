import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResourceLoader } from '@angular/compiler';
import { ResourcesComponent } from './resources/resources.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path : "login", component : LoginComponent},
    {path : "register", component : RegisterComponent},
    {path : "resoucers", component : ResourcesComponent, canActivate :[authGuard]},
];

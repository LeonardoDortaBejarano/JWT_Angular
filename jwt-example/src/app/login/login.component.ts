import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService:AuthService = inject(AuthService);

  public login(f: NgForm){
    this.authService.login(f.value.user, f.value.password);
  }
  





}

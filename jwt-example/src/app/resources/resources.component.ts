import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  private data: string ="";

  constructor(private authServices:AuthService) {
  }

  postResource() {
    this.authServices.postResource().subscribe((data:any) => {
      this.data = data.value;
    });
  }

  getData():string{
    return this.data
  }

}

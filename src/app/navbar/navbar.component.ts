import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AboutComponent,ContactComponent,RouterOutlet,RouterLink,ProductListComponent,PagenotfoundComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




export const routes: Routes = [
    {'path': '',component:ProductListComponent},
    {'path': 'about',component:AboutComponent},
    {'path': 'contact',component:ContactComponent},
    {'path': 'cart',component:CartComponent},
    {'path':  '**',component:PagenotfoundComponent}
];

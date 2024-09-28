import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../cart.service';
import { MobileappComponent } from '../mobileapp/mobileapp.component';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FooterComponent,MobileappComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cartService = inject(CartService);

  categorylist = ['pizza','Burgers','Frenchfries',]

  productList : any[] = [
    {name: 'Classic Veg Burgers  ', rating:3,price:100, discount:25, id: 1,imageUrl:"assets/images/burger 1.jpg", isOffer:true,category:'Burgers',availableQty:0},
    {name: 'Chicken Burgers',rating:5, price:200,discount:20,  id: 2,imageUrl:"assets/images/burger.jpg",isOffer:true,category:'Burgers',availableQty:2},
    {name: 'Burgers',rating:4, price:300, discount:15, id: 3,imageUrl:"assets/images/burger 2.jpg",isOffer:false,category:'Burgers'},
    {name: 'Cheese Corn Pizza', price:400, discount:25, id: 4,imageUrl:"assets/images/pizza.jpg",isOffer:false,category:'pizza'},

    {name: 'Classic Margherita Pizza ',rating:3, price:100, discount:25, id: 1,imageUrl:"assets/images/pizza 1.jpg", isOffer:true,category:'pizza',availableQty:0},
    {name: 'Chicken Pizza', rating:4,price:200,discount:20,  id: 2,imageUrl:"assets/images/pizza 2.jpg",isOffer:true,category:'pizza',availableQty:2},
    {name: 'French fries',  rating:3,price:300, discount:15, id: 3,imageUrl:"assets/images/fries.jpg",isOffer:false,category:'Frenchfries'},
    {name: 'Cheese French fries',rating:5, price:400, discount:25, id: 4,imageUrl:"assets/images/fries 1.jpg",isOffer:false,category:'Frenchfries'},
  ];
 filteredProducts:any[]=[];
 selectedCategory:string = '';
 constructor(){
  this.filteredProducts = this.productList;
 }

 filterCategor(category: string){
  this.selectedCategory = category;
  const product = this.productList.filter(prod=> prod.category == category);
  this.filteredProducts = product;
 }

  addToCart(product:any){
    this.cartService.addToCart(product);
  }



}
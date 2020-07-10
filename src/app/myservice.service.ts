import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  products:Product[]=[];
  cart:Product[]=[];

  constructor() {
    this.products.push(new Product("item1",`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,"../assets/images/gmbat.jpg","company1",40));
    this.products.push(new Product("item2",`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,"../assets/images/gmbat.jpg","company2",40));
   }

   getProducts(){
     return this.products
   }

   addItemToCart(item){
    this.cart.push(item);
   }

   getCartItems(){
     return this.cart;
   }

   removeItemFromCart(item){
    this.cart.splice(item,1);
   }
}

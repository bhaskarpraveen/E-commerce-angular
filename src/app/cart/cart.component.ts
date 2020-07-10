import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Product[];
  total:number;

  constructor(private myservice:MyserviceService) { }

  calculateTotal(){
    this.total=0;
    this.cart.forEach(item=>{
      this.total=this.total+item.price
    })
  }

  removeItem(item){
    this.myservice.removeItemFromCart(item);
    this.calculateTotal();

  }
  ngOnInit() {
    this.cart=this.myservice.getCartItems();
    this.calculateTotal();
  }

}

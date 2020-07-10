import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[];
  cart:Product[];
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.products=this.myservice.getProducts();
    this.cart=this.myservice.getCartItems();
  }
  handleAddToCart(item){
    this.myservice.addItemToCart(item)
  }

  handleCartButton(item){
    let findProduct =this.cart.find(product => product.name===item.name)
    return findProduct

  }

}

import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

interface Product{
    name:string,
    amount:number,
    max:number,
    price:number,
    unit:string
}

@Component({
    selector: 'app-lemonade',
    standalone: true,
    templateUrl: './lemonade.component.html',
    styleUrl: './lemonade.component.css',
    imports: [ProductComponent, CardComponent,CommonModule]
})
export class LemonadeComponent {
    products: Product[] =[
        {
            name:"Lemon Juice",
            price: 0.5,
            amount: 0,
            max:10,
            unit:"oz"
        },
        {
            name:"Sugar",
            price: 0.25,
            amount: 0,
            max:8,
            unit:"tsp"
        },
        {
            name:"Ice Cube",
            price: 0.05,
            amount: 0,
            max:12,
            unit:"cubes"
        }
    ]

    increment(productName:string){
        LemonadeComponent.bind(this)
        if(this.products.find(product=>product.name === productName)){
            this.products.map(product=>{
                if(product.name === productName){
                    product.amount<product.max?product.amount+=1:product.amount=product.max;
                }
            })
        }
    }

    decrement(productName: string){
        LemonadeComponent.bind(this)
        if(this.products.find(product=>product.name === productName)){
            this.products.map(product=>{
                if(product.name === productName){
                    product.amount>0?product.amount-=1:product.amount;
                }
            })
        }
    }

    logProds(){
        console.log(this.products)
    }
}

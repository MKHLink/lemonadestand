import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [ProductComponent]
})
export class CardComponent {

clicked(){
  console.log("Clicked");
}

}

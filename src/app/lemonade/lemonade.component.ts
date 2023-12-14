import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-lemonade',
    standalone: true,
    templateUrl: './lemonade.component.html',
    styleUrl: './lemonade.component.css',
    imports: [ProductComponent, CardComponent]
})
export class LemonadeComponent {

}

import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
    selector: 'app-lemonade',
    standalone: true,
    templateUrl: './lemonade.component.html',
    styleUrl: './lemonade.component.css',
    imports: [ProductComponent]
})
export class LemonadeComponent {

}

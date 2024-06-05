import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  items: number[] = [];

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.items.push(index);
    }
  }
}

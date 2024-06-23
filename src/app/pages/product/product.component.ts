import { Component } from '@angular/core';
import { ProductTableComponent } from './components/product-table/product-table.component';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductTableComponent, CardModule],
  templateUrl: './product.component.html',
})
export class ProductComponent { }

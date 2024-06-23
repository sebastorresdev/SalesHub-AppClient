import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table } from 'primeng/table'

import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {
  products!: Product[];
  searchValue: string | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
}

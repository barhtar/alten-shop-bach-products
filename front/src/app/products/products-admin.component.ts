import { Component, OnInit } from '@angular/core';
import { Product, ProductPayload } from './product.class';
import {PRODUCT_TABLE_CONF} from './products-admin-table.conf';
import { ProductsService } from './products.service';

import { BehaviorSubject } from 'rxjs';

import { BaseTableLoader } from 'app/shared/ui/table/base-table-loader.class';

import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent extends BaseTableLoader implements OnInit {

  public payload$: BehaviorSubject<ProductPayload> = new BehaviorSubject<ProductPayload>({products:[],total:0});
  public conf: CrudItemOptions[] = PRODUCT_TABLE_CONF;
  public entity = Product;

  constructor(
    private readonly productsService: ProductsService
  ) {
    super();
  }

  ngOnInit(): void {

    // Display data table
    this.productsService.getProducts().subscribe(products => 
    {
      this.payload$.next({products: products, total: products.length})
    });

  }

  public onDeleteProduct(ids: number[]): void {
    ids[0] && this.delete(ids[0]);
  }

  public onSave(product: Product): void {
    product.id ? this.update(product) : this.create(product);
  }

  private create(product: Product): void {
    this.productsService.create(product).subscribe({
      error: (err) => console.log('Error:', err), 
      next: () => this.ngOnInit(),
    }); 
  }

  private update(product: Product): void {
    this.productsService.update(product).subscribe({
      error: (err) => console.log('Error:', err), 
      next: () => this.ngOnInit(),
    }); 
  }

  private delete(id: number): void {

    this.productsService.delete(id).subscribe({
      error: (err) => console.log('Error:', err), 
      next: () => this.ngOnInit(),
    }); 
  }
}

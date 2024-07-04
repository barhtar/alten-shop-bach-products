import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private static productslist: Product[] = null;
    private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        if( ! ProductsService.productslist )
        {   
            return this.http.get<any>('http://localhost:3000/products');
        }
        else
        {
            this.products$.next(ProductsService.productslist);
        }
        return this.products$;
    }

    create(prod: Product): Observable<Product[]> {

        if( ! ProductsService.productslist )
            {
                return  this.http.post<any>(`http://localhost:3000/products`, prod);
            }
            else
            {
                this.products$.next(ProductsService.productslist);
            }
        
        return this.products$;
    }

    update(prod: Product): Observable<Product[]>{

        if( ! ProductsService.productslist )
            {
                return  this.http.patch<any>(`http://localhost:3000/products/${prod.id}`, prod);
            }
            else
            {
                this.products$.next(ProductsService.productslist);
            }
        
        return this.products$;
    }


    delete(id: number): Observable<Product[]>{
      
        if( ! ProductsService.productslist )
            {
                return  this.http.delete<any>(`http://localhost:3000/products/${id}`);
            }
            else
            {
                this.products$.next(ProductsService.productslist);
            }
        
        return this.products$;
    }
}
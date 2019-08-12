import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  filteredProducts:any[];
  subsciption : Subscription;

  constructor(private productService: ProductService) {
    this.subsciption = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  filter(query:string){
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
      this.products;
  }
}

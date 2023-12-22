import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'products';

constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment?.apiUrl + this.url, {params: {'populate': '*', 'sort': 'product_id:asc'}});
}

getProduct(id: number) {
  return this.http.get(`${environment?.apiUrl}${this.url}/${id}`, {params: {'populate': '*'}})
}

getFeaturedProducts() {
  let url = 'featured-products';

  return this.http.get(environment?.apiUrl + url, {params: {'populate': 'products.thumbnail_image', 'sort': 'products.product_id:asc'}});
}
}

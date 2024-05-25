import { Component, AfterContentInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import shoppost from '../../../../data/shop.json';
import blogcategory from '../../../../data/blogcategory.json';
import blogtags from '../../../../data/blogtags.json';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/services/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, AfterContentInit {
  @ViewChild('callBackForm') callBackForm: any;

  product;
  previousProduct;
  nextProduct;

  products = [];

  imageUrl: string;

  contactFormData: {} | any = {};

  submitted = false;
  error: {} | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private modalService: NgbModal) {}
  public shopbox: { title: string; id: number }[] = shoppost;
  public tags: { title: string; id: number }[] = blogtags;
  public category: { title: string; id: number }[] = blogcategory;

  public setProduct(id: any) {
    this.shopbox = shoppost.filter((item: { id: any }) => {
      return item.id == id;
    });
  }
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  public getBlogCategory(items: string | any[]) {
    var elems = blogcategory.filter((item: { id: string }) => {
      return items.includes(item.id);
    });
    return elems;
  }
  // Increment decrement
  public counter: number = 1;
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.data;

      this.productService.getProduct(this.route.snapshot.params.id).subscribe((res: any) => {
        this.product = res.data;

        this.getPreviousAndNextProducts();
      });
    });
  }

  ngAfterContentInit(): void {
    this.setProduct(this.route.snapshot.params.id);
    this.imageUrl = environment.imageUrl;
  }

  getPreviousAndNextProducts() {
    if (this.product.attributes.product_id === 1 || this.product.attributes.product_id === 12) {
      if (this.product.attributes.product_id === 1) {
        this.previousProduct = this.products.find((product) => product.attributes.product_id === 12);
        this.nextProduct = this.products.find((product) => product.attributes.product_id === this.product.attributes.product_id + 1);
      } else if (this.product.attributes.product_id === 12) {
        this.previousProduct = this.products.find((product) => product.attributes.product_id === this.product.attributes.product_id - 1);
        this.nextProduct = this.products.find((product) => product.attributes.product_id === 1);
      }
    } else {
      this.previousProduct = this.products.find((product) => product.attributes.product_id === this.product.attributes.product_id - 1);
      this.nextProduct = this.products.find((product) => product.attributes.product_id === this.product.attributes.product_id + 1);
    }
  }

  requestACallBack(): void {
    this.modalService.open(this.callBackForm, { centered: true, backdrop: 'static',  windowClass: 'request-call-back-form-popup-modal' });
  }

  onSubmit() {
    this.contactFormData.product_id = this.product.id;

    this.productService.contactForm(this.contactFormData).subscribe(
      (response) => {
        this.submitted = true;

        setTimeout(() => {
          this.modalService.dismissAll();
        }, 1000);

        console.log('Post request successful:', response);
      },
      (error) => {
        this.error = error;
        console.error('Error making post request:', error);
      }
    );
  }
}

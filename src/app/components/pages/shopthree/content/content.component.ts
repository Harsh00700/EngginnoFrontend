import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import shoppost from '../../../../data/shop.json'
import { ProductService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  loading: boolean = true;

  // pagination
  page: number = 1;
  closeResult: string;
  modalContent: any;

  products: any[] = [];

  imageUrl: string;

  constructor(private modalService: NgbModal, private productService: ProductService) { }
  open(content: any, item: any) {
    this.modalContent = item
    this.modalService.open(content, { centered: true, size: "lg", windowClass: 'andro_quick-view-modal p-0' });
  }
  // Increment decrement
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  public shopbox: { img: string }[] = shoppost;

  ngOnInit(): void {
    this.imageUrl = environment.imageUrl;

    this.productService.getProducts().subscribe((res: any) => {
      this.loading = true;
      this.products = res.data;

      this.loading = false;
    });
  }

  onPageChange(page) {
    this.page = page;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

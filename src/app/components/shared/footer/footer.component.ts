import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input()  layout: number | string;
  @Input()  logo: number | string;
  ngOnInit(): void {
    this.getFeaturedProducts();
  }
  ScrolltoTop() {
    const navbar = document.getElementById('backToTop');
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop > 300) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }
  isShow: boolean;
  topPosToStartShowing = 300;

  featuredProducts = [];

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((res: any) => {
      this.featuredProducts = res.data[0]?.attributes?.products?.data;
      this.featuredProducts = this.featuredProducts.sort((x, y) => x.attributes.product_id - y.attributes.product_id);
    });
  }

}

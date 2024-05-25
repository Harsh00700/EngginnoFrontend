import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import shoppost from '../../../../data/shop.json'
import categorypost from '../../../../data/category.json'
import blogcategory from '../../../../data/blogcategory.json';
import blogpost from '../../../../data/blog.json';
import blogtags from '../../../../data/blogtags.json';
import testimonialpost from '../../../../data/testimonial.json';
import iconpost from '../../../../data/iconpost.json';
import { ProductService as ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  closeResult: string;
  modalContent: any;
  featuredProducts: any;
  imageUrl: string;
  constructor(private modalService: NgbModal, private productService: ProductsService) { }
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
  public iconspost = iconpost;
  public shopbox: { img: string }[] = shoppost;
  public featuredpost: { img: string }[] = shoppost;
  public category: { icon: string }[] = categorypost;
  public blogcategory: { title: string }[] = blogcategory;
  public testimonial: { photo: string }[] = testimonialpost;
  public blogbox: { title: string, id: number }[] = blogpost;
  public tags: { title: string, id: number }[] = blogtags;
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // main Slider
  mainSlider = [
    // { img: "assets/img/banner/IMG_0412.jpg" },
    { img: "assets/img/products/_Y2A0736 OK-01.jpg" },
    { img: "assets/img/products/_Y2A0700 OK-01.jpg" },
    { img: "assets/img/products/_Y2A0648 OK-01.jpg" },
    // { img: "assets/img/banner/IMG_0418.jpg" },
  ];
  mainbannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true
  };
  // Banner
  bannerslider = [
    {
      photo: "assets/img/products/2.png",
      couponcode: "Automobile991",
      title: "40% Sale",
      titlespan: "On Select Products",
      para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
    {
      photo: "assets/img/products/12.png",
      couponcode: "Automobile991",
      title: "40% Sale",
      titlespan: "On Select Products",
      para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
  ];
  bannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots d-flex",
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  // Fresharrivals
  fresharrConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: '.andro_fresh-arrivals .slider-prev',
    nextArrow: '.andro_fresh-arrivals .slider-next',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  // Testimonial
  testiConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots d-flex",
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  garageConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  ngOnInit(): void {
    this.imageUrl = environment.imageUrl;
    this.getFeaturedProducts();
  }

  getFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((res: any) => {
      this.featuredProducts = res.data[0]?.attributes?.products?.data;
      this.featuredProducts = this.featuredProducts.sort((x, y) => x.attributes.product_id - y.attributes.product_id);
    });
  }

}

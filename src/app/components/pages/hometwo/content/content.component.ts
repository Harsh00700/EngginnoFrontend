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
    { img: "assets/img/banner/IMG_0412.jpg" },
    { img: "assets/img/products/_Y2A0736 OK-01.jpg" },
    { img: "assets/img/banner/IMG_0418.jpg" },
  ];
  mainbannerConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false
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
      const data = [
        {
          "id": 1,
          "attributes": {
            "createdAt": "2023-12-17T19:17:03.235Z",
            "updatedAt": "2023-12-21T19:19:35.483Z",
            "publishedAt": "2023-12-17T19:32:23.891Z",
            "description": "The front disc brake assembly is a high-performance braking system designed to ensure optimal safety and control for vehicles. It consists of several key components that work together seamlessly to deliver effective braking in various driving conditions.",
            "name": "Front Disc Brake Assembly",
            "fitment_location": "Double shocker Front Fork",
            "working_principle": [
              {
                "value": "The Brake Rotor of disc Brakes rotates with the wheel."
              },
              {
                "value": "Brake pads, fitted to the brake calipers, clamp on these rotors to stop or decelerate the wheels."
              },
              {
                "value": "Friction generated between brake pads and rotor transforms kinetic energy into thermal energy"
              }
            ],
            "advantages": [
              {
                "key": "Lower Maintenance Cost",
                "value": "Cost-effective solution for extended durability."
              },
              {
                "key": "Higher Torque Braking Capacity",
                "value": "<br> Customized disc brake design with superior braking force from both sides. <br> Achieves higher torque braking capacity in a shorter distance."
              }
            ],
            "additional_information": null,
            "product_id": 1,
            "thumbnail_image": {
              "data": {
                "id": 26,
                "attributes": {
                  "name": "15- Front Disc Brake_.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 5088,
                  "height": 3392,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_15--Front-Caliber_.jpg",
                      "hash": "thumbnail_15_Front_Caliber_7d1351ef29",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 234,
                      "height": 156,
                      "size": 4.84,
                      "url": "/uploads/thumbnail_15_Front_Caliber_7d1351ef29.jpg"
                    }
                  },
                  "hash": "15_Front_Caliber_7d1351ef29",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 1329.73,
                  "url": "/uploads/15_Front_Caliber_7d1351ef29.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2023-12-21T19:09:47.137Z",
                  "updatedAt": "2023-12-21T19:17:34.907Z"
                }
              }
            }
          }
        },
        {
          "id": 10,
          "attributes": {
            "createdAt": "2023-12-17T22:42:19.835Z",
            "updatedAt": "2023-12-21T19:24:15.171Z",
            "publishedAt": "2023-12-17T22:52:33.475Z",
            "description": "A gear box shaft is a crucial component in a gearbox assembly, playing a key role in the transmission of power and torque within a mechanical system. It is designed to connect and transmit rotational motion between the input and output sides of a gearbox.",
            "name": "Gear Box Shaft",
            "fitment_location": "Gear Box and Flange Cup",
            "working_principle": [
              {
                "value": "Transmits torque from gearbox to flange cup."
              }
            ],
            "advantages": [
              {
                "key": "High Strength Shaft",
                "value": "Made from graded steel."
              },
              {
                "key": "Extended Lifespan",
                "value": "Enhanced durability and a lengthier operational life result from improved control over the heat treatment process for this shaft."
              }
            ],
            "additional_information": [
              {
                "key": "VARIANTS",
                "value": "Gear Box Shaft, 16-T <br> Gear Box Shaft, 6-T <br> Gear Box Shaft, 22-T <br> Motor Shaft, 22-T <br> Gear Box Shaft, 18-T"
              },
              {
                "key": "CUSTOMIZATION AVAILABLE",
                "value": "We can develop shafts as per customer requirements."
              }
            ],
            "product_id": 10,
            "thumbnail_image": {
              "data": {
                "id": 25,
                "attributes": {
                  "name": "25- Gear Box Shaft Assembly.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 5400,
                  "height": 3600,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_25--Gear-Box-Shaft-Assembly.jpg",
                      "hash": "thumbnail_25_Gear_Box_Shaft_Assembly_11217b73ef",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 234,
                      "height": 156,
                      "size": 3.76,
                      "url": "/uploads/thumbnail_25_Gear_Box_Shaft_Assembly_11217b73ef.jpg"
                    }
                  },
                  "hash": "25_Gear_Box_Shaft_Assembly_11217b73ef",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 1020.59,
                  "url": "/uploads/25_Gear_Box_Shaft_Assembly_11217b73ef.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2023-12-21T19:09:47.014Z",
                  "updatedAt": "2023-12-21T19:16:40.848Z"
                }
              }
            }
          }
        },
        {
          "id": 8,
          "attributes": {
            "createdAt": "2023-12-17T22:07:37.765Z",
            "updatedAt": "2023-12-21T19:20:18.381Z",
            "publishedAt": "2023-12-17T22:52:33.475Z",
            "description": "Independent suspension is a sophisticated automotive technology designed to enhance the ride, handling, and overall performance of vehicles. Unlike traditional solid axle systems, independent suspension allows each wheel to move independently, responding to road irregularities without affecting the opposite wheel. This results in improved traction, stability, and comfort for passengers.",
            "name": "Independent Suspension",
            "fitment_location": "Rear Chassis and Shocker",
            "working_principle": null,
            "advantages": null,
            "additional_information": null,
            "product_id": 2,
            "thumbnail_image": {
              "data": {
                "id": 22,
                "attributes": {
                  "name": "17 - Independent Suspension.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 5088,
                  "height": 3392,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_17---Independent-Suspension.jpg",
                      "hash": "thumbnail_17_Independent_Suspension_ae852f1205",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 234,
                      "height": 156,
                      "size": 2.93,
                      "url": "/uploads/thumbnail_17_Independent_Suspension_ae852f1205.jpg"
                    }
                  },
                  "hash": "17_Independent_Suspension_ae852f1205",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 637.9,
                  "url": "/uploads/17_Independent_Suspension_ae852f1205.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2023-12-21T19:09:46.855Z",
                  "updatedAt": "2023-12-21T19:13:20.139Z"
                }
              }
            }
          }
        },
        {
          "id": 2,
          "attributes": {
            "createdAt": "2023-12-17T19:29:12.977Z",
            "updatedAt": "2023-12-21T19:24:00.568Z",
            "publishedAt": "2023-12-17T19:32:23.891Z",
            "description": "The Propeller Shaft Assembly, also known as a drive shaft, is a crucial component in the drivetrain of a vehicle. Its primary function is to transmit power from the vehicle's transmission or transfer case to the rear independent suspension/differential, allowing the wheels to rotate and propel the vehicle forward.",
            "name": "Propeller Shaft Assembly",
            "fitment_location": "Between Engine-side/ Gearbox side Flange and Wheel-side Flange",
            "working_principle": [
              {
                "value": "Transmits torque from the engine/ gearbox to the wheel axle; suitable for a four-slot flange cup."
              }
            ],
            "advantages": [
              {
                "key": "Longer lifespan of Flange Cup",
                "value": "Achieves longer life span of the flange cups as slider rollers are integrated instead of square slider block, minimizing wear and tear due to reduction in friction."
              },
              {
                "key": "Flexibility",
                "value": "Works in two axis, absorbing vibrations from the engine/ gearbox and propeller, providing a smoother driving experience and noise reduction."
              },
              {
                "key": "Low Power Losses",
                "value": "The power losses in the propeller shaft assembly are very low."
              },
              {
                "key": "Double Protection",
                "value": "Offers double protection for the flange cup area with a grease cover and bellows."
              }
            ],
            "additional_information": [
              {
                "key": "Exclusive Technological Edge",
                "value": "The ENGGINNO Propeller Shaft Assembly is an integral part of an independent transmission system, exclusively available in ENGGINNO."
              },
              {
                "key": "Tailor-Made Solutions",
                "value": "Offers an extensive range of solutions tailored to meet specific length requirements."
              },
              {
                "key": "Customized Coating Options",
                "value": "CED Coating <br> Zinc Coating <br> Phosphating <br> Blackening"
              }
            ],
            "product_id": 9,
            "thumbnail_image": {
              "data": {
                "id": 30,
                "attributes": {
                  "name": "26- Propeller Shaft Assembly.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 5088,
                  "height": 3392,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_26--Propeller-Shaft-Assembly.jpg",
                      "hash": "thumbnail_26_Propeller_Shaft_Assembly_6567f95011",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 234,
                      "height": 156,
                      "size": 4.84,
                      "url": "/uploads/thumbnail_26_Propeller_Shaft_Assembly_6567f95011.jpg"
                    }
                  },
                  "hash": "26_Propeller_Shaft_Assembly_6567f95011",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 976.36,
                  "url": "/uploads/26_Propeller_Shaft_Assembly_6567f95011.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2023-12-21T19:09:47.277Z",
                  "updatedAt": "2023-12-21T19:17:51.050Z"
                }
              }
            }
          }
        }
      ];

      this.featuredProducts = data;
      // this.featuredProducts = res.data[0].attributes?.products?.data;
      this.featuredProducts = this.featuredProducts.sort((x, y) => x.attributes.product_id - y.attributes.product_id);

      console.log('====================================');
      console.log('featuredProducts', this.featuredProducts);
      console.log('====================================');
    })
  }

}

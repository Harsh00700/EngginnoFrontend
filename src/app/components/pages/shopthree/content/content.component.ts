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

    // this.productService.getProducts().subscribe((res: any) => {
    //   this.loading = true;
    //   this.products = res.data;

    //   console.log('====================================');
    //   console.log('products', this.products);
    //   console.log('====================================');

    //   this.loading = false;
    // });

    const data = [
      {
        id: 1,
        attributes: {
          createdAt: '2023-12-17T19:17:03.235Z',
          updatedAt: '2023-12-21T19:19:35.483Z',
          publishedAt: '2023-12-17T19:32:23.891Z',
          description:
            'The front disc brake assembly is a high-performance braking system designed to ensure optimal safety and control for vehicles. It consists of several key components that work together seamlessly to deliver effective braking in various driving conditions.',
          name: 'Front Disc Brake Assembly',
          fitment_location: 'Double shocker Front Fork',
          working_principle: [
            {
              value: 'The Brake Rotor of disc Brakes rotates with the wheel.',
            },
            {
              value:
                'Brake pads, fitted to the brake calipers, clamp on these rotors to stop or decelerate the wheels.',
            },
            {
              value:
                'Friction generated between brake pads and rotor transforms kinetic energy into thermal energy',
            },
          ],
          advantages: [
            {
              key: 'Lower Maintenance Cost',
              value: 'Cost-effective solution for extended durability.',
            },
            {
              key: 'Higher Torque Braking Capacity',
              value:
                '<br> Customized disc brake design with superior braking force from both sides. <br> Achieves higher torque braking capacity in a shorter distance.',
            },
          ],
          additional_information: null,
          product_id: 1,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 26,
              attributes: {
                name: '15- Front Disc Brake_.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '15_Front_Caliber_7d1351ef29',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1329.73,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/15_Front_Caliber_7d1351ef29.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.137Z',
                updatedAt: '2023-12-21T19:17:34.907Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 26,
              attributes: {
                name: '15- Front Disc Brake_.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '15_Front_Caliber_7d1351ef29',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1329.73,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/15_Front_Caliber_7d1351ef29.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.137Z',
                updatedAt: '2023-12-21T19:17:34.907Z',
              },
            },
          },
        },
      },
      {
        id: 8,
        attributes: {
          createdAt: '2023-12-17T22:07:37.765Z',
          updatedAt: '2023-12-21T19:20:18.381Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'Independent suspension is a sophisticated automotive technology designed to enhance the ride, handling, and overall performance of vehicles. Unlike traditional solid axle systems, independent suspension allows each wheel to move independently, responding to road irregularities without affecting the opposite wheel. This results in improved traction, stability, and comfort for passengers.',
          name: 'Independent Suspension',
          fitment_location: 'Rear Chassis and Shocker',
          working_principle: null,
          advantages: null,
          additional_information: null,
          product_id: 2,
          images: {
            data: [
              {
                id: 35,
                attributes: {
                  name: '13- Independent Suspension.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 5000,
                  height: 3333,
                  hash: '13_Independent_Suspension_139db68fbe',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 573.98,
                  url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/13_Independent_Suspension_139db68fbe.jpg',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2023-12-21T19:09:47.555Z',
                  updatedAt: '2023-12-21T19:12:56.850Z',
                },
              },
              {
                id: 22,
                attributes: {
                  name: '17 - Independent Suspension.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 5088,
                  height: 3392,
                  hash: '17_Independent_Suspension_ae852f1205',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 637.9,
                  url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/17_Independent_Suspension_ae852f1205.jpg',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2023-12-21T19:09:46.855Z',
                  updatedAt: '2023-12-21T19:13:20.139Z',
                },
              },
            ],
          },
          image: {
            data: {
              id: 35,
              attributes: {
                name: '13- Independent Suspension.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '13_Independent_Suspension_139db68fbe',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 573.98,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/13_Independent_Suspension_139db68fbe.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.555Z',
                updatedAt: '2023-12-21T19:12:56.850Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 22,
              attributes: {
                name: '17 - Independent Suspension.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '17_Independent_Suspension_ae852f1205',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 637.9,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/17_Independent_Suspension_ae852f1205.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:46.855Z',
                updatedAt: '2023-12-21T19:13:20.139Z',
              },
            },
          },
        },
      },
      {
        id: 6,
        attributes: {
          createdAt: '2023-12-17T21:50:20.657Z',
          updatedAt: '2023-12-21T19:20:59.107Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'A caliper assembly refers to a crucial component within the braking system responsible for controlling and managing the braking force on a vehicle. It is an essential part of disc brake systems, which are widely used in modern automobiles for their efficiency and performance.',
          name: 'CALIPER ASSEMBLY',
          fitment_location: 'Disc Brake',
          working_principle: [
            {
              value:
                'Caliper pistons facilitate smooth back-and-forth movement during brake application.',
            },
            {
              value:
                'Functions as a precision clamp to compress brake pads onto the outer face of the disc.',
            },
            {
              value: 'Initiates braking action effectively and responsively.',
            },
          ],
          advantages: [
            {
              key: 'Efficient Braking',
              value:
                'Calipers play a crucial role in converting hydraulic pressure into mechanical force, resulting in effective and responsive braking.',
            },
            {
              key: 'Heat Dissipation',
              value:
                'Calipers are designed with features for effective heat dissipation, preventing brake fade and maintaining performance under high-stress conditions.',
            },
            {
              key: 'Reduced Weight',
              value:
                'Lightweight materials like aluminum are often used in caliper construction, contributing to improved fuel efficiency.',
            },
            {
              key: 'Responsive Control',
              value:
                'Calipers provide precise control over brake force, allowing for modulation and responsiveness, enhancing safety and driving experience.',
            },
            {
              key: 'Low Maintenance',
              value:
                'Modern calipers often have low-maintenance designs, improving durability and reducing the need for frequent adjustments or replacements.',
            },
          ],
          additional_information: [
            {
              value:
                'Engginno offers two distinct categories of calipers: Front Caliper Assembly & Rear Caliper Assembly',
            },
            {
              value:
                'The Front caliper, designed without parking brakes, prioritizes simplicity and streamlined functionality for front-wheel applications. On the other hand, the rear caliper is equipped with parking brakes, providing additional convenience and stability for parking situations. This dual-caliper approach allows for tailored solutions based on specific wheel positions and functional requirements in diverse automotive setups.',
            },
          ],
          product_id: 3,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 14,
              attributes: {
                name: '_Y2A0683 OK-01.jpg',
                alternativeText: null,
                caption: null,
                width: 6150,
                height: 4100,
                hash: 'Y2_A0683_OK_01_d60c7f12f9',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 657,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/Y2_A0683_OK_01_d60c7f12f9.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T22:37:08.399Z',
                updatedAt: '2023-12-17T22:37:08.399Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 36,
              attributes: {
                name: '12- Calliber Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '12_Calliber_Assembly_286c6f71b7',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 753.1,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/12_Calliber_Assembly_286c6f71b7.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.589Z',
                updatedAt: '2023-12-21T19:18:06.134Z',
              },
            },
          },
        },
      },
      {
        id: 9,
        attributes: {
          createdAt: '2023-12-17T22:10:32.876Z',
          updatedAt: '2023-12-21T19:21:13.328Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            "A disc rotor is a crucial component in a vehicle's braking system. It is a flat, circular metal disc that is mounted on the wheel hub and rotates with the wheel. The primary function of the disc rotor is to work in conjunction with the brake caliper and brake pads to slow down or stop the vehicle when the brakes are applied.",
          name: 'Rotor',
          fitment_location: 'Front & Rear Braking System',
          working_principle: [
            {
              value:
                "A disc rotor in a disc brake system involves the conversion of kinetic energy into heat energy to decelerate and eventually stop the rotation of the vehicle's wheels.",
            },
          ],
          advantages: [
            {
              key: 'High-Quality Material',
              value: 'Graded casting used in rotor production',
            },
            {
              key: 'Heavy-Duty Design',
              value: 'Ensures durability and reliability.',
            },
            {
              key: 'Rustproof and Corrosion-Free',
              value: 'CED coated for extended lifespan.',
            },
          ],
          additional_information: [
            {
              key: 'Variants',
              value:
                '3 stud, 100 mm PCD <br> 4 stud, 100 mm PCD <br> 4 stud, 70 mm PCD',
            },
            {
              key: 'Custom Solutions',
              value:
                'Tailored solutions available to meet specific customer requirements.',
            },
          ],
          product_id: 4,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 33,
              attributes: {
                name: 'Rotor.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '10_D4_A7498_a36e3f8aa0',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 849,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/10_D4_A7498_a36e3f8aa0.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.475Z',
                updatedAt: '2023-12-21T19:10:13.947Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 33,
              attributes: {
                name: 'Rotor.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '10_D4_A7498_a36e3f8aa0',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 849,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/10_D4_A7498_a36e3f8aa0.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.475Z',
                updatedAt: '2023-12-21T19:10:13.947Z',
              },
            },
          },
        },
      },
      {
        id: 3,
        attributes: {
          createdAt: '2023-12-17T21:28:45.647Z',
          updatedAt: '2023-12-21T19:22:02.225Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            "An integrated front hub refers to a component that combines multiple functions related to the vehicle's front wheels and their connection to the suspension system. This hub is a crucial part of the overall automotive design, contributing to the vehicle's performance, handling, and safety.",
          name: 'Generation 3 Integrated Front Hub',
          fitment_location: 'Front Disc Brake',
          working_principle: null,
          advantages: [
            {
              value:
                'Higher Loading Capacity: Engineered with Generation 3 Hub & Bearing Assembly technology for Stellar Performance, this forged integrated hub ensures a robust loading capacity, surpassing conventional hubs.',
            },
            {
              value:
                'Extended Lifespan: Experience longevity with reduced friction, contributing to a prolonged product life.',
            },
            {
              value:
                'Superior Shock Absorption: Optimized for superior shock-absorption, the hub features enhanced capabilities achieved through precision induction hardening.',
            },
          ],
          additional_information: null,
          product_id: 5,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 34,
              attributes: {
                name: 'Gen 3 Integrated Hub.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '11_D4_A7477_9e2e438665',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 594.06,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/11_D4_A7477_9e2e438665.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.522Z',
                updatedAt: '2023-12-21T19:21:59.340Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 34,
              attributes: {
                name: 'Gen 3 Integrated Hub.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '11_D4_A7477_9e2e438665',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 594.06,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/11_D4_A7477_9e2e438665.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.522Z',
                updatedAt: '2023-12-21T19:21:59.340Z',
              },
            },
          },
        },
      },
      {
        id: 4,
        attributes: {
          createdAt: '2023-12-17T21:29:26.847Z',
          updatedAt: '2023-12-21T19:22:24.451Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            "A Conventional Front Hub (casting) is a crucial component in the front wheel assembly of various vehicles. This hub is typically constructed through a casting process, wherein molten metal is poured into a mold to create the desired shape. The resulting front hub is then machined and finished to meet specific design and performance requirements contributing to the vehicle's performance, handling, and safety.",
          name: 'Conventional Front Hub',
          fitment_location: 'Front Disc Brake',
          working_principle: null,
          advantages: [
            {
              key: 'Superior Quality Metal',
              value:
                'Engineered from highly graded casted material and employing Generation 1 Hub & Bearing Assembly technology, our engineered hub stands as a pinnacle of optimal performance. Particularly tailored for lower load carrying capacity vehicles.',
            },
            {
              key: 'Cost-Efficient Solution',
              value: 'Lower initial acquisition cost.',
            },
            {
              key: 'Ease of Maintenance',
              value:
                'Reduced maintenance expenses are achieved through the changeability of individual components.',
            },
          ],
          additional_information: null,
          product_id: 6,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 32,
              attributes: {
                name: '3Conventional Front Hub.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '3_D4_A7458_69829bbe30',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 610.76,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/3_D4_A7458_69829bbe30.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.459Z',
                updatedAt: '2023-12-21T19:22:21.054Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 32,
              attributes: {
                name: '3Conventional Front Hub.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '3_D4_A7458_69829bbe30',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 610.76,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/3_D4_A7458_69829bbe30.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.459Z',
                updatedAt: '2023-12-21T19:22:21.054Z',
              },
            },
          },
        },
      },
      {
        id: 5,
        attributes: {
          createdAt: '2023-12-17T21:34:36.317Z',
          updatedAt: '2023-12-21T19:23:04.932Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'The Front Drum Assembly typically consists of several key parts working together to facilitate motion, braking, or other mechanical functions.',
          name: 'Front Drum Assembly',
          fitment_location: 'Double shocker Front Fork',
          working_principle: [
            {
              value:
                'Drum brake functions by harnessing friction generated when a set of Brake Shoes apply outward pressure against a rotating, cylinder-shaped component known as the brake drum.',
            },
          ],
          advantages: [
            {
              key: 'Frequency of Maintenance',
              value:
                'Explore the advantages of drum brakes over disc brakes when it comes to maintenance frequency. The enclosed design of drum brakes provides better corrosion resistance, contributing to prolonged intervals between maintenance sessions. This article delves into how the improved resistance to corrosion enhances the reliability of drum brakes, making them an appealing choice for specific automotive applications.',
            },
            {
              key: 'Longevity',
              value:
                'The extended lifespan of drum brakes can be attributed to their larger friction contact area, allowing for enhanced braking performance and wear resistance. This design feature enables drum brakes to withstand prolonged use and contributes to their reputation for lasting longer than some alternative braking systems.',
            },
            {
              key: 'Low Power Losses',
              value:
                'The power losses in the propeller shaft assembly are very low.',
            },
            {
              key: 'Double Protection',
              value:
                'Offers double protection for the flange cup area with a grease cover and bellows.',
            },
          ],
          additional_information: null,
          product_id: 7,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 27,
              attributes: {
                name: '20- Front Drum Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '20_Front_Drum_Assembly_8dcab7ffa7',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1192.77,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/20_Front_Drum_Assembly_8dcab7ffa7.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.144Z',
                updatedAt: '2023-12-21T19:11:09.964Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 27,
              attributes: {
                name: '20- Front Drum Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '20_Front_Drum_Assembly_8dcab7ffa7',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1192.77,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/20_Front_Drum_Assembly_8dcab7ffa7.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.144Z',
                updatedAt: '2023-12-21T19:11:09.964Z',
              },
            },
          },
        },
      },
      {
        id: 7,
        attributes: {
          createdAt: '2023-12-17T21:54:38.081Z',
          updatedAt: '2023-12-21T19:23:50.550Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'The Trailer Arm Assembly is designed to provide structural support and connection between the chassis and the axle or suspension system. It plays a key role in ensuring the stability, maneuverability, and overall performance of the trailer.',
          name: 'Trailer Arm Assembly',
          fitment_location: 'Rear Chassis',
          working_principle: [
            {
              value:
                'Trailing arms are essential metal links connecting the rear axle to the vehicle body.',
            },
            {
              value:
                'Enables free up-and-down movement of the rear axle while maintaining precise vehicle alignment.',
            },
          ],
          advantages: [
            {
              key: 'Heavy-Duty Design',
              value: 'Significantly enhances load-carrying capacity.',
            },
            {
              key: 'Square Shape Innovation',
              value:
                '<br> Facilitates optimal load distribution, minimizing wear and tear from impact loads. <br> Extended lifespan compared to conventional round trailer arms.',
            },
          ],
          additional_information: [
            {
              value:
                'Engginno provides two types of trailer arm assemblies: the trailer arm disc brake assembly and the trailer arm drum brake assembly. The disc brake assembly is designed for efficient and responsive braking, while the drum brake assembly offers a reliable braking solution with its enclosed design. These options allow users to choose the trailer arm assembly that best suits their specific needs and preferences for various applications.',
            },
          ],
          product_id: 8,
          images: {
            data: [
              {
                id: 23,
                attributes: {
                  name: '24- Drum Brake Trailer.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 5088,
                  height: 3392,
                  hash: '24_Drum_Brake_Trailer_5b591b83b1',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 746.13,
                  url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/24_Drum_Brake_Trailer_5b591b83b1.jpg',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2023-12-21T19:09:46.871Z',
                  updatedAt: '2023-12-21T19:12:35.100Z',
                },
              },
              {
                id: 24,
                attributes: {
                  name: '23---Disk-Brake-Trailer.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 5088,
                  height: 3392,
                  hash: '23_Disk_Brake_Trailer_d4f7b88d47',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 922.16,
                  url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/23_Disk_Brake_Trailer_d4f7b88d47.jpg',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2023-12-21T19:09:46.947Z',
                  updatedAt: '2023-12-21T19:09:46.947Z',
                },
              },
            ],
          },
          image: {
            data: {
              id: 28,
              attributes: {
                name: '29 - Trailer Arm Group Shot.jpg',
                alternativeText: null,
                caption: null,
                width: 5500,
                height: 3800,
                hash: '29_Trailer_Arm_Group_Shot_e5548e1582',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 674.03,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/29_Trailer_Arm_Group_Shot_e5548e1582.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.213Z',
                updatedAt: '2023-12-21T19:11:28.377Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 28,
              attributes: {
                name: '29 - Trailer Arm Group Shot.jpg',
                alternativeText: null,
                caption: null,
                width: 5500,
                height: 3800,
                hash: '29_Trailer_Arm_Group_Shot_e5548e1582',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 674.03,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/29_Trailer_Arm_Group_Shot_e5548e1582.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.213Z',
                updatedAt: '2023-12-21T19:11:28.377Z',
              },
            },
          },
        },
      },
      {
        id: 2,
        attributes: {
          createdAt: '2023-12-17T19:29:12.977Z',
          updatedAt: '2023-12-21T19:24:00.568Z',
          publishedAt: '2023-12-17T19:32:23.891Z',
          description:
            "The Propeller Shaft Assembly, also known as a drive shaft, is a crucial component in the drivetrain of a vehicle. Its primary function is to transmit power from the vehicle's transmission or transfer case to the rear independent suspension/differential, allowing the wheels to rotate and propel the vehicle forward.",
          name: 'Propeller Shaft Assembly',
          fitment_location:
            'Between Engine-side/ Gearbox side Flange and Wheel-side Flange',
          working_principle: [
            {
              value:
                'Transmits torque from the engine/ gearbox to the wheel axle; suitable for a four-slot flange cup.',
            },
          ],
          advantages: [
            {
              key: 'Longer lifespan of Flange Cup',
              value:
                'Achieves longer life span of the flange cups as slider rollers are integrated instead of square slider block, minimizing wear and tear due to reduction in friction.',
            },
            {
              key: 'Flexibility',
              value:
                'Works in two axis, absorbing vibrations from the engine/ gearbox and propeller, providing a smoother driving experience and noise reduction.',
            },
            {
              key: 'Low Power Losses',
              value:
                'The power losses in the propeller shaft assembly are very low.',
            },
            {
              key: 'Double Protection',
              value:
                'Offers double protection for the flange cup area with a grease cover and bellows.',
            },
          ],
          additional_information: [
            {
              key: 'Exclusive Technological Edge',
              value:
                'The ENGGINNO Propeller Shaft Assembly is an integral part of an independent transmission system, exclusively available in ENGGINNO.',
            },
            {
              key: 'Tailor-Made Solutions',
              value:
                'Offers an extensive range of solutions tailored to meet specific length requirements.',
            },
            {
              key: 'Customized Coating Options',
              value:
                'CED Coating <br> Zinc Coating <br> Phosphating <br> Blackening',
            },
          ],
          product_id: 9,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 5,
              attributes: {
                name: '_Y2A0696 OK-01.jpg',
                alternativeText: null,
                caption: null,
                width: 6720,
                height: 4480,
                hash: 'Y2_A0696_OK_01_204633f81a',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 601.27,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/Y2_A0696_OK_01_204633f81a.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T20:59:33.255Z',
                updatedAt: '2023-12-17T20:59:33.255Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 30,
              attributes: {
                name: '26- Propeller Shaft Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '26_Propeller_Shaft_Assembly_6567f95011',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 976.36,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/26_Propeller_Shaft_Assembly_6567f95011.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.277Z',
                updatedAt: '2023-12-21T19:17:51.050Z',
              },
            },
          },
        },
      },
      {
        id: 10,
        attributes: {
          createdAt: '2023-12-17T22:42:19.835Z',
          updatedAt: '2023-12-21T19:24:15.171Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'A gear box shaft is a crucial component in a gearbox assembly, playing a key role in the transmission of power and torque within a mechanical system. It is designed to connect and transmit rotational motion between the input and output sides of a gearbox.',
          name: 'Gear Box Shaft',
          fitment_location: 'Gear Box and Flange Cup',
          working_principle: [
            {
              value: 'Transmits torque from gearbox to flange cup.',
            },
          ],
          advantages: [
            {
              key: 'High Strength Shaft',
              value: 'Made from graded steel.',
            },
            {
              key: 'Extended Lifespan',
              value:
                'Enhanced durability and a lengthier operational life result from improved control over the heat treatment process for this shaft.',
            },
          ],
          additional_information: [
            {
              key: 'VARIANTS',
              value:
                'Gear Box Shaft, 16-T <br> Gear Box Shaft, 6-T <br> Gear Box Shaft, 22-T <br> Motor Shaft, 22-T <br> Gear Box Shaft, 18-T',
            },
            {
              key: 'CUSTOMIZATION AVAILABLE',
              value: 'We can develop shafts as per customer requirements.',
            },
          ],
          product_id: 10,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 25,
              attributes: {
                name: '25- Gear Box Shaft Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5400,
                height: 3600,
                hash: '25_Gear_Box_Shaft_Assembly_11217b73ef',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1020.59,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/25_Gear_Box_Shaft_Assembly_11217b73ef.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.014Z',
                updatedAt: '2023-12-21T19:16:40.848Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 25,
              attributes: {
                name: '25- Gear Box Shaft Assembly.jpg',
                alternativeText: null,
                caption: null,
                width: 5400,
                height: 3600,
                hash: '25_Gear_Box_Shaft_Assembly_11217b73ef',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 1020.59,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/25_Gear_Box_Shaft_Assembly_11217b73ef.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.014Z',
                updatedAt: '2023-12-21T19:16:40.848Z',
              },
            },
          },
        },
      },
      {
        id: 11,
        attributes: {
          createdAt: '2023-12-17T22:47:28.370Z',
          updatedAt: '2023-12-21T19:24:25.305Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'The flange cup is a critical component designed to enhance the stability and performance of automotive wheels. Crafted with precision and durability in mind, this integral part is engineered to support the wheel hub and bearings, ensuring a smooth and efficient rotation of the wheel. Its design incorporates key features that contribute to the overall safety and reliability of the vehicle.',
          name: 'Flange Cup',
          fitment_location:
            'Between Gearbox Shaft and Propeller Shaft; Between Propeller Shaft and Axle',
          working_principle: [
            {
              value:
                'Acts as a mediator for power transmission in variable-axis differences.',
            },
            {
              value:
                'Transmits power from Gearbox to Propeller Shaft and from Propeller Shaft to Axle.',
            },
          ],
          advantages: [
            {
              value: 'Manufactured with graded and hardened materials.',
            },
            {
              value: 'Zinc-coated option available upon request.',
            },
          ],
          additional_information: [
            {
              key: 'Variants',
              value:
                'Wide range of Flange Cup options. <br> Total length range: 79 mm to 89 mm.',
            },
            {
              key: 'Customization',
              value:
                'We can develop FLANGESD according to customer requirements.',
            },
          ],
          product_id: 11,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 16,
              attributes: {
                name: '_Y2A0705 OK-01.jpg',
                alternativeText: null,
                caption: null,
                width: 6720,
                height: 4480,
                hash: 'Y2_A0705_OK_01_99dc9f8f63',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 642.45,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/Y2_A0705_OK_01_99dc9f8f63.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T22:47:25.655Z',
                updatedAt: '2023-12-17T22:47:25.655Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 21,
              attributes: {
                name: '2- Flange Cup-1_.png',
                alternativeText: null,
                caption: null,
                width: 5000,
                height: 3333,
                hash: '2_Flange_Cup_1_b5d75a962c',
                ext: '.png',
                mime: 'image/png',
                size: 923.86,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/2_Flange_Cup_1_b5d75a962c.png',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-18T19:06:06.602Z',
                updatedAt: '2023-12-18T19:06:06.602Z',
              },
            },
          },
        },
      },
      {
        id: 12,
        attributes: {
          createdAt: '2023-12-17T22:51:49.981Z',
          updatedAt: '2023-12-21T19:24:40.746Z',
          publishedAt: '2023-12-17T22:52:33.475Z',
          description:
            'Introducing our premium Fastener designed specifically for 3-wheeler vehicle assembly, a critical component to ensure the structural integrity and safety of your three-wheeled vehicles. Engineered with precision and manufactured using high-quality materials, our fasteners are designed to meet and exceed industry standards.',
          name: 'Fastner for 3-Wheeler Vehicle Assembly',
          fitment_location: null,
          working_principle: [
            {
              value:
                'Specially designed fastener for 3-wheeler vehicle assembly.',
            },
          ],
          advantages: [
            {
              value: 'Graded and hardened materials for superior strength.',
            },
            {
              value: 'Coated for enhanced durability.',
            },
          ],
          additional_information: [
            {
              key: 'Fastener Types',
              value:
                'Trailer Forged Stud: Engineered for robust performance. <br> Coller Nut: Ensuring secure and stable connections. <br> Square Nut: Precision and reliability in every application. <br> Front Shaft: Tailored for seamless integration.',
            },
          ],
          product_id: 12,
          images: {
            data: null,
          },
          image: {
            data: {
              id: 29,
              attributes: {
                name: '32 - Fast Ners.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '32_Fast_Ners_142cbfc54b',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 451.56,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/32_Fast_Ners_142cbfc54b.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.269Z',
                updatedAt: '2023-12-21T19:17:13.360Z',
              },
            },
          },
          thumbnail_image: {
            data: {
              id: 29,
              attributes: {
                name: '32 - Fast Ners.jpg',
                alternativeText: null,
                caption: null,
                width: 5088,
                height: 3392,
                hash: '32_Fast_Ners_142cbfc54b',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 451.56,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/32_Fast_Ners_142cbfc54b.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-21T19:09:47.269Z',
                updatedAt: '2023-12-21T19:17:13.360Z',
              },
            },
          },
        },
      },
    ];

    this.products = data;

    this.loading = false;
  }

  onPageChange(page) {
    this.page = page;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

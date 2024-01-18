import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
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
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Products/13_Independent_Suspension_139db68fbe.jpg',
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
    ];

    this.featuredProducts = data;
    this.featuredProducts = this.featuredProducts.sort((x, y) => x.attributes.product_id - y.attributes.product_id);
  }

}

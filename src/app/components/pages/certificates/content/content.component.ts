import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  loading: boolean = true;

  certificates = [];

  imageUrl: string;

  page: number = 1;

  constructor(private certificatesService: CertificatesService) {
    this.imageUrl = environment.imageUrl;
  }

  ngOnInit() {
    // this.certificatesService.getCertificates().subscribe((res: any) => {
    //   this.loading = true;

    //   res.forEach((entry) => {
    //     if (entry.attributes) {
    //       this.certificates.push(entry.attributes);
    //     }
    //   });

    //   console.log('====================================');
    //   console.log('certificates', this.certificates);
    //   console.log('====================================');

    //   this.loading = false;
    // });



    const response = [
      {
        id: 1,
        attributes: {
          createdAt: '2023-12-16T23:58:50.602Z',
          updatedAt: '2023-12-17T23:03:27.166Z',
          publishedAt: '2023-12-17T23:01:23.276Z',
          name: 'IATF 16949:2016 Certification',
          description:
            "IATF 16949:2016 certi􀃶cation speci􀃶cally focuses on the automotive industry,\ndemonstrating our capability to consistently provide automotive components that meet stringent quality\nrequirements. This certi􀃶cation is aligned with ISO 9001:2015. IATF 16949 outlines the quality management\nsystem requirements for organizations involved in automotive production and relevant service parts. It's aimed\nat ensuring the consistent quality of products within the automotive supply chain and promoting continuous\nimprovement.",
          additional_description: null,
          certificate_id: 4,
          image: {
            data: null,
          },
        },
      },
      {
        id: 2,
        attributes: {
          createdAt: '2023-12-17T00:13:45.100Z',
          updatedAt: '2023-12-17T23:02:37.968Z',
          publishedAt: '2023-12-17T00:17:45.442Z',
          name: 'ISO 9001:2015 Certification',
          description:
            "The ISO 9001:2015 certi􀃶cation is a testament to our adherence to\ninternationally recognized quality management principles, ensuring consistent delivery of high-quality\nproducts and services that meet customer expectations. ENGGINNO follows the standards outlined by the\nInternational Organization for Standardization (ISO) in their quality management system. ISO 9001:2015\nspeci􀃶es the requirements for a quality management system that an organization uses to demonstrate its ability\nto consistently provide products and services that meet customer and regulatory requirements. It's a globally\nrecognized standard emphasizing continual improvement, customer satisfaction, and efficient processes.",
          additional_description: null,
          certificate_id: 1,
          image: {
            data: {
              id: 1,
              attributes: {
                name: 'JSK AUTO INDUSTRIES - ISO CERTIFICATE_page-0001.jpg',
                alternativeText: null,
                caption: null,
                width: 2480,
                height: 3509,
                hash: 'JSK_AUTO_INDUSTRIES_ISO_CERTIFICATE_page_0001_f508cbb07c',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 532.8,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Cerificates/JSK_AUTO_INDUSTRIES_ISO_CERTIFICATE_page_0001_f508cbb07c.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T00:13:37.101Z',
                updatedAt: '2023-12-17T00:13:37.101Z',
              },
            },
          },
        },
      },
      {
        id: 3,
        attributes: {
          createdAt: '2023-12-17T00:14:43.142Z',
          updatedAt: '2023-12-17T23:03:03.641Z',
          publishedAt: '2023-12-17T00:17:45.442Z',
          name: 'ISO 14001:2015 Certification',
          description:
            'Engginno proudly upholds ISO 14001:2015 standards, demonstrating our\ncommitment to effective environmental management practices. By aligning our operations with these\nstringent guidelines, we ensure sustainable processes, minimize environmental impact, and continuously\nimprove our eco-friendly initiatives, all while delivering exceptional quality in our manufacturing solutions.',
          additional_description: null,
          certificate_id: 2,
          image: {
            data: {
              id: 2,
              attributes: {
                name: 'JSK AUTO INDUSTRIES 14k dac_pages-to-jpg-0001.jpg',
                alternativeText: null,
                caption: null,
                width: 2550,
                height: 3300,
                hash: 'JSK_AUTO_INDUSTRIES_14k_dac_pages_to_jpg_0001_e2b39dcacb',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 658.52,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Cerificates/JSK_AUTO_INDUSTRIES_14k_dac_pages_to_jpg_0001_e2b39dcacb.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T00:14:39.897Z',
                updatedAt: '2023-12-17T00:14:39.897Z',
              },
            },
          },
        },
      },
      {
        id: 4,
        attributes: {
          createdAt: '2023-12-17T00:15:35.111Z',
          updatedAt: '2023-12-17T23:03:19.758Z',
          publishedAt: '2023-12-17T00:17:45.442Z',
          name: 'ISO45001:2018 Certification',
          description:
            "Engginno stands as an ISO 45001:2018 compliant company, adhering\nmeticulously to these rigorous standards. This certi􀃶cation is a testament to our unwavering dedication to\noccupational health and safety. By embracing ISO 45001:2018, we ensure a work environment that not only\nmeets but exceeds international benchmarks for safety measures. It's our pledge to cultivate a culture where\nemployee well-being is paramount, where every operational facet aligns with stringent safety protocols,\nfostering a workspace that prioritizes health, security, and excellence.",
          additional_description:
            "Engginno's commitment to maintaining superior standards across operations validates their dedication to\nexceeding customer expectations and ensuring consistent product quality. Their adherence to stringent criteria\nemphasizes continual improvement in processes, prioritizing both environmental responsibility and a safe,\nhealthy work environment.",
          certificate_id: 3,
          image: {
            data: {
              id: 3,
              attributes: {
                name: 'JSK AUTO INDUSTRIES 45k dac_page-0001.jpg',
                alternativeText: null,
                caption: null,
                width: 2550,
                height: 3300,
                hash: 'JSK_AUTO_INDUSTRIES_45k_dac_page_0001_8430cc921c',
                ext: '.jpg',
                mime: 'image/jpeg',
                size: 645.43,
                url: 'https://engginno-media-storage.blr1.cdn.digitaloceanspaces.com/Cerificates/JSK_AUTO_INDUSTRIES_45k_dac_page_0001_8430cc921c.jpg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2023-12-17T00:14:53.282Z',
                updatedAt: '2023-12-17T00:14:53.282Z',
              },
            },
          },
        },
      },
    ];

    response.forEach((entry) => {
      if (entry.attributes) {
        this.certificates.push(entry.attributes);
      }
    });

    this.loading = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from 'src/app/services/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  model: Contact = new Contact;
  submitted = false;
  error: {} | undefined;

  constructor( private router: Router, private contactService: ContactService, private http: HttpClient) { }

  onSubmit() {
    return this.contactService.contactForm(this.model).subscribe(
      (response) => {
        this.submitted = true;

        console.log('Post request successful:', response);
      },
      (error) => {
        this.error = error;
        console.error('Error making post request:', error);
      }
    );
  }
  // Locations
  locationbox = [
    {
      photo: "assets/img/locations/1.jpg",
      title: "Find Us In",
      titlespan: "Greece",
      para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
    {
      photo: "assets/img/locations/2.jpg",
      title: "Find Us In",
      titlespan: "New York",
      para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
  ];
  // Info
  contactinfo = [
    {
      icon: "flaticon-call",
      title: "Call Center",
      tel: "+91 7575803334",
      tel2: "+91 2827286287"
    },
    {
      icon: "flaticon-email",
      title: "Mail Us",
      mail: "marketing@engginno.com",
      mail2: "info@engginno.com",
    },
    {
      icon: "flaticon-location",
      title: "Nearest Branch",
      para: "Plot No. 2508, Almighty Gate No. 02 Main Road, Lodhika G.I.D.C., Kalavad Road, Metoda, Rajkot-360021, Gujarat, INDIA.",
    },
  ]

  ngOnInit(): void {
  }

}

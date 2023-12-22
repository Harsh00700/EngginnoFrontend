import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined;

  constructor( private router: Router, private contactService: ContactService ) { }

  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
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
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "flaticon-email",
      title: "Mail Us",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "flaticon-location",
      title: "Nearest Branch",
      para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  ngOnInit(): void {
  }

}

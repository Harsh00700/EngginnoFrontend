import { Component, OnInit, Input } from '@angular/core';
import clients from '../../../data/clients.json'

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor() { }
  @Input()  layout: number | string;
  public clients: { img: string }[] = clients;

  ngOnInit(): void {
  }

}

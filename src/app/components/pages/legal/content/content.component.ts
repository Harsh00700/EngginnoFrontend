import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog.json';
import blogcategory from '../../../../data/blogcategory.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public blogbox: { title: string, id: number }[] = blogpost;
  public category: { title: string, id: number }[] = blogcategory;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import blogtags from '../../../data/blogtags.json';
import shopcondition from '../../../data/conditionfilter.json';
import shopbrand from '../../../data/brandfilter.json';
import blogcategory from '../../../data/blogcategory.json';

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor() { }
  public tags: { title: string, id: number }[] = blogtags;
  public category: { title: string, id: number }[] = blogcategory;
  public brand: { title: string, id: number }[] = shopbrand;
  public condition: { title: string, id: number }[] = shopcondition;

  ngOnInit(): void {
  }

}

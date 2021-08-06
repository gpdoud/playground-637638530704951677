import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "The home page"),
    new Menu("About", "The about page"),
    new Menu("Help", "The help page")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

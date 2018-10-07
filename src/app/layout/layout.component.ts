import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private menuItemsArray: any[] = [ 
    {"title":"google News","link":"#"},
    {"title":"Facebook news","link":"#"},
    {"title":"microsoft News","link":"#",
    "subItems":[
                {"title":"yahoo news","link":"#"},
                {"title":"linkedin news","link":"#"},
               ]
    },
    
];
  constructor() { }

  ngOnInit() {
  }

}

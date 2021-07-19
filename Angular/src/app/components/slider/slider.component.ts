


import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  peliculas:any[]=[
    {name:'Arqueologia',
    img:'assets/images/p1.jpg',
    desc:''},
    {
      name:'Objetos',
      img:'assets/images/p2.png',
      desc:''},

      {
        name:'Arqueologo',
        img:'assets/images/p3.jpg',
        desc:''}

  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 6000;
    _config.pauseOnHover = false;
    _config.showNavigationArrows = true;
    _config.showNavigationIndicators = true;
    _config.wrap= false;
  }

  ngOnInit() {
  }

}

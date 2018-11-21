import { Component, OnInit } from '@angular/core';
declare const M;
import { Carousel } from "materialize-css";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.slider');
      var options = {
        indicators: false,
        interval: 10000,
        duration: 450
      };
      var instances = M.Slider.init(elems, options);
    });
  }

}

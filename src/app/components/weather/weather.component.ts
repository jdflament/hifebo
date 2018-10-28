import { Component, OnInit } from '@angular/core';
import { ValuesService } from './../../services/values/values.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  values: any = [];
  latest: number;
  today: number = Date.now();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
    this.values = setInterval(() => {
      this.today = Date.now();
      this.getValues();
    }, 10000);
  }

  getValues() {
    this.httpClient
      .get<number>('https://hifebo-7944f.firebaseio.com/sensors_values.json')
      .subscribe(
        (response) => {
          this.values = response;
          console.log(this.values);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}

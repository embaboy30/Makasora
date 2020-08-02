import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  breweries_data : breweries_data[] = [{"id":2,"name":"Avondale Brewing Co","brewery_type":"micro","street":"201 41st St S","city":"Birmingham","state":"Alabama","postal_code":"35222-1932","country":"United States","longitude":"-86.774322","latitude":"33.524521","phone":"2057775456","website_url":"http://www.avondalebrewing.com","updated_at":"2018-08-23T23:19:57.825Z"}]


  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
    this.brews = data;
    console.log(this.brews);
    });
  }

}

interface breweries_data {
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
}



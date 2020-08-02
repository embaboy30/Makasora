import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log("Hey, what's up!");
  }

  getBeer() {
    return this.http.get('http://api.openbrewerydb.org/breweries');
  }
}

import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class MyServiceService {

  constructor(private http: Http) { }

  fetchData() {
    this.http.get('src/assets/restaurant.json').subscribe((data) => console.log(data)
    );
  }

}

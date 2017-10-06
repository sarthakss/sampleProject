import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private newService: MyServiceService) {}
  items = ['Chick-fil-A', 'Arbys', 'Wendys', 'Taco bell'];
  newItem =  '';

//   ngOnInit() {
//   this.newService.fetchData();
// }
  pushItem = function () {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  };
  removeItem = function (index) {
    this.items.splice(index, 1);
  };


}

import { Component } from '@angular/core';
// import { Item } from './models/item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTitle: string = 'This is a To Do App'
  public items:  Array<string> = []

  addItem($event) {
    this.items.push($event)
  }
  removeItem($event) {
    this.items.splice($event, 1)
  }
}

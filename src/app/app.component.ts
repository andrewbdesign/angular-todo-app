import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTitle: string = 'This is a To Do App'

  recieveMessage($event) {
    this.myTitle = $event
  }
}

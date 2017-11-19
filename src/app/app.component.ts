import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App';
  today = new Date();

  ngOnInit() {
    this.updateToday();
  }
  
  updateToday(){
    this.today = new Date();
  }

}

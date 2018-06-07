import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastNews: Date;

  constructor() { }

  ngOnInit() {
    var time = { time: new Date() };
    var lNews = localStorage.getItem('lastNews');
    if (lNews) {
      this.lastNews = JSON.parse(lNews).time;
    }
    localStorage.setItem('lastNews', JSON.stringify(time));

  }

}

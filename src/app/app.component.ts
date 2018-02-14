import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  sayHello: any;
  title = 'the dogs farm';
  // constructor() {} 
  ngOnInit() {
    this.sayHello = window.setInterval(() => console.log('hello!'), 1000);
  }
  ngOnDesroy() {
    window.clearInterval(this.sayHello);
  }

}
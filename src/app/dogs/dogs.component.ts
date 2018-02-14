import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from './dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {
  selectedDog: Dog = new Dog();
  dogs: any[];
  title: string;

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.title = "Our dogs";
    this.dogs = this.dogService.getDogs(); 
  }

  getFormat(i) {
    return this.dogs[i].toggle ? 'fullDate' : 'shortDate'; 
  }
  toggle(i){
    { this.dogs[i].toggle = !this.dogs[i].toggle; }
  }

  editDog(dog) {   // puts the dog into the form
    // console.log(dog.name + " edited");
    this.selectedDog = Object.assign({}, dog);
  }

  deleteDog(i) {
    return this.dogService.deleteDog(i);
  }

}

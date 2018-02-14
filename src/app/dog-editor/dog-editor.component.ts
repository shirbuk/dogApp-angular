import { Component, OnInit, Input } from '@angular/core';

import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  // @Output() dogEdited : EventEmitter<Dog> = new EventEmitter();
  
  // dogName: string;
  // dogWeight: number;
  // birthday: any;
  // toggle = true;
  constructor(private dogService: DogService) { }

  ngOnInit() {

  }

  addDog(){
  	// let newDog = new Dog()
  	// newDog.name = this.dogName;
  	// newDog.weight = this.dogWeight;
  	// newDog.birthday = this.birthday; 
  	
  	this.dogService.addDog(this.dog);  		
  }

  submitEdit() {
    this.dogService.editDog(this.dog.id, this.dog);
    this.dog = new Dog();
  }

  cancelEdit() {
    this.dog = new Dog()
  }

}


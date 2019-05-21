import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor() { }
    enteredPersonName = '';
  ngOnInit() {
  }

  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.enteredPersonName = '';

  }

}

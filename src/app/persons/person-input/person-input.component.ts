import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor() { }
  @Output() personCreate = new EventEmitter<string>();
    enteredPersonName = '';
  ngOnInit() {
  }

  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName)
    this.enteredPersonName = '';

  }

}

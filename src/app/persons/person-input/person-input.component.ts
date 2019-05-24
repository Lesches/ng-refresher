import {Component, OnInit} from '@angular/core';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor(private personsService: PersonsService) { }

    enteredPersonName = '';
  ngOnInit() {
  }

  onCreatePerson() {

    this.personsService.addPerson(this.enteredPersonName)
    console.log(this.enteredPersonName);

  }

}

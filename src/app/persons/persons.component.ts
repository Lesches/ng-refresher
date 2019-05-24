import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {PersonsService} from './persons.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private personsService: PersonsService) {
    this.personsService = personsService;
  }
  ngOnInit() {

    this.personListSubs = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.personsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }

}

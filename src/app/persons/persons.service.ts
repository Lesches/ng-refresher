import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons = ['Trump', 'Tucker', 'Stuckey'];

  addPerson (name:string) {
    this.persons.push(name);
  }

  constructor() { }
}

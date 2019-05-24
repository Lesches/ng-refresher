import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personsChanged = new Subject<string[]>();
 persons = [];



  constructor(private http: HttpClient) { }

  fetchPersons(){
    this.http.get<any>('https://swapi.co/api/people').pipe(map(res => {
      return res.results.map(character => character.name);
    })).subscribe(res => {
        this.personsChanged.next(res);
      }
    );
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string){
    this.persons = this.persons.filter(person => {
      return person !== name;
      }

    );
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}

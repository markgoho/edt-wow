import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

@Injectable()
export class SearchService {
  private url = 'https://us.api.battle.net/wow';
  private key = '9txv9ykypcv4em8ngw28k3bdxqhvp78a';

  constructor(private http: HttpClient) {}

  getCharacter(character, realm) {
    return this.http.get<Character>(
      `${this.url}/character/${realm}/${character}?locale=en_US&apikey=${this
        .key}`
    );
  }

  // getRealms() {
  //   return this.http.get()
  // }
}

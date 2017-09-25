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

  getStats(character, realm) {
    return this.http.get<Character>(
      `${this
        .url}/character/${realm}/${character}?fields=stats&locale=en_US&apikey=${this
        .key}`
    );
  }

  getEquipment(character, realm) {
    return this.http.get<Character>(
      `${this
        .url}/character/${realm}/${character}?fields=items&locale=en_US&apikey=${this
        .key}`
    );
  }

  getItem(itemId) {
    return this.http.get<Character>(
      `${this.url}/item/${itemId}?locale=en_US&apikey=${this.key}`
    );
  }

  getRealms() {}
}

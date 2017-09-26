import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../models/character';
import { CharacterStats } from '../models/character-stats';
import { ItemDetail } from '../models/item-detail';
import { CharacterItems } from '../models/character-items';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  private url = 'https://us.api.battle.net/wow';
  private key = '9txv9ykypcv4em8ngw28k3bdxqhvp78a';

  constructor(private http: HttpClient) {}

  getCharacter(character, realm): Observable<Character> {
    return this.http.get<Character>(
      `${this.url}/character/${realm}/${character}?locale=en_US&apikey=${this
        .key}`
    );
  }

  getStats(character, realm): Observable<CharacterStats> {
    return this.http.get<CharacterStats>(
      `${this
        .url}/character/${realm}/${character}?fields=stats&locale=en_US&apikey=${this
        .key}`
    );
  }

  getEquipment(character, realm): Observable<CharacterItems> {
    return this.http.get<CharacterItems>(
      `${this
        .url}/character/${realm}/${character}?fields=items&locale=en_US&apikey=${this
        .key}`
    );
  }

  getItem(itemId): Observable<ItemDetail> {
    return this.http.get<ItemDetail>(
      `${this.url}/item/${itemId}?locale=en_US&apikey=${this.key}`
    );
  }

  getRealms() {}
}

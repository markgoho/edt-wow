import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

// Models
import { Character } from '../models/character';
import { CharacterStats, Stats } from '../models/character-stats';
import { ItemDetail } from '../models/item-detail';
import { CharacterItems, Items } from '../models/character-items';
import { Realms, Realm } from '../models/realms';

@Injectable()
export class SearchService {
  private url = 'https://us.api.battle.net/wow';
  private key = '9txv9ykypcv4em8ngw28k3bdxqhvp78a';

  constructor(private http: HttpClient) {}

  getStats(character, realm): Observable<Stats> {
    return this.http
      .get<CharacterStats>(
        `${this
          .url}/character/${realm}/${character}?fields=stats&locale=en_US&apikey=${this
          .key}`
      )
      .filter(Boolean)
      .map(char => char.stats);
  }

  getEquipment(character, realm): Observable<Items> {
    return this.http
      .get<CharacterItems>(
        `${this
          .url}/character/${realm}/${character}?fields=items&locale=en_US&apikey=${this
          .key}`
      )
      .filter(Boolean)
      .map(char => char.items);
  }

  getItem(itemId): Observable<ItemDetail> {
    return this.http.get<ItemDetail>(
      `${this.url}/item/${itemId}?locale=en_US&apikey=${this.key}`
    );
  }

  getRealms(): Observable<Realm[]> {
    return this.http
      .get<Realms>(`${this.url}/realm/status?local=en_US&apikey=${this.key}`)
      .map(realms => realms.realms);
  }
}

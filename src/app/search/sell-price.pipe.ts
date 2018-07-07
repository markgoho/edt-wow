
import {map} from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from './search.service';




@Pipe({
  name: 'sellPrice',
  pure: false
})
export class SellPricePipe implements PipeTransform {
  private cachedData: any = null;
  private cachedId: number;

  constructor(private search: SearchService) {}

  transform(id: any) {
    if (id !== this.cachedId) {
      this.cachedData = null;
      this.cachedId = id;
      this.search
        .getItem(id).pipe(
        map(item => item.sellPrice))
        .subscribe(price => (this.cachedData = price));
    }

    return this.cachedData;
  }
}

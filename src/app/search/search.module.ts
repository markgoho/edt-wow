import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchInputComponent } from './containers/search/search.component';
import { SearchService } from './search.service';
import { CharacterComponent } from './containers/character/character.component';
import { CharacterItemsComponent } from './components/character-items/character-items.components';
import { CharacterStatsComponent } from './components/character-stats/character-stats.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    SearchInputComponent,
    CharacterStatsComponent,
    CharacterItemsComponent,
    CharacterComponent
  ],
  exports: [SearchInputComponent, CharacterComponent]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [SearchService]
    };
  }
}

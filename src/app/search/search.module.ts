import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchInputComponent } from './containers/search/search.component';
import { SearchService } from './search.service';
import { CharacterComponent } from './components/character/character.components';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [SearchInputComponent, CharacterComponent],
  exports: [SearchInputComponent]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [SearchService]
    };
  }
}

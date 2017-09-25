import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent, LogoComponent],
  imports: [BrowserModule, SearchModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

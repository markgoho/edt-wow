import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchModule } from './search/search.module';
import { ErrorInterceptor } from './error.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LogoComponent],
  imports: [BrowserModule, SearchModule.forRoot(), ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

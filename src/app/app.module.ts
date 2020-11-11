import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablamutltiplicarComponent } from './components/tablamutltiplicar/tablamutltiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablamutltiplicarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

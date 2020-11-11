import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; //IMPORTAMOS EL FORM MODULE PARA TRABAJAR CON FORMULARIOS
import { TablamutltiplicarComponent } from './components/tablamutltiplicar/tablamutltiplicar.component';
import { HomeComponent } from './components/rutas/home/home.component';
import { AtleticoComponent } from './components/rutas/atletico/atletico.component';
import { GulagComponent } from './components/rutas/gulag/gulag.component';
import { WindowsComponent } from './components/rutas/windows/windows.component';

//DEBEMOS IMPORTAR LOS DOS NOMBRES ANTERERIORES DE app.rounting.ts
import { appRoutingProviders, routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    TablamutltiplicarComponent,
    HomeComponent,
    AtleticoComponent,
    GulagComponent,
    WindowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//IMPORTAR LOS COMPONENTES 
import { HomeComponent } from './components/rutas/home/home.component';
import { AtleticoComponent } from './components/rutas/atletico/atletico.component';
import { GulagComponent } from './components/rutas/gulag/gulag.component';
import { WindowsComponent } from './components/rutas/windows/windows.component';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
//ARRAY DE RUTAS
//LAS RUTAS LLEVAN IMPLICITA LA /, NO HACE FALTA PONERLAS DESDE HOME
//{path : "cine", component: Cine}

//PARA AÑADIR PAGINA ERROR 404, DEBE SER LA ULTIMA PAGINA
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "atletico", component: AtleticoComponent },
    { path: "gulag", component: GulagComponent },
    { path: "windows", component: WindowsComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "numerodoble/:numero", component: NumerodobleComponent },
    { path: "**", component: Error404Component }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
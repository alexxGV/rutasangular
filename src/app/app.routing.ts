import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//IMPORTAR LOS COMPONENTES 
import { HomeComponent } from './components/rutas/home/home.component';
import { AtleticoComponent } from './components/rutas/atletico/atletico.component';
import { GulagComponent } from './components/rutas/gulag/gulag.component';
import { WindowsComponent } from './components/rutas/windows/windows.component';

//ARRAY DE RUTAS
//LAS RUTAS LLEVAN IMPLICITA LA /, NO HACE FALTA PONERLAS DESDE HOME
//{path : "cine", component: Cine}

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "atletico", component: AtleticoComponent },
    { path: "gulag", component: GulagComponent },
    { path: "windows", component: WindowsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
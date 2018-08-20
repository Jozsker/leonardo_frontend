import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { AmpleAdminComponent } from '../ampleadmin/ampleadmin.component';
import { CochesComponent } from '../components/coches/coches.component';
import { ClientesComponent }   from '../components/ample-admin/ampleadmin-clients/clientes.component';
import { DashboardComponent }   from '../components/ample-admin/ampleadmin-dashboard/dashboard.component';

const appRoutes: Routes = [
	{path: '', component: DashboardComponent},
	{path: 'home', component: DashboardComponent},
	{path: 'coches', component: CochesComponent},
	{path: 'clientes', component: ClientesComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: '**', component: DashboardComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
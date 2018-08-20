import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from "./app-routing/app.routing";

import { AmpleAdminComponent } from './ampleadmin/ampleadmin.component';
import { AmpleAdminHeaderComponent }   from './ampleadmin/ampleadmin-header/ampleadmin-header.component';
import { AmpleAdminLeftSideComponent } from './ampleadmin/ampleadmin-left-side/ampleadmin-left-side.component';
import { AmpleAdminContentComponent }  from './ampleadmin/ampleadmin-content/ampleadmin-content.component';
import { AmpleAdminRightSidebarComponent }   from './ampleadmin/ampleadmin-right-sidebar/ampleadmin-right-sidebar.component';
import { AmpleAdminFooterComponent }   from './ampleadmin/ampleadmin-footer/ampleadmin-footer.component';
import { CochesComponent }   from './components/coches/coches.component';
import { ClientesComponent }   from './components/ample-admin/ampleadmin-clients/clientes.component';
import { DashboardComponent }   from './components/ample-admin/ampleadmin-dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AmpleAdminComponent,
    AmpleAdminHeaderComponent,
    AmpleAdminLeftSideComponent,
    AmpleAdminContentComponent,
    AmpleAdminRightSidebarComponent,
    AmpleAdminFooterComponent,
    CochesComponent,
    ClientesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

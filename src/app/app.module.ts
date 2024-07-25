import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';
import { ListarProvedoresComponent } from './provedor/listar-provedores/listar-provedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    ListarProvedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

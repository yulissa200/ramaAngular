import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';
import { ListarProvedoresComponent } from './provedor/listar-provedores/listar-provedores.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    ListarProvedoresComponent,
    ListarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

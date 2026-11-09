import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
Imports:
FormsModule




import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FormapagoComponent } from './Components/formapago/formapago.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { SucursalesComponent } from './Components/sucursales/sucursales.component';
import { TipoproductoComponent } from './Components/tipoproducto/tipoproducto.component';
import { TipousuarioComponent } from './Components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { CxcobrarComponent } from './Components/cxcobrar/cxcobrar.component';
import { CxpagarComponent } from './Components/cxpagar/cxpagar.component';
import { AreasTrabajoComponent } from './Components/areas-trabajo/areas-trabajo.component';
import { EmpresaEditComponent } from './Components/empresa-edit/empresa-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ProveedorComponent,
    EmpleadosComponent,
    ClientesComponent,
    FormapagoComponent,
    PagosComponent,
    ProductoComponent,
    SucursalesComponent,
    TipoproductoComponent,
    TipousuarioComponent,
    UsuarioComponent,
    CxcobrarComponent,
    CxpagarComponent,
    AreasTrabajoComponent,
    EmpresaEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

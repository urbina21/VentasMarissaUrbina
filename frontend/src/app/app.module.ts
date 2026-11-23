import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





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

import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FilterempresaPipe } from './Pipes/filterempresa.pipe';
import { FilterempleadosPipe } from './Pipes/filterempleados.pipe';
import { FilterclientesPipe } from './Pipes/filterclientes.pipe';
import { FilterproveedorPipe } from './Pipes/filterproveedor.pipe';
import { FiltersucursalesPipe } from './Pipes/filtersucursales.pipe';
import { FilterproductoPipe } from './Pipes/filterproducto.pipe';
import { FilterusuarioPipe } from './Pipes/filterusuario.pipe';
import { FilterareasTrabajoPipe } from './Pipes/filterareastrabajo.pipe';
import { FilterformapagoPipe } from './Pipes/filterformapago.pipe';
import { FiltertipoproductoPipe } from './Pipes/filtertipoproducto.pipe';
import { FiltertipousuarioPipe } from './Pipes/filtertipousuario.pipe';




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
    EmpresaEditComponent,
    NavegacionComponent,
    FilterempresaPipe,
    FilterempleadosPipe,
    FilterclientesPipe,
    FilterproveedorPipe,
    FiltersucursalesPipe,
    FilterproductoPipe,
    FilterusuarioPipe,
    FilterareasTrabajoPipe,
    FilterformapagoPipe,
    FiltertipoproductoPipe,
    FiltertipousuarioPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule    
  ],
  providers: [DataService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

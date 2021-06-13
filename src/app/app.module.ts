import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsuariosService} from './services/usuarios.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {FormsModule} from '@angular/forms';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component'
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { AlumnoListarAprobComponent } from './components/alumno-listar-aprob/alumno-listar-aprob.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosIngresarComponent,
    UsuariosRegistrarComponent,
    UsuariosListarComponent,
    UsuariosPrincipalComponent,
    UsuariosHomeComponent,
    AlumnoListarAprobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuariosService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

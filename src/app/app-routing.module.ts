import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosListarComponent} from "./components/usuarios-listar/usuarios-listar.component"
import {UsuariosIngresarComponent} from "./components/usuarios-ingresar/usuarios-ingresar.component"
import {UsuariosRegistrarComponent} from "./components/usuarios-registrar/usuarios-registrar.component"
import { UsuariosPrincipalComponent } from "./components/usuarios-principal/usuarios-principal.component";
import { AlumnoListarAprobComponent } from "./components/alumno-listar-aprob/alumno-listar-aprob.component";
import { AlumnoListarCorreComponent } from "./components/alumno-listar-corre/alumno-listar-corre.component";
import { UsuariosHomeComponent } from "./components/usuarios-home/usuarios-home.component";
import {AuthGuard} from './auth.guard';



const routes: Routes = [
	{	
		path: '',
		redirectTo: 'usuarios/ingresar',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/listar',
		component: UsuariosListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path: 'usuarios/registrar',
		component: UsuariosRegistrarComponent
	},
	{
		path: 'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
	{
		path:'usuarios/home',
		component: UsuariosHomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path:'usuarios/listMaterias',
		component: AlumnoListarAprobComponent,
	},
	{
		path:'usuarios/listCorre',
		component: AlumnoListarCorreComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

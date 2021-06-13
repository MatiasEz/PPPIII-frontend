import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-alumno-listar-aprob',
  templateUrl: './alumno-listar-aprob.component.html',
  styleUrls: ['./alumno-listar-aprob.component.css']
})
export class AlumnoListarAprobComponent implements OnInit {

  constructor(private usuariosService:UsuariosService) { }
  materias:any = [];
  ngOnInit(): void {

    this.usuariosService.listarMaterias(localStorage.dni).subscribe(
			res => { 
        this.materias = res; 
        console.log(res)
      },
      err => {
        console.log(err.error.message);

        
      }
		)
	}
  

}

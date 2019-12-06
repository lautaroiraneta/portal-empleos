import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

export class Postulacion {
  alumnoId: string;
  propuestaId: string;
  empresaId: string;
}

export class PropuestaVista {
  id: string;
  empresa: IdValor;
  titulo: string;
  provincia: string;
  zona: string;
  ciudad: string;
  localidad: string;
  tipoEmpleo: string;
  turnoEmpleo: string;
  fechaAlta: string;
  sueldoBruto: string;
  beneficios: string;
  descripcion: string;
  edadMin: string;
  edadMax: string;
  reubicarse: string;
  habilidadesPersonales: string;
  porcentajeMatApr: string;
  promedio: string;
  anioCursada: string;
}

@Component({
  selector: 'app-propuesta-view',
  templateUrl: './propuesta-view.component.html',
  styleUrls: ['./propuesta-view.component.css']
})
export class PropuestaViewComponent implements OnInit {
  propuesta: PropuestaVista;

  constructor(private route: ActivatedRoute, private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.http.get('https://localhost:44374/Propuesta/get-by-id?propuestaId=' + this.route.snapshot.params['id']).subscribe((x: PropuestaVista) => {
      this.propuesta = x;
    });
    console.log(this.propuesta);
  }

  getUbicacion(): string {
    var ubi: string[] = [];
    if (this.propuesta !== undefined && this.propuesta !== null) {
      if (this.propuesta.localidad !== undefined && this.propuesta.localidad !== null && this.propuesta.localidad !== '') {
        ubi.push(this.propuesta.localidad);
      }
      if (this.propuesta.ciudad !== undefined && this.propuesta.ciudad !== null && this.propuesta.ciudad !== '') {
        ubi.push(this.propuesta.ciudad);
      }
      if (this.propuesta.zona !== undefined && this.propuesta.zona !== null && this.propuesta.zona !== '') {
        ubi.push(this.propuesta.zona);
      }
      if (this.propuesta.provincia !== undefined && this.propuesta.provincia !== null && this.propuesta.provincia !== '') {
        ubi.push(this.propuesta.provincia);
      }
      if (ubi.length > 0) {
        return ubi.join(', ');
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log('modal cerrado');
    });
  }

  postularme() {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    let data = new Postulacion();
    if (!usuario.alumnoId) {
      alert('No hay un alumno logueado.');
    }
    data.alumnoId = usuario.alumnoId;
    data.propuestaId = this.route.snapshot.params['id'];
    data.empresaId = this.propuesta.empresa.id;

    this.http.post('https://localhost:44374/EtapaSeleccionAlumno/postulacion', data).subscribe(x => {
      alert('Postulado!');
      this.modalService.dismissAll();
    });

  }
}

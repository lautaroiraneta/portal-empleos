import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { IdValor } from '../empresa/empresa.component';
import { DataService } from '../data/data.service';
import { HttpClient } from '@angular/common/http';

export class Acuerdo {
  ingresoAlumnos: string;
  alumno: string;
  empresa: string;
  nombre: string;
  docenteGuia: IdValor[];
  tutor: IdValor[];
  duracion: number;
  tareas: IdValor[] = [];
  textoPlan: string;
  textoAcuerdo: string;
  calendario: Calendario = new Calendario();
}

export class Calendario {
  horarioIngLunes: string = '12:00 AM';
  horarioIngMartes: string = '12:00 AM';
  horarioIngMiercoles: string = '12:00 AM';
  horarioIngJueves: string = '12:00 AM';
  horarioIngViernes: string = '12:00 AM';
  horarioIngSabado: string = '12:00 AM';
  horarioIngDomingo: string = '12:00 AM';
  horarioSalLunes: string = '12:00 AM';
  horarioSalMartes: string = '12:00 AM';
  horarioSalMiercoles: string = '12:00 AM';
  horarioSalJueves: string = '12:00 AM';
  horarioSalViernes: string = '12:00 AM';
  horarioSalSabado: string = '12:00 AM';
  horarioSalDomingo: string = '12:00 AM';
}

@Component({
  selector: 'app-acuerdo-individual',
  templateUrl: './acuerdo-individual.component.html',
  styleUrls: ['./acuerdo-individual.component.css']
})
export class AcuerdoIndividualComponent implements OnInit {
  docentesGuia: IdValor[];
  tutores: IdValor[];

  acuerdo: Acuerdo;

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(private dataService: DataService, private http: HttpClient) { 
    this.acuerdo = new Acuerdo();
  }

  ngOnInit() {
    this.dataService.getDocentesGuia().subscribe(x => {
      this.docentesGuia = x;
    });

    this.dataService.getTutores().subscribe(x => {
      this.tutores = x;
    });
    
    this.acuerdo = new Acuerdo();
    this.acuerdo.tareas.push({ id: '', valor: '' });
  }

  onSubmit(form: NgForm) {
    let data = new Acuerdo();
    data.alumno = this.acuerdo.alumno;
    data.calendario = this.acuerdo.calendario;
    data.docenteGuia = this.acuerdo.docenteGuia;
    data.duracion = this.acuerdo.duracion;
    data.empresa = this.acuerdo.empresa;
    data.ingresoAlumnos = this.acuerdo.ingresoAlumnos;
    data.nombre = this.acuerdo.nombre;
    data.tareas = this.acuerdo.tareas;
    data.tutor = this.acuerdo.tutor;

    this.http.post('https://localhost:44374/Acuerdo', data).subscribe(x => {
      alert('Acuerdo creado!');
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  agregarTarea() {
    this.acuerdo.tareas.push( { id: '', valor: '' });
  }
}

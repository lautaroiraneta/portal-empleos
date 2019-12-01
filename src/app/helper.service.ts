import { Injectable } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { IdValor } from './empresa/empresa.component';

export interface ExperienciaLaboral {
  puesto: IdNombre[],
  anosExperiencia: string
};

export interface Conocimiento {
  conocimiento: IdNombre[],
  anosExperiencia: string
};

export interface IdNombre {
  id: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true
  };

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  carreras = [
    { id: '1', nombre: 'Ingeniería en Informática' },
    { id: '2', nombre: 'Licenciatura en Informática' },
    { id: '3', nombre: 'Traductor Público' },
    { id: '4', nombre: 'Abogacía' }
  ];

  lugares = [
    { id: '1', nombre: 'Capital Federal' },
    { id: '2', nombre: 'GBA Sur' },
    { id: '3', nombre: 'GBA Norte' },
    { id: '4', nombre: 'GBA Oeste' }
  ];

  tiposEmpleo = [
    { id: 'full', valor: 'Full-Time' },
    { id: 'part', valor: 'Part-Time' },
    { id: 'pasantia', valor: 'Pasantía' }
  ];

  turnos = [
    { id: 'm', valor: 'Mañana' },
    { id: 't', valor: 'Tarde' },
    { id: 'n', valor: 'Noche' }
  ];

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  conocimientos = [
    { id: '1', nombre: 'Java' },
    { id: '2', nombre: '.NET' },
    { id: '3', nombre: 'Hibernate' },
    { id: '4', nombre: 'WebServices' }
  ];

  conocimientosExtra = [
    { id: '1', nombre: 'Proactivo' },
    { id: '2', nombre: 'Buen Compañero' },
    { id: '3', nombre: 'Alegre' },
    { id: '4', nombre: 'Agile' }
  ];

  agregarEmail(list: IdValor[]) {
    list.push({ id: 'new', valor: ''});
  }

  agregarTelefono(list: IdValor[]) {
    list.push({ id: 'new', valor: ''});
  }

  eliminarEmail(list: IdValor[], id: string): IdValor[] {
    list = list.filter(x => x.id !== id);

    if (list.length === 0) {
      list.push({ id: 'new', valor: '' });
    }

    return list;
  }

  eliminarTelefono(list: IdValor[], id: string): IdValor[] {
    list = list.filter(x => x.id !== id);

    if (list.length === 0) {
      list.push({ id: 'new', valor: '' });
    }

    return list;
  }
}

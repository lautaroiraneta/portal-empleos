import { Injectable } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

export interface Email {
  id: string
  email: string;
}

export interface Telefono {
  id: string;
  telefono: string;
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

  puestos = [
    { id: '1', nombre: 'Puesto 1' },
    { id: '2', nombre: 'Puesto 2' },
    { id: '3', nombre: 'Puesto 3' },
    { id: '4', nombre: 'Puesto 4' },
    { id: '5', nombre: 'Puesto 5' },
  ];

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
    { id: 'full', nombre: 'Full-Time' },
    { id: 'part', nombre: 'Part-Time' },
    { id: 'pasantia', nombre: 'Pasantía' }
  ];

  turnos = [
    { id: 'm', nombre: 'Mañana' },
    { id: 't', nombre: 'Tarde' },
    { id: 'n', nombre: 'Noche' }
  ];

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  agregarEmail(list: Email[]) {
    list.push({ id: (list[list.length - 1].id + 1).toString(), email: 'email3@gmail.com'});
  }

  agregarTelefono(list: Telefono[]) {
    list.push({ id: (list[list.length - 1].id + 1).toString(), telefono: '994949'});
  }

  eliminarEmail(list: Email[], id: string): Email[] {
    list = list.filter(x => x.id !== id);

    if (list.length === 0) {
      list.push({ id: '1', email: '' });
    }

    return list;
  }

  eliminarTelefono(list: Telefono[], id: string): Telefono[] {
    list = list.filter(x => x.id !== id);

    if (list.length === 0) {
      list.push({ id: '1', telefono: '' });
    }

    return list;
  }
}

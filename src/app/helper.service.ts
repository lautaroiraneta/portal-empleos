import { Injectable } from '@angular/core';

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

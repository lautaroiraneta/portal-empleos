import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-tarea-defecto',
  templateUrl: './tarea-defecto.component.html',
  styleUrls: ['./tarea-defecto.component.css']
})
export class TareaDefectoComponent implements OnInit {
  tarea = {
    nombre: 'asdf',
    rolResponsable: [{ id: '2', nombre: 'Alumno' }],
    tareasPredecesoras: [
      { id: '1', nombre: 'Tarea 1' },
      { id: '2', nombre: 'Tarea 2' }
    ],
    tareasSucesoras: [
      { id: '4', nombre: 'Tarea 4' },
      { id: '5', nombre: 'Tarea 5' }
    ]
  }

  roles = [
    { id: '1', nombre: 'Universidad' },
    { id: '2', nombre: 'Alumno' },
    { id: '3', nombre: 'Empresa' }
  ];

  tareas = [
    { id: '1', nombre: 'Tarea 1' },
    { id: '2', nombre: 'Tarea 2' },
    { id: '3', nombre: 'Tarea 3' },
    { id: '4', nombre: 'Tarea 4' },
    { id: '5', nombre: 'Tarea 5' },
    { id: '6', nombre: 'Tarea 6' },
  ];

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  dropdownSettingsMultiple: IDropdownSettings = {
    singleSelection: false,
    closeDropDownOnSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  save() {
    console.log(this.tarea);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

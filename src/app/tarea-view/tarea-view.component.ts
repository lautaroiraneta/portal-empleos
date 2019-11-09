import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea-view',
  templateUrl: './tarea-view.component.html',
  styleUrls: ['./tarea-view.component.css']
})
export class TareaViewComponent implements OnInit {
  tarea = {
    nombre: 'Redacción del Convenio',
    descripcion: 'Se debe generar un convenio entre la empresa Google y la Universidad.',
    subtareas: [
      { id: 'a', nombre: 'Subtarea A', estado: 'Iniciada' },
      { id: 'b', nombre: 'Subtarea B', estado: 'Finalizada' },
      { id: 'c', nombre: 'Subtarea C', estado: 'Iniciada' }
    ],
    estado: 'Finalizada',
    responsable: 'Juan Gómez',
    fechaFinalizacion: '24/08/2019',
    tareasHabilita: [
      { id: 'fcu', nombre: 'Firma de Convenio (Universidad)' },
      { id: 'fce', nombre: 'Firma de Convenio (Empresa)' }
    ],
    tareasPredecesoras: [
      { id: 'rdd', nombre: 'Revisión de Documento' }
    ],
    alertas: 'Cada 3 días',
    archivosAdjuntos: [
      { id: '1', nombre: 'archivo adjunto.pdf', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'http://www.google.com.ar' }
    ],
    comentarios: [
      { id: '1', nombre: 'Lucía López', mensaje: 'Si, estamos haciéndolo, estará listo en dos días.', fecha: '24/07/2019 15:43', foto: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ' },
      { id: '2', nombre: 'Brian Vargas', mensaje: 'Hola @Lucía López, pudiste revisar la documentación?', fecha: '23/07/2019 12:51', foto: 'https://gentleprocedurescliniceastgta.ca/wp-content/uploads/2016/11/man2.jpg' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

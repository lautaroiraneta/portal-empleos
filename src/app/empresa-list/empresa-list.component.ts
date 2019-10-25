import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas = [{
    nombre: 'Google',
    descripcion: 'Google LLC es una compañía principal subsidiaria de la multinacional estadounidense Alphabet Inc., cuya especialización son los productos y servicios relacionados con Internet, software, dispositivos electrónicos y otras tecnologías...',
    propuestasAbiertas: 4,
    propuestasAbiertasCarrera: 3,
    fotoPerfil: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/la-fundacion-de-google.png'
  }, {
    nombre: 'Thomson Reuters',
    descripcion: 'Thomson Reuters es una empresa de información, ​ creada por la compra de Reuters por la Corporación The Thomson Corporation el 17 de abril de 2008.​ Las acciones de Thomson Reuters cotizan en la Bolsa de Valores de Toronto y la Bolsa de Nueva York. La sede operativa se encuentra en el Midtown Manhattan, Nueva York…',
    propuestasAbiertas: 3,
    propuestasAbiertasCarrera: 1,
    fotoPerfil: 'https://media.licdn.com/dms/image/C4E0BAQH1yjTtvby_-A/company-logo_200_200/0?e=2159024400&v=beta&t=OH2Huw8lCHFr6JNB3oTSzv2Y8RClwPRR_8B59121IzI'
  }, {
    nombre: 'MercadoLibre',
    descripcion: 'MercadoLibre es una empresa argentina dedicada a las compras entre usuarios inscritos a su servicio de compras, ventas y pagos por Internet...',
    propuestasAbiertas: 2,
    propuestasAbiertasCarrera: 0,
    fotoPerfil: 'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2'
  }];

  items: any;
  filtroNombre: string;

  constructor() { }

  ngOnInit() {
    this.items = this.empresas;
  }

  actualizarItems() {
    console.log(this.filtroNombre);
    this.items = this.empresas.filter(x => {
      return (
        x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
        )
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micrositio',
  templateUrl: './micrositio.component.html',
  styleUrls: ['./micrositio.component.css']
})
export class MicrositioComponent implements OnInit {
  micrositio = {
    descripcion: 'asdkaosdkoasdokasdkoasdkoasdokkodskdsaasd',
    twitter: {
      usuario: 'lautaaa',
      mostrarFeed: true
    },
    facebook: {
      usuario: 'lalalla',
      mostrarFeed: false
    },
    instagram: {
      usuario: 'asdasdadd'
    },
    linkedIn: {
      usuario: 'dododood'
    },
    sitioWeb: 'www.wegwgewg.com'
  }

  constructor() { }

  ngOnInit() {
  }

}

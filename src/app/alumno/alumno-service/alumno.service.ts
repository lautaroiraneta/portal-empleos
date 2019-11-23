import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos = [
    {
      id: '1',
      nombres: 'Lautaro',
      apellidos: 'Irañeta',
      libretaUniversitaria: '1018944',
      email: 'lautaroiraneta@gmail.com',
      documento: {
        tipo: 'DNI',
        numero: '35.941.589'
      },
      nombreUsuario: 'lautaro.iraneta',
      carrera: 'Ingeniería en Informática',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/53392913_10217412438410264_1299546104634802176_n.jpg?_nc_cat=101&_nc_oc=AQnq8WyKzdlSniQnvJ0i5UZzYr5P8cxHNpiR0t7JpGmMgL0nbYTPykGBFP74zzlqjTQ&_nc_ht=scontent.faep7-1.fna&oh=b9120705606ef084094061f63c1b0261&oe=5E126BBC'
    },
    {
      id: '2',
      nombres: 'Lucas',
      apellidos: 'Vatano',
      libretaUniversitaria: '1015588',
      email: 'kvatano@gmail.com',
      documento: {
        tipo: 'DNI',
        numero: '34.159.753'
      },
      nombreUsuario: 'lvatano',
      carrera: 'Ingeniería en Informática',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4E03AQGdQj8sVm9_eg/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=v4N8uhgcrxwVwGQFaq1fDO_Gjje99vz0nYKBE9PdWSA'
    },
    {
      id: '3',
      nombres: 'Juan',
      apellidos: 'González',
      libretaUniversitaria: '14253678',
      email: 'juangonzalez22@gmail.com',
      documento: {
        tipo: 'DNI',
        numero: '19.147.285'
      },
      nombreUsuario: 'juancapo1',
      carrera: 'Licenciatura en RRHH',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4E03AQHr2Lc_0AtRUw/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=9bgiAp-SA7nRifFdy-NL62W9o-BBLPiVB3JBWUWXbHg'
    },
    {
      id: '4',
      nombres: 'Rocío',
      apellidos: 'Toledo',
      libretaUniversitaria: '1018200',
      email: 'rocionooliva@hotmail.com',
      documento: {
        tipo: 'DNI',
        numero: '36.666.007'
      },
      nombreUsuario: 'rochipiola5',
      carrera: 'Licenciatura en Informática',
      lugar: 'Banfield, Buenos Aires',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4D03AQHkdUQ-OU5BCA/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=a3N_N17m5NOS1cPXcyYFAPoVmfkfNhh7yFMJFkNGwjk'
    }
  ];

  constructor() { }

  getAlumnos() {
    return this.alumnos;
  }

  getById(id: string): any {
    return this.alumnos.filter(x => x.id === id)[0];
  }
}

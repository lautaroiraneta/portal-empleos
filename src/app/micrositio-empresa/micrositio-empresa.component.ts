import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micrositio-empresa',
  templateUrl: './micrositio-empresa.component.html',
  styleUrls: ['./micrositio-empresa.component.css']
})
export class MicrositioEmpresaComponent implements OnInit {
  empresa = {
    nombre: 'Google',
    sitioWeb: 'www.google.com.ar',
    logo: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/la-fundacion-de-google.png',
    descripcion: 'Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)Cross-browser and platform testing as standard practiceExperience using Invision a plusExperience in video production a plus or, at a minimum, a willingness to learnFar much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.',
    noticias: [{
      nombre: 'Noticia 1',
      fecha: '01/07/2019',
      cuerpo: 'Ubicado en el segundo nivel de la galería Tomás Olivieri, Working Place funciona como un espacio de cowork, que ofrece un servicio de arriendo flexible, ya sea por horas o jornadas, de salones, salas privadas y oficinas implementadas con un cómodo mobiliario y tecnología de punta, para el desarrollo de reuniones, conferencias, clases o seminarios. Para estos fines ofrece un servicio de wi-fi de primera calidad, con IP dedicada y una óptima velocidad de navegación, que facilita el desarrollo de dichas actividades, a sólo pasos de la gobernación provincial, el municipio penquista y las principales instituciones financieras de la capital regional.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.',
      foto: 'http://www.revistanos.cl/wp-content/uploads/2016/03/working-_MG_6493.jpg'
    }, {
      nombre: 'Noticia 2',
      fecha: '01/07/2019',
      cuerpo: '01/07/2019Ubicado en el segundo nivel de la galería Tomás Olivieri, Working Place funciona como un espacio de cowork, que ofrece un servicio de arriendo flexible, ya sea por horas o jornadas, de salones, salas privadas y oficinas implementadas con un cómodo mobiliario y tecnología de punta, para el desarrollo de reuniones, conferencias, clases o seminarios. Para estos fines ofrece un servicio de wi-fi de primera calidad, con IP dedicada y una óptima velocidad de navegación, que facilita el desarrollo de dichas actividades, a sólo pasos de la gobernación provincial, el municipio penquista y las principales instituciones financieras de la capital regional.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.',
      foto: 'https://media.glassdoor.com/l/2a/8a/6b/2e/workplace.jpg'
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}

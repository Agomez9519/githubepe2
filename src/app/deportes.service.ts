import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeportesService {

  deportes:any=[
    {nombre:'Colo Colo',
    descripcion:'El Equipo mas grande del football pasa por su peor situacion en años.Siguen las malas noticias para los albos y luego de perder por los cuartos de final de la Copa Libertadores frente al Palmeiras en el Estadio Monumental, Colo Colo arriesga otra sanción de la Conmebol, por el comportaiento de sus hinchas en el duelo copero.'},
    {nombre:'Universidad De Chile',
    descripcion:'Universidad de Chile lavó heridas de las dos derrotas consecutivas que traía a cuestas, ante Unión Española y Universidad Católica, ante Deportes La Serena. El triunfo por 3-0, donde contó con dos tantos de Joaquín Larrivey, que sigue como goleador del Campeonato Nacional con 12 anotaciones, le dio un nuevo aire a los dirigidos de Hernán Caputto que ya se encuentran en la Región de Antofagasta.'},
    {nombre:'Universidad Catolica',
     descripcion:'Los cruzados se impusieron con autoridad y sin contrapeso en el clásico universitario, superando a la Universidad de Chile por 3-0, aunque el marcador resultó mezquino para su amplia superioridad. El actual campeón del fútbol chileno juega de memoria y el equipo ya navega en el modo Ariel Holan. Lleva cinco puntos de diferencia sobre su más cercano perseguidor en la tabla y debería volver a sumar un triunfo en la próxima fecha cuando reciba en San Carlos a la Universidad de Concepción.'},
    {nombre:'Union la Calera',
     descripcion:'En un entretenido partido disputado en el Estadio Nicolás Chahuán Nazar, Unión La Calera derrotó por 3-0 a Huachipato, escalando hasta la cima del torneo y quedando como exclusivo puntero del Campeonato Nacional.Los goles para los “cementeros” llegaron bien entrado el encuentro gracias a la anotación de Andrés Vilches a los ’79, mientras que Jeisson Vargas aumentó el marcador a los 82′ tras notable jugada colectiva. Finalmente, Juan Leiva puso el tercero y definitivo en el cierre del partido (90+3′).'}

  ]

  constructor() { }

  obtenerDatos(){
    return this.deportes;
  }
}

export interface Proyecto { //esta es la estructura de proyectos
    id? : number;
    photo: string;
    nombreProyecto: string;
    descripcionProyecto: string;
    periodoProyecto: string;
    linkProyecto: string;
}
export interface Info{ //este es la estructura de sobreMi
    id?: number;
    titulo: string;
    texto: string;
}
export interface Portada { //esta es la estructura de la portada
    id? : number;
    photo: string;
    fondo: string;
    nombre: string;
}
export interface Skill { //esta es la estructura del apartado de habilidades
    id? : number;
    titulo: string;
    texto:string;
    nivel:string;
}
export interface Educacion { //esta es la estructura del apartado de habilidades
    id?: number;
    titulo: string;
    institucion: string;
    descripcion:string;
}
export interface Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;
    periodoExperiencia: string;
}
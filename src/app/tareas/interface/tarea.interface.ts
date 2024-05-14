export interface Tareas {
    id: string,
    nombre: string,
    descripcion?:string,
    estado?: number,
    fecha?: string,
    favorita?: number,
    start: Date,
    title: string,
}
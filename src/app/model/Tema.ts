import { Postagem } from "./Postagem"


export class Tema{
    public id: number 
    public titulo: string
    public classificacao: string
    public impacto: string
    public postagem: Postagem[]

}
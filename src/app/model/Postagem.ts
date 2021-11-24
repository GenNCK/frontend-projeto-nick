import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public privacidade: string
    public resumo: string
    public texto: string
    public imagem: string
    public data: Date
    public usuario:User
    public tema: Tema
}
import { Postagem } from "./Postagem"

export class User{

    public id: number
    public senha: string
    public nome: string
    public usuario: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
}
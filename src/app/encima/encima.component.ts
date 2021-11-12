import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-encima',
  templateUrl: './encima.component.html',
  styleUrls: ['./encima.component.css']
})
export class EncimaComponent implements OnInit {
  foto = environment.foto
  nome= environment.nome

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  hamburguer():any{
    const menu = document.querySelector('.toggle');
    const home = document.querySelector('.home');
    menu?.classList.toggle('ativo');
    home?.classList.toggle('ativo');
  }
  sair(){
    this.router.navigate(['/home'])
    environment.foto= ''
    environment.nome= ''
    environment.id= 0
    environment.token= ''

  }
}

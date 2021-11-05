import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hamburguer():any{
    const menu = document.querySelector('.toggle');
    const home = document.querySelector('.home');
    menu?.classList.toggle('ativo');
    home?.classList.toggle('ativo');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    }
    ,
    {
      icon: 'radio-button-on',
      name: 'Botones',
      redirectTo: '/botones'
    }
    ,
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    }
    ,
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    }
    ,
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time'
    }
    ,
    {
      icon: 'car',
      name: 'Fab',
      redirectTo: '/fab'
    }
    ,
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirectTo: '/grid'
    }
    ,
    {
      icon: 'infinite',
      name: 'Infinite - Scroll',
      redirectTo: '/infinite-scroll'
    }
    ,
    {
      icon: 'hammer',
      name: 'Input',
      redirectTo: '/input'
    }
    ,
    {
      icon: 'list',
      name: 'Listas - Sliding',
      redirectTo: '/list'
    }


  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

}
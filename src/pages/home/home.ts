import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../assets/extra/item';
import {eventos} from '../../assets/extra/eventos';
import { EventoPage } from '../evento/evento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items;
  eventoslist: Item[];
  constructor(public navCtrl: NavController, public eventos:eventos) {
    this.iniciarEventos();
  }
  iniciarEventos(){
    this.eventoslist = this.eventos.query();
    //põe pra ser igual a alguma tabela de banco de dados 
    //que a gnt vai registrar os eventos nela
  }
  getEventos(ev){
    //pra criar aquela lista
    this.iniciarEventos();
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.eventoslist = this.eventos.query();
      return;
    //Se não tiver nada escrito
    }
    this.eventoslist = this.eventos.query({
      name: val
    });
  }
  abrirEvento(item: Item){
    this.navCtrl.push(EventoPage, {
      item: item
    })

  }
}

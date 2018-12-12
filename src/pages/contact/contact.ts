import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../assets/extra/item';
import { EventoPage } from '../evento/evento';
import { eventos } from '../../assets/extra/eventos';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  eventoslist: Item[];
  constructor(public navCtrl: NavController, public eventos:eventos) {
    this.iniciarEventos();
  }
  abrirEvento(item: Item){
    this.navCtrl.push(EventoPage, {
      item: item
    })
  }
  iniciarEventos(){
    this.eventoslist = this.eventos.querycompra();
    //põe pra ser igual a alguma tabela de banco de dados 
    //que a gnt vai registrar os eventos nela
  }

}

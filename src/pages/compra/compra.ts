import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {eventos} from '../../assets/extra/eventos';

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventos: eventos) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }
  finalizaCompra(){
    this.eventos.compra(this.item);
  }

}

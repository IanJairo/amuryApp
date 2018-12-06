import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public account_nome: String;
  public account_email: string;
  public account_password: string;
  public account_cpf: string;

  public mensagem: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    public bancoDeDados: AngularFireDatabase,
    public autenticador: AngularFireAuth) {
      this.mensagem = '';
  }

  cadastrar_cliente() {
    this.autenticador.auth
    .createUserWithEmailAndPassword(this.account_email, this.account_password).then((resultado) => {
      this.account_email = '';
      this.account_password = '';
      this.mensagem = 'Cadastro realizado com sucesso! ';
    })
    .catch((erro) => {
      this.mensagem = 'Erro ao cadastrar o usuário: ' + erro;
    })
    this.navCtrl.push(TabsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseServicosProvider } from '../../providers/firebase-servicos/firebase-servicos';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  dados = {
    'account_email': '',
    'account_password': '',

    'account_nome': '',
    'account_cpf': ''
  };

  public account_email: string;
  public account_password: string;
  
  public mensagem: string;

  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    
    public dbServicos: FirebaseServicosProvider,
    public bancoDeDados: AngularFireDatabase,
    public autenticador: AngularFireAuth) {
      this.mensagem = '';
  }

  cadastrar_cliente(dados) {
    this.autenticador.auth
    .createUserWithEmailAndPassword(this.account_email, this.account_password).then((resultado) => {
      this.account_email = '';
      this.account_password = '';
      this.mensagem = 'Cadastro realizado com sucesso! ';
    })
    .catch((erro) => {
      this.mensagem = 'Erro ao cadastrar o usuário: ' + erro;
      
    })

    this.dbServicos.salvar(dados);

    this.navCtrl.setRoot(TabsPage);
  
   
  }

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}

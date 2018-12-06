import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Acesso
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';


//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public account_email: string;
  public account_password: string;
  public mensagem: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    //Firebase
    public bancoDeDados: AngularFireDatabase,
    public autenticador: AngularFireAuth) {
      this.mensagem = '';
  }

  login(){
    this.autenticador.auth
    .signInWithEmailAndPassword(this.account_email, this.account_password).then((resultado) => {
      this.navCtrl.setRoot(TabsPage);
    })  
    .catch((erro) => {
      this.mensagem = 'Erro no login: ' + erro;
    });
  }

  cadastro() {
    this.navCtrl.push(CadastroPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

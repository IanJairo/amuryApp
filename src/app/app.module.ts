import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PerfilPage } from '../pages/perfil/perfil';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { eventos } from '../assets/extra/eventos';
import { EventoPage } from '../pages/evento/evento';
import { FirebaseServicosProvider } from '../providers/firebase-servicos/firebase-servicos';



var config = {
  apiKey: "AIzaSyAdgR_Ll1EBMMeTJCPC-3HaKRQ1Y965OIE",
  authDomain: "amaurizinho-4963b.firebaseapp.com",
  databaseURL: "https://amaurizinho-4963b.firebaseio.com",
  projectId: "amaurizinho-4963b",
  storageBucket: "amaurizinho-4963b.appspot.com",
  messagingSenderId: "307970295865"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventoPage,
    //Acesso e cliente
    LoginPage,
    CadastroPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventoPage,
    //Acesso e cliente
    LoginPage,
    CadastroPage,
    PerfilPage,



  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    eventos,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServicosProvider

  ]
})
export class AppModule {}

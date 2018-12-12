import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServicosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServicosProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServicosProvider Provider');
  }

  salvar(dados: any) {
    this.db.list('dados')
           .push(dados)
           .then(r => console.log(r))
  }
}

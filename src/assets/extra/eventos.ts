import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class eventos{
    eventos: Item[] = [];

    defaultItem: any = {
        "name": "FOR",
        "profilePic": "assets/img/screenshot_1.png",
        "about": "Laço de Repetição",
      };

      constructor(){
      let eventos = [
        {
          "name": "Tinderfest",
          "img": "assets/imgs/Screenshot_1.png",
          "descri": "II"
        },
        {
          "name": "Baile da fdjfn",
          "img": "assets/imgs/Screenshot_2.png",
          "descri": "AA",
        },
        {
          "name": "Alguma coisa Folia",
          "img": "assets/imgs/Screenshot_3.png",
          "descri": "UU",
        },
        {
          "name": "McAlguem",
          "img": "assets/imgs/Screenshot_4.png",
          "descri": "EE",
        }
      ];
      for (let item of eventos) {
        this.eventos.push(new Item(item));
      }}
      query(params?: any) {
        if (!params) {
          return this.eventos;}
          //sem parametros de busca
        return this.eventos.filter((item) => {
          for (let key in params) {
            let field = item[key];
            if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
              return item;} 
              else if (field == params[key]) {
              return item;}}
          return null;});
      }
}
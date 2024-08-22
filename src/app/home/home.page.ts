import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recados: any;

  recado = {
    assunto: null,
    mensagem: null
  }
  
  constructor(
    private crudService: CrudService 
  ){}

  enviar(){
    this.crudService.insert(this.recado, 'recados');
  }

  carregar() {
    this.crudService.fetchAll('recados')
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    })
  }

}

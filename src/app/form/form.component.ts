import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Usuario, cidades } from '../usuario';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private usuario: Usuario;
  private key: string = '';

  private cidades: string[] = cidades;
  filtrados: Observable<string[]>;

  constructor(private servico: ServicoService) {
  }

  ngOnInit() {
    this.usuario = new Usuario();
    this.servico.currentUsuario.subscribe( data => {
      if( data.usuario && data.key ){
        this.usuario = new Usuario();
        this.usuario.nome = data.usuario.nome;
        this.usuario.cidade = data.usuario.cidade;
        this.key = data.key;
      }
    });
  }

  salvar(): void {
    if (this.key) {
      this.servico.update(this.usuario, this.key);
    }
    else {
      this.servico.insert(this.usuario);
    }
    this.reset();
  }

  reset():void{
    this.usuario = new Usuario();
    this.key = '';
  }

}
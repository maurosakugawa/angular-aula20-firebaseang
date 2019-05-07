import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  private colunas: string[] = ['nome', 'cidade'];
  private usuarios: Observable<any>;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.usuarios = this.servico.select();
  }

  delete(key: string) {
    console.log("aqui" + key);
    this.servico.delete(key); 
    return false; /* para evitar que o menu popup seja exibido */
  }

  edit(usuario: Usuario, key: string) {
    this.servico.changeUsuario(usuario, key);
  }

}
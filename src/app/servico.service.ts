import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';

@Injectable()
export class ServicoService {
  private usuarioSource = new BehaviorSubject({usuario:null, key:''});
  public currentUsuario = this.usuarioSource.asObservable();

  public lista: Usuario[] = [];
  constructor(private bd: AngularFireDatabase) { }

  insert(usuario: Usuario): void {
    this.bd.list('cadastro/usuario').push(usuario)
      .then((result: any) => {
        console.log(result.key);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  update(usuario: Usuario, key: string): void {
    this.bd.list('cadastro/usuario').update(key, usuario)
      .catch((error: any) => {
        console.error(error);
      });
  }

  delete(key: string): void {
    this.bd.object(`cadastro/usuario/${key}`).remove();
  }

  select() {
   return this.bd.list('cadastro/usuario')
    .snapshotChanges() /* pegar as mudanças */
    .pipe(
      /* mapeamento das mudanças */
      map( changes =>{
        /* ... são todas as demais propriedades do objeto JSON que está no BD */
        return changes.map( c => ({key: c.payload.key, ...c.payload.val() }) );
      })
    );
  }

  changeUsuario( usuario: Usuario, key: string){
    this.usuarioSource.next({usuario: usuario, key: key});
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ServicoService } from './servico.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

/* faz a inicialização do App */
import { AngularFireModule } from '@angular/fire';
/* módulo do Real Time Database */
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAIwMZFFQQIKMKSnMp9TfDGC8eo74PtT_U",
  authDomain: "ang-fatec19.firebaseapp.com",
  databaseURL: "https://ang-fatec19.firebaseio.com",
  projectId: "ang-fatec19",
  storageBucket: "ang-fatec19.appspot.com",
  messagingSenderId: "584176163392",
  appId: "1:584176163392:web:90f54e86c31bfb0b"
 };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  declarations: [AppComponent, FormComponent, TabelaComponent],
  bootstrap: [AppComponent],
  providers: [ServicoService]
})
export class AppModule { }

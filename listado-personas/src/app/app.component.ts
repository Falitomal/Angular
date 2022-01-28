import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  

  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyCQ69N0j78uc60o5e-n2KL_XAiF_QLo42E",
    authDomain: "listado-personas.firebaseapp.com",
   })
  }

 
}

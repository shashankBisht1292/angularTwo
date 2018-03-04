import { Component, OnInit } from '@angular/core';

//firebase injection
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private model = {};
  private valid = {
    cPass: true
  };

  constructor(private afs: AngularFirestore) {    
  }

  ngOnInit() {      
  }

  registerUser(){
    console.log("register for data",this.model);
    this.afs.collection("users").doc(Math.floor(new Date().getTime() + Math.random()).toString()).set(this.model);
  }
}

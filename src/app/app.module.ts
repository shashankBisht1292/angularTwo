import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms
import { FormsModule } from '@angular/forms';

//local injection
import { AppComponent } from './app.component';

//firebase injection
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//firebase Database
import { AngularFirestoreModule } from 'angularfire2/firestore';

//ng-bootstrap injection
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routing
import { AppRoutinModule, routingComponents } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

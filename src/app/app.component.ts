import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular-Firebase';
  courses:any[];
  courses$: Observable<any[]>;
  constructor( public db: AngularFireDatabase){
    // this.db.list('/courses').valueChanges()
    // .subscribe(courses => {
    //     this.courses=courses
    // })
    //using courses$ observable & async pipe
    this.courses$ = this.db.list('/courses').valueChanges();
  }
}

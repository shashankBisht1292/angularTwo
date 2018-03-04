import { Component, OnInit } from '@angular/core';
//firebase injection
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//rxjs
import { Observable } from 'rxjs/Observable';

interface Post{
  title: string;
  content: string;
}
interface PostId extends Post{
  id: string;
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

    
  id: number;
  post: Observable<any>;
  postDoc: AngularFirestoreDocument<any>;
  postCol: AngularFirestoreCollection<any>;
  posts: any;

  title: string;
  content: string;

  constructor(private afs: AngularFirestore) { 
    this.id = 1000;
  }

  ngOnInit() {
    this.postCol = this.afs.collection('posts');
    //this.postCol = this.afs.collection('posts',ref => ref.where('title','==','corsetro'));
    //this.posts = this.postCol.valueChanges();
    this.posts = this.postCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data   = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })  
  }

  genId(){    
    this.id+= 1;
  }

  addPost(){
    this.genId();    
    //this.afs.collection("posts").add({title:this.title,content:this.content});
    this.afs.collection("posts").doc('my-custom-id-'+this.id).set({title:this.title,content:this.content});
  }

  getPost(postId){
    this.postDoc = this.afs.doc("posts/"+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId){
    this.afs.doc("posts/"+postId).delete();
  }

}

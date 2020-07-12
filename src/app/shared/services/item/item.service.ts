import { Injectable } from '@angular/core';
import { Item } from '../../models/item/item.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseName = 'items';
  resource: Item;

  constructor(private firestore: AngularFirestore) {
    this.resource = new Item();
  }

  private returnCollection(_query_?): AngularFirestoreCollection<Item> {
    // return this.firestore.collection(this.baseName, (afs) =>
    //   afs.where(`users.${this.userId}`, '==', 'true')
    // );
    return this.firestore.collection(this.baseName);
  }

  getAll(): Observable<Item[]> {
    return this.returnCollection()
      .valueChanges()
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
  }

  getById(id: string): Observable<Item> {
    return this.firestore
      .collection(this.baseName)
      .doc(id)
      .valueChanges()
      .pipe(
        map(this.jsonDataToResource.bind(this)),
        catchError(this.handleError)
      );
  }

  persistDocument(_document_) {
    let _id: any;
    if (_document_.id) {
      _id = _document_.id;
    } else {
      _id = this.firestore.createId();
      _document_.id = _id;
    }

    return this.firestore
      .collection(this.baseName)
      .doc(_id)
      .set(Object.assign({}, _document_));
  }

  // update(resource: Item): Observable<Item> {
  //   const url = this.apiPath + '/' + resource.id;
  //   return this.http.put(url, resource).pipe(
  //     // manipulate the return
  //     map(() => resource), // Return the same resource
  //     catchError(this.handleError) // Manipulate error
  //   );
  // }

  delete(id: string): Promise<any> {
    return this.firestore.collection(this.baseName).doc(id).delete();
  }

  // Protected
  protected jsonDataToResources(jsonData: any[]): Item[] {
    const resources: Item[] = [];
    console.log(jsonData);
    jsonData.forEach((element) =>
      resources.push(this.jsonDataToResource(element))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): Item {
    return this.resource.fromJson(jsonData);
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERROR:', error);
    return throwError(error);
  }
}

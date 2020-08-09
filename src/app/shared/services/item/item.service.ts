import { Injectable } from '@angular/core';
import { Item } from '../../models/item.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../../../core/security/authService';
import { LoadingService } from '../../../core/services/loading/loading.service';
import { ShortenUrlService } from '../cuttly/shorten-url.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseName = 'items';
  resource: Item;
  protected user: firebase.User;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private loadingService: LoadingService,
    private shortenUrlService: ShortenUrlService
  ) {
    this.resource = new Item();
    this.user = this.authService.returnUser();
  }

  private returnCollection(_query_?): AngularFirestoreCollection<Item> {
    return this.firestore.collection(this.baseName, (afs) =>
      afs.where(`users.${this.user.uid}`, '==', true)
    );
  }

  getAll(): Observable<Item[]> {
    return this.returnCollection()
      .valueChanges()
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
  }

  getLatest(quantity): Observable<Item[]> {
    const date = this.firestore.collection(this.baseName, (res) =>
      res
        .orderBy('createdDate', 'desc')
        .limit(quantity)
        .where(`users.${this.user.uid}`, '==', true)
    );
    return date
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

  getUser() {
    return this.authService.returnUser();
  }

  async shortenUrl(link: string) {
    if (!link) {
      return;
    }
    const shorten = await this.shortenUrlService.shortenLink(link);
    return shorten;
  }

  async persistDocument(_document_: Item) {
    this.loadingService.startLoading();
    let _id: any;
    if (_document_.id) {
      _id = _document_.id;
    } else {
      _id = this.firestore.createId();
      _document_.id = _id;
      _document_.createdBy = this.getUser();
      _document_.createdDate = new Date();
      _document_.users = { [this.user.uid]: true };
    }

    return this.firestore
      .collection(this.baseName)
      .doc(_id)
      .set(Object.assign({}, _document_))
      .finally(() => this.loadingService.stopLoading());
  }

  delete(id: string): Promise<any> {
    this.loadingService.startLoading();

    return this.firestore
      .collection(this.baseName)
      .doc(id)
      .delete()
      .finally(() => this.loadingService.stopLoading());
  }

  // Protected
  protected jsonDataToResources(jsonData: any[]): Item[] {
    const resources: Item[] = [];
    jsonData.forEach((element) =>
      resources.push(this.jsonDataToResource(element))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): Item {
    return this.resource.fromJson(jsonData);
  }

  protected handleError(error: any): Observable<any> {
    return throwError(error);
  }
}

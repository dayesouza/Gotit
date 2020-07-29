import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cuttlyKey } from '../../../../environments/key';
import { take } from 'rxjs/operators';
import { Cuttly } from '../../models/cuttly.model';

@Injectable({ providedIn: 'root' })
export class CuttlyService {
  url: string = `https://cutt.ly/api/api.php?key=${cuttlyKey}`;

  constructor(private http: HttpClient) {}

  shortenLink(link: string) {
    if (!link.startsWith('https://cutt.ly')) {
      return this.http
        .get(`${this.url}&short=${link}`)
        .toPromise()
        .then((value: Cuttly) => value.url.shortLink);
    }
    return link;
  }
}

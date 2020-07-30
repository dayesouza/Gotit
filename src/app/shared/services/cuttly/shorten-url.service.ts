import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Cuttly } from '../../models/cuttly.model';

@Injectable({ providedIn: 'root' })
export class ShortenUrlService {
  // url: string = `https://cutt.ly/api/api.php?key=${environment.cuttlyKey}`;

  constructor(private http: HttpClient) {}

  shortenLink(link: string) {
    // if (!link.startsWith('https://cutt.ly')) {
    //   return this.http
    //     .get(`${this.url}&short=${link}`)
    //     .toPromise()
    //     .then((value: Cuttly) => value.url.shortLink);
    // }
    return link;
  }
}

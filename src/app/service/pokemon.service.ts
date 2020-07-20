import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service.service';

@Injectable({ providedIn: 'root' })
export class PokemonService extends Service {

  constructor(private httpClient: HttpClient) {
    super();
  }

  fetch(params: { limit: number, offset: number }): Observable<any> {
    return this.httpClient.get(
      this.apiUrl + this.extractParams(params)
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IGame } from './game'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GameService {

  private endpoint: string = "/assets/gamelist/data.json";

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  getGameList() : Observable<IGame[]> {
    return this.http.get<IGame[]>(this.endpoint)
                    .catch(this.errorHandler);
  }

}

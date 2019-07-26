import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

const MYJSON_API_URL = 'https://api.myjson.com/bins';

@Injectable()
export class MyjsonService {
  myjsonId: string = '12d50h';

  constructor(private http: HttpClient) {}

  put(obj:any) : Observable<any> {
    return this.http.put(`${MYJSON_API_URL}/${this.myjsonId}`, obj);
  }

  get() : Observable<any> {
    return this.http.get(`${MYJSON_API_URL}/${this.myjsonId}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  videoURL:string;
  url:string = 'https://static.chorus.ai/api/'
  _ID = '4d79041e-f25f-421d-9e5f-3462459b9934.json'

  constructor(private http: HttpClient) { }
  getText():Observable<Object>{
    return this
          .http
          .get(`${this.url}${this._ID}`);
  }
}
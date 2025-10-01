import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendMailService {
  private api: string = 'https://usebasin.com/f/1f30bf89f83c'

  constructor(private http: HttpClient) { }

  postMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if(response) return response;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5292/Menu/1");
  }
}

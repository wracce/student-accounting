import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _search = "";
  public get search() {
    return this._search;
  }
  public set search(value) {
    this._search = value;
  }


  constructor() { }
}

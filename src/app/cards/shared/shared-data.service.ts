import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();
  public favorites: any[] = [];

  constructor() {}

  setData(data: any) {
    this.sharedDataSubject.next(data);
  }

  getData() {
    return this.sharedDataSubject.value;
  }

  addFavorite(car: any) {
    this.favorites.push(car);
    console.log(this.favorites);
  }
}

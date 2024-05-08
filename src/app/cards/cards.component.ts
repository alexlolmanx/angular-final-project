import { Component } from '@angular/core';
import { SharedDataService } from './shared/shared-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  sharedData: any;
  public cars: any;
  public carList: any[] = [];

  constructor(
    public sharedDataService: SharedDataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.sharedData = this.sharedDataService.getData();
    this.http
      .get('https://rentcar.stepprojects.ge/api/Car')
      .subscribe((res) => {
        this.cars = res;
        for (let i = 1; i < 12; i++) {
          this.carList.push(this.cars[i]);
        }
      });
  }
}

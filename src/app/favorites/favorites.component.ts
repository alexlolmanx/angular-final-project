import { Component } from '@angular/core';
import { SharedDataService } from '../cards/shared/shared-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  constructor(public service: SharedDataService) {}
}

import {Component, OnInit} from '@angular/core';
import {PantryService} from "../pantry.service";

@Component({
  selector: 'app-coach-pantry',
  templateUrl: './coach-pantry.component.html',
  styleUrls: ['./coach-pantry.component.css']
})
export class CoachPantryComponent implements OnInit {
  drinksAvailable: any;
  coldDrinksAvailable: any;
  hotDrinksAvailable: any;

  constructor(
    private pantryService: PantryService
  ) {
  }

  ngOnInit(): void {
    this.drinksAvailable = this.pantryService.getDrinks();
    this.coldDrinksAvailable = this.pantryService.getColdDrinks();
    this.hotDrinksAvailable = this.pantryService.getHotDrinks();
  }

}

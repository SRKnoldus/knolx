import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  pantryStore = {
    food: {
      drinks: {
        coldDrinks: ['Cola', 'Pepsi', 'Cold Coffee'],
        beverages: ['Tea', 'Green Tea', 'Coffee']
      },
      snacks: {
        chips: ['Lays', 'Kurkure']
      },
      Desserts: {
        cakes: ['Black Forest', 'Red Velvet']
      }
    }
  }

  constructor() {
  }

  getDrinks(): any {
    return this.pantryStore.food.drinks;
  }

  getColdDrinks(): any {
    return this.pantryStore.food.drinks.coldDrinks;
  }

  getHotDrinks(): any {
    return this.pantryStore.food.drinks.beverages;
  }


}

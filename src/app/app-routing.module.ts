import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {CoachPantryComponent} from "./modules/pantry/coach-pantry/coach-pantry.component";
import {CoachLuggageComponent} from "./modules/luggage/coach-luggage/coach-luggage.component";
import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'train-coach/pantry',
    component: CoachPantryComponent
  },
  {
    path: 'train-coach/luggage',
    component: CoachLuggageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

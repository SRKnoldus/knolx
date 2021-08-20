import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoachLuggageComponent} from './coach-luggage/coach-luggage.component';
import {LuggageService} from "./luggage.service";


@NgModule({
  declarations: [
    CoachLuggageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LuggageService
  ]
})
export class LuggageModule {
}

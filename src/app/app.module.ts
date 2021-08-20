import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  faBeer,
  faCheckSquare,
  faHands,
  faHeart,
  faSquare,
  faUserMd,
  faUserNurse
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faMedium, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare as farCheckSquare, faSquare as farSquare} from '@fortawesome/free-regular-svg-icons';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LuggageModule} from "./modules/luggage/luggage.module";
import {PantryModule} from "./modules/pantry/pantry.module";
import {AboutPageComponent} from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LuggageModule,
    PantryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faTwitter,
      faMedium,
      faHeart,
      faUserNurse,
      faUserMd,
      faBeer,
      faHands
    )
  }
}

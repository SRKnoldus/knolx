import {Component, OnInit} from '@angular/core';
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  twitterIcon = faCoffee;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { MoviescategoriesComponent } from './moviescategories/moviescategories.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { TollywoodComponent } from './tollywood/tollywood.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HollywoodComponent,TollywoodComponent,BollywoodComponent,RouterOutlet,CardsComponent,MoviescategoriesComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularca3';

}

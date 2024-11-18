import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, CardsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  AboutCOmponent = [
    {
      title: 'Movie 1',
      description: 'This is the description for Movie 1.',
      image: 'https://m.media-amazon.com/images/M/MV5BZDRiYjE4NjYtYWE4Yy00YjZiLTlkYjMtYWI0MGVkYzliMjA2XkEyXkFqcGc@._V1_.jpg'
    },
    {
      title: 'Movie 2',
      description: 'This is the description for Movie 2.',
      image: 'https://media5.bollywoodhungama.in/wp-content/uploads/2023/04/Pushpa-2-%E2%80%93-The-Rule.jpg'
    },
    {
      title: 'Movie 3',
      description: 'This is the description for Movie 3.',
      image: 'https://cdnb.artstation.com/p/assets/images/images/064/209/701/large/ben-solo-cup-asset.jpg?1687367793'
    },
    {
      title: 'Movie 4',
      description: 'This is the description for Movie 3.',
      image: 'https://i.redd.it/thf792xbtgp41.png'
    }
  ];
}

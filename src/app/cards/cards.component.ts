import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  CardsComponent = [
    {
      title: 'Movie 1',
      description: 'This is the description for Movie 1.',
      image: 'https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_.jpg',
      link: 'https://hdmovie2.wales/movies/movies-164/'
    },
    {
      title: 'Movie 2',
      description: 'This is the description for Movie 2.',
      image: 'https://images.moviesanywhere.com/13421a5712257645b569175472983f39/7964cad0-bccf-4d88-8d4c-3dae3301de2b.jpg',
      link: 'https://hdmovie2.wales/movies/movies-2450/'
    },
    {
      title: 'Movie 3',
      description: 'This is the description for Movie 3.',
      image: 'https://m.media-amazon.com/images/M/MV5BZDIwZTlhZTUtNjUwYS00MGIzLWEyMzQtMjgxNjU3YWM0NTEyXkEyXkFqcGc@._V1_.jpg',
      link: 'https://hdmovie2.wales/movies/movies-166/'
    },
    {
      title: 'Movie 4',
      description: 'This is the description for Movie 4.',
      image: 'https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_.jpg',
      link: 'https://hdmovie2.wales/movies/movies-147/'
    }
  ];
  
}

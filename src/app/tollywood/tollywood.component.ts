import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HollywoodComponent } from "../hollywood/hollywood.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-tollywood',
  standalone: true,
  imports: [CommonModule, HollywoodComponent, FooterComponent],
  templateUrl: './tollywood.component.html',
  styleUrl: './tollywood.component.css'
})
export class TollywoodComponent {
  TollywoodComponent= [
    {
      title: 'Devara ',
      link:"https://hdmovie2.wales/movies/movies-3221/",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BMzUwZTM1ZDEtZGViOC00YmUxLWEwNWQtNGIyMzE2NWZkYzUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 4.5
    },
    {
      title: 'RRR',
      link:"https://hdmovie2.wales/movies/movies-5/",
      year: '2023',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv1X8trzljiXcfICq9V4qKsxWkSq59bLpdQ&s',
      rating: 4
    },
    {
      title: 'Bahubali 2',
      link:"https://hdmovie2.wales/movies/movies-644/",
      year: '2017',
      image: 'https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=90&crop=false',
      rating: 3.5
    },
    {
      title: 'Martin',
      link:"https://hdmovie2.wales/movies/movies-3323/",
      year: '2024',
      image: 'https://static.toiimg.com/photo/90793886.cms',
      rating: 4
    },
    {
      title: 'Pushpa part 1',
      link:"https://hdmovie2.gr/47232-sixty-minutes.html",
      year: '2022',
      image: 'https://desicinemas.tv/wp-content/uploads/2021/12/pushpa-the-rise-part-1-12780-poster.jpg',
      rating: 3
    },
    {
      title: 'The GOAT',
      link:"https://hdmovie2.gr/47232-sixty-minutes.html",
      year: '2024',
      image: 'https://static.moviecrow.com/gallery/20240116/224657-goat3.jpeg',
      rating: 4.5
    },
    {
      title: 'Kalki 2898 AD ',
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BMTM3ZGUwYTEtZTI5NS00ZmMyLTk2YmQtMWU4YjlhZTI3NjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 3.5
    },
    {
      title: 'Vikram',
      year: '2022',
      image: 'https://m.media-amazon.com/images/M/MV5BM2UzNzc4YjctOGNjYy00NTg2LTllZjctNDVlZGNjZjM1ZGYwXkEyXkFqcGc@._V1_.jpg',
      rating: 4
    },
    {
      title: 'Aavesham',
      year: '2024',
      image: 'https://image.tmdb.org/t/p/original/dZrK0XmFT5fL4ax7qn7JHXWupVH.jpg',
      rating: 2.5
    },
    {
      title: 'The GOAT life',
      year: '2024',
      image: 'https://i.redd.it/6fnz71vj5boc1.jpeg',
      rating: 3
    },
    {
      title: 'KGF 2',
      year: '2022',
      image: 'https://mrwallpaper.com/images/hd/cool-kgf-chapter-2-poster-0axobl2ual8wurln.jpg',
      rating: 4.5
    },
    {
      title: 'Master',
      year: '2021',
      image: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?fit=1400%2C1867&quality=80&zoom=1&ssl=1',
      rating: 3.5
    },
    {
      title: 'Hanuman',
      year: '2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17JGDA1JekAu7dElVKIe6Pg3ybMK5SC1RFQ&s',
      rating: 4
    },
    {
      title: 'Beast ',
      year: '2022',
      image: 'https://i.pinimg.com/originals/18/0a/2b/180a2bfb0598ba3552b83c8bd5cd0ae1.jpg',
      rating: 4
    },
    {
      title: 'Maharaja',
      year: '2024',
      image: 'https://static.moviecrow.com/gallery/20240529/229761-Maha.jpg',
      rating: 3.5
    },
    {
      title: 'Arjun Reddy',
      year: '2017',
      image: 'https://m.media-amazon.com/images/M/MV5BY2Y4ZDhmM2UtMWY0ZS00ODFmLTk2N2YtMDM1ZmQzYWI4ZDQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 4
    },
    {
      title: '96',
      year: '2018',
      image: 'https://images.moviebuff.com/8145811a-35f7-4a45-9391-da8195baf885?w=1000',
      rating: 5
    },
    {
      title: 'Raayan ',
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BYzdmNzBjMDgtMmJkNC00ZjU3LTgxZTctY2QyOTkxMTFhOTU5XkEyXkFqcGc@._V1_.jpg',
      rating: 3.5
    },
    {
      title: 'Kantara',
      link:"https://hdmovie2.gr/47232-sixty-minutes.html",
      year: '2023',
      image: 'https://m.media-amazon.com/images/M/MV5BNGY2NTc0NjctODU1YS00NjJhLWFmYjEtZjQ1Yzc1YmVhMjAwXkEyXkFqcGc@._V1_.jpg',
      rating: 3
    },
    {
      title: 'Jailer',
      year: '2024',
      image: 'https://i.pinimg.com/originals/7f/54/eb/7f54ebf507fc7984cba90ca8eaecd728.jpg',
      rating: 4
    }
  ];
  addToList(movie: any) {
    console.log(`${movie.title} added to the list!`);
  }
}

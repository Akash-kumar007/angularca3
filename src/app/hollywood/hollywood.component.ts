import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-hollywood',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './hollywood.component.html',
  styleUrl: './hollywood.component.css'
})
export class HollywoodComponent  {
  HollywoodComponent= [
    {
      title: 'Inception',
      link:"https://hdmovie2.wales/movies/movies-1227/",
      year: '2010',
      image: 'https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg',
      rating: 4.5
    },
    {
      title: 'Titaic',
      year: '2014',
      link:"https://hdmovie2.wales/movies/movies-3424/",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqb9LqH8koW0tNV6c8eQwhQ-pf3XvWAtPEw&s',
      rating: 4
    },
    {
      title: 'Mortal Kombat',
      link:"https://hdmovie2.wales/movies/movies-962/",
      year: '2008',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStjx7pFkh9OcbANjxEonvsqB1MoKR6bWzwg&s',
      rating: 3.5
    },
    {
      title: 'John wick 2',
      link:"https://hdmovie2.wales/movies/movies-3115/",
      year: '2017',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e22ff753131197.596c4c560ae3b.jpg',
      rating: 4
    },
    {
      title: ' FALL GUY',
      link:"https://hdmovie2.phd/movies/movies-1227/",
      year: '2024',
      image: 'https://image.tmdb.org/t/p/original/sftnVVMYjZER38e4jbZq9KvSPnd.jpg',
      rating: 3
    },
    {
      title: 'Spider man ',
      link:"https://hdmovie2.phd/movies/movies-164/",
      year: '2019',
      image: 'https://i.etsystatic.com/18242346/r/il/4088a1/1929824362/il_fullxfull.1929824362_lmi6.jpg',
      rating: 4.5
    },
    {
      title: 'Batman VS Superman ',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2016',
      image: 'https://images.moviesanywhere.com/b9b585fed72bcbdbc5a8cddb0c452074/2d5324d8-548a-4747-bca5-f9a39aec9030.jpg',
      rating: 3.5
    },
    {
      title: 'Avatar the way of water',
      link:"https://hdmovie2.phd/movies/movies-10/",
      year: '2022',
      image: 'https://images.moviesanywhere.com/7fbdd5c310d10623af2d040a726c4447/850a4464-275c-458f-a26a-fa6fdd4ab18c.jpg',
      rating: 4
    },
    {
      title: 'Venom 2',
      link:"https://hdmovie2.gr/2052-venom-let-there-be-carnage-2021-hindi.html",
      year: '2021',
      image: 'https://m.media-amazon.com/images/M/MV5BNGFlZmEyZjktZjM2Zi00N2JhLWIxZGUtZjViYmE0YzI4NGFhXkEyXkFqcGc@._V1_.jpg',
      rating: 2.5
    },
    {
      title: 'Nobody',
      link:"https://hdmovie2.gr/11691-nobody-2021-hindi.html",
      year: '2021',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CbaJAZq6LUjqzml5jWpfcYyxNUOG3WKbag&s',
      rating: 3
    },
    {
      title: 'Bad boys for life',
      link:"https://hdmovie2.phd/movies/movies-2653/",
      year: '2020',
      image: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/cVEhEKsXBGM80sevfcmAwgZruNm3rF.jpg',
      rating: 4.5
    },
    {
      title: 'Beast',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2022',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZOIeAcj9BEgDedyUBkadL_EGCdpW0vY3KA&s',
      rating: 3.5
    },
    {
      title: 'Jumanji',
      link:"https://hdmovie2.gr/7884-jumanji-the-next-level-2019-hindi.html",
      year: '2019',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e3f9b393257705.5e5ff618e4b07.jpg',
      rating: 4
    },
    {
      title: 'kong VS godzilla',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 4
    },
    {
      title: 'Wanted',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2008',
      image: 'https://resizing.flixster.com/hbKgIYjKHGbP5gRpLs9ksA9smTk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwZmI1MzFiLTFiMWItNGRmOS1hZmZlLTliMjFhMzM1MmM2Ny53ZWJw',
      rating: 3.5
    },
    {
      title: 'Shang-Chi',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2021',
      image: 'https://i.redd.it/5kwazz1yo4u61.jpg',
      rating: 4
    },
    {
      title: 'Extraction 2',
      link:"https://hdmovie2.gr/32886-extraction-2.html",
      year: '2023',
      image: 'https://m.media-amazon.com/images/M/MV5BM2E0ODI1ZDMtMDY2OS00MWZjLWJjY2UtMzBiMzY1YmViZjU5XkEyXkFqcGc@._V1_.jpg',
      rating: 5
    },
    {
      title: 'Green land',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2008',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsA1Bm6cbJGnF3XbC7GJXs047MBCVrl_Fbkw&s',
      rating: 3.5
    },
    {
      title: '60 Minutes',
      link:"https://hdmovie2.gr/47232-sixty-minutes.html",
      year: '2024',
      image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202401/Sixty-Minutes-20241_1705649640.jpg',
      rating: 3
    },
    {
      title: 'San andreas',
      link:"https://hdmovie2.phd/movies/movies-900/",
      year: '2015',
      image: 'https://m.media-amazon.com/images/M/MV5BYmQzNDEzMzMtM2U5OS00YTUzLWI2NDYtYjI2NjAyNWE5YzMzXkEyXkFqcGc@._V1_.jpg',
      rating: 4
    }
  ];
  addToList(movie: any) {
    console.log(`${movie.title} added to the list!`);
  }

}

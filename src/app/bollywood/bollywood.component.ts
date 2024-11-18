import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-bollywood',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './bollywood.component.html',
  styleUrl: './bollywood.component.css'
})
export class BollywoodComponent {
  BollywoodComponent= [
    {
      title: 'Yodha',
      link:"https://hdmovie2.wales/movies/movies-1912/",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BZjAyYjZmMjQtNGZlNi00ZGQ0LTkxNTUtNWQ2YzA3MWJjYjc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 3.5
    },
    {
      title: '83',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2021',
      image: 'https://m.media-amazon.com/images/M/MV5BYmNlNGY2NWEtODBiYi00YWIxLTkyNmItNTUwMmRjOTY4NzNkXkEyXkFqcGc@._V1_.jpg',
      rating: 4
    },
    {
      title: 'Kabir Singh',
      link:"https://hdmovie2.wales/movies/movies-2374/",
      year: '2018',
      image: 'https://im.jdmagicbox.com/comp/jd_social/news/2019sep19/image-455197-00u8abm784.jpg',
      rating: 3.5
    },
    {
      title: 'Gadar 2',
      link:"https://hdmovie2.wales/movies/movies-14/",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BODJkYjUzODctYmE0NS00NmJiLTljZGMtYmMxYzUxOTliZGY1XkEyXkFqcGc@._V1_.jpg',
      rating: 4
    },
    {
      title: 'Krrish 3',
      link:"https://hdmovie2.phd/movies/movies-363/",
      year: '2013',
      image: 'https://m.media-amazon.com/images/M/MV5BZTI1Yjg3N2MtZmUxOC00ZjliLWE1NmItNWU1ODQ4NDY3Yzg3XkEyXkFqcGc@._V1_.jpg',
      rating: 3
    },
    {
      title: 'Bloody Daddy ',
      link:"https://hdmovie2.phd/movies/movies-2123/",
      year: '2023',
      image: 'https://i.pinimg.com/originals/18/48/11/184811a2986b4e7b97bec9efd218cafe.jpg',
      rating: 4.5
    },
    {
      title: 'Stree 2 ',
      link:"https://hdmovie2.phd/movies/movies-3001/",
      year: '2024',
      image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202408/Stree_2_Sarkate_Ka_Aatank_poster_1_1725002164.jpg',
      rating: 3.5
    },
    {
      title: 'Kill',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcN6ge0hmKNejLf_PPu5rBUQvxsi3VEdKHvaot2yStqKlLnXbIAjMBeT7H3Bkxgc7fks&usqp=CAU',
      rating: 4
    },
    {
      title: 'Pathan',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2023',
      image: 'https://i.pinimg.com/originals/6a/6d/b9/6a6db9a959576836fd5c42c8bc41d565.jpg',
      rating: 2.5
    },
    {
      title: 'Fighter',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BYmJiYzZhOTktNGIzNy00YjljLWI3ZDgtZGU2YWMzNGQ1YjQ5XkEyXkFqcGc@._V1_.jpg',
      rating: 3
    },
    {
      title: 'Drishyam 2',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2022',
      image: 'https://i.pinimg.com/originals/e1/8a/6e/e18a6e24f6b4578cd7f6453a65c746a7.jpg',
      rating: 4.5
    },
    {
      title: 'Ms dhoni ',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2016',
      image: 'https://m.media-amazon.com/images/M/MV5BOTY5ODQxMTY3M15BMl5BanBnXkFtZTgwOTA3NTA4OTE@._V1_.jpg',
      rating: 3.5
    },
    {
      title: 'URI',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2019',
      image: 'https://m.media-amazon.com/images/M/MV5BMTMyODQxODktZTgzZC00YTQ0LWJjZWYtZTgzOTI5MmI3NGViXkEyXkFqcGc@._V1_.jpg',
      rating: 4
    },
    {
      title: 'Sam bahadur',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BZjNhMGY3MTAtYWJmOS00ZGYyLTlhNmUtMDIyZmNhZjRmYmI4XkEyXkFqcGc@._V1_.jpg',
      rating: 4
    },
    {
      title: 'Shaitaan',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BM2Y2MjdhMjItYjI4Yi00NmM3LTk4ZGItZDQ2NmNlZmZhYjAzXkEyXkFqcGc@._V1_.jpg',
      rating: 3.5
    },
    {
      title: 'Good-Newz',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2019',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e16da088131915.5dccf96d1bcad.jpg',
      rating: 4
    },
    {
      title: 'Chhichhore',
      link:"https://hdmovie2.gr/2718-godzilla-vs-kong-2021-hindi.html",
      year: '2019',
      image: 'https://m.media-amazon.com/images/M/MV5BMjFkYThiNDMtMmFhYS00ZjQ5LWJjZjMtZmQ3ODAxYmIwM2RlXkEyXkFqcGc@._V1_.jpg',
      rating: 5
    },
    {
      title: 'Bhool Bhulaiyaa 2',
      year: '2022',
      image: 'https://m.media-amazon.com/images/M/MV5BOTZhY2NjMGItODAyOS00MGVlLTk5ZDYtNzBjMjQ3ZDdkYmZmXkEyXkFqcGc@._V1_.jpg',
      rating: 3.5
    },
    {
      title: 'Laapataa ladies',
      year: '2024',
      image: 'https://m.media-amazon.com/images/M/MV5BMDA5MWUxM2YtNjFjOS00YjhmLTkyYTAtZDgzZDMxZmIwZWMxXkEyXkFqcGc@._V1_.jpg',
      rating: 3
    },
    {
      title: 'Kalki 2898 AD',
      year: '2024',
      image: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2021/07/Kalki-2898-AD-2.jpg',
      rating: 4
    }
  ];
addToList(movie: any) {
  console.log(`${movie.title} added to the list!`);
}

}

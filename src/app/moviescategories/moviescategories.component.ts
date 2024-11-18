import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moviescategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moviescategories.component.html',
  styleUrl: './moviescategories.component.css'
})
export class MoviescategoriesComponent {
  MoviescategoriesComponent= [
    {
      category: 'Action',
      movies: [
        { title: 'JOHN WICK', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11zQqRcIkP5kAS3XdpPFEa4s4cRixrIzIjA&s' }
      ]
    },
    {
      category: 'Comedy',
      movies: [
        { title: 'CHHICHHORE', poster: 'https://i.pinimg.com/564x/d3/ee/c1/d3eec17108b3f23755de13ff5544c0ef.jpg' }
      ]
    },
    {
      category: 'Drama',
      movies: [
        { title: 'AMONG TIMES', poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c0d0467250999.5b330d0dbc16a.jpg' }
      ]
    },
    {
      category: 'Horror',
      movies: [
            { title: 'The conjuring', poster: 'https://m.media-amazon.com/images/I/81dZ7NNKDCL.jpg' }
      ]
    }
  ];
}

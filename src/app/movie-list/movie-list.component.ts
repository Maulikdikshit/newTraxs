import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  baseImageUrl = 'http://image.tmdb.org/t/p/w45';
  moviesFound;
  constructor( private movieService : MovieDataService) { }

  ngOnInit() {

    this.movieService.$movies.subscribe((data) => {
      this.moviesFound = data;
    })
  }

  onClick(element){
    this.movieService.updateMovieDetails(element);
    console.log(element);
  }

}

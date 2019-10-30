import { Component, OnInit } from '@angular/core';

import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  baseImageUrl = 'http://image.tmdb.org/t/p/w185';
  imagePath;
  displayData;
  name;
  releaseDate;
  rating;
  overview;
  constructor(private movieService : MovieDataService) { }

  ngOnInit() {
    this.movieService.$movieDetails.subscribe((data:any) => {
      this.displayData = data;
      if(this.displayData){
        this.imagePath = data.poster_path;
        this.name = data.title;
        this.rating = data.vote_average;
        this.releaseDate = data.release_date;
        this.overview = data.overview;
      }
      
    })
  }

}

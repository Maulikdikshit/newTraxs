import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  movies = new BehaviorSubject(null);
  $movies = this.movies.asObservable();
  movieDetail = new BehaviorSubject(null);
  $movieDetails = this.movieDetail.asObservable();


  constructor( private http:HttpClient) {   }


  searchMovies(movie){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=bfec012830143bbd3b6d6fd55b919680&query='+movie);
  }

  updateMovies(movies){
    this.movies.next(movies);
  }

  updateMovieDetails(element){
    this.movieDetail.next(element);
  }
}

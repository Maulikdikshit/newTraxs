import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchForm:FormGroup;
  constructor( private movieService : MovieDataService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'movieName': new FormControl(null)
    })
  }

  onSearch(){
    console.log(this.searchForm.controls.movieName.value);
    let movieName = this.searchForm.controls.movieName.value;
    this.movieService.searchMovies(movieName).subscribe((data: any) => {
      console.log(data.results);
      this.movieService.updateMovies(data.results);
      this.movieService.$movies.subscribe((data) => {console.log('received data-->',data)});
    })

  }

}

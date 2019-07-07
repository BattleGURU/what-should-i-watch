import { Component } from '@angular/core';

interface MovieData {
  Actors: string;
  Awards: string;
  Poster: string;
  Ratings: Array<object>;
  Runtime: string;
  Plot: string;
  Year: string;
  imdbID: string;
  imdbRating: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'Mit';
  title2 = 'Nézzek';
  title3 = 'Ma?';
  baseLink = 'http://www.omdbapi.com?apikey=17d588da&plot=full';
  movieData = {};

  sendMeMovie(value: string) {
    fetch(`${this.baseLink}&t=${value}`).then((response) => response.json()).then((serverData) => {
      console.log(serverData);
      this.progressServerData(serverData);
    }).catch((error) => {
      console.log(error);
    });
  }
  progressServerData(serverData: MovieData) {
    this.movieData = serverData;
  }
}

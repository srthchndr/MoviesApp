import { Component, OnInit, ViewChild } from '@angular/core';
import { TmdbService } from "../tmdb.service";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [];
  length: any;
  pageSize = 20;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.showMovies(this.paginator.pageIndex + 1);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
          () => this.pageChange()
        );
  }

  showMovies(page: number){
    this.tmdb.getNowPlaying(page).subscribe(
      res => {
        this.movies = res.results;
        this.length = res.total_results;
      }
    );
  }

  pageChange(){
    this.showMovies(this.paginator.pageIndex + 1);
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { TmdbService } from "../tmdb.service";
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AbcComponent } from '../abc/abc.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  trailer: any;
  cast = [];
  genre = [];

  constructor(
    private tmdb: TmdbService,
    private route: ActivatedRoute,
    private sanitize: DomSanitizer,
    private matIconReg: MatIconRegistry,
    public dialog: MatDialog
    ) {
      matIconReg.addSvgIcon('play-icon', sanitize.bypassSecurityTrustResourceUrl('assets/Images/play-icon.svg'));
     }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.showMovie(id);
        this.showVideos(id);
        this.showCast(id);
      }
    );    
  }

  showMovie(id: number){
    this.tmdb.getMovie(id).subscribe(
      res =>{
        this.movie = res;
        // this.genre = 
      }
    )
  }

  showVideos(id: number){
    this.tmdb.getVideos(id).subscribe( 
      res =>{
      if(res.results.length > 0){
      for(var obj in res.results){
      if(res.results[obj].type == "Trailer"){
              this.trailer = res.results[obj];
              this.trailer.key = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+res.results[obj].key);
            }
          }
        }
      });
  }

  showCast(id: number){
    this.tmdb.getCast(id).subscribe(
      res => {
        this.cast = res.cast.slice(0, 5);
      }
    )
  }

  projectPlayer(){
    const dialogRef = this.dialog.open(AbcComponent, {
      width: '50%',
      height: '40%',
      data: {trailer: this.trailer}
    });
  }
}


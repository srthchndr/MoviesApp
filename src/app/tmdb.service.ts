import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  
  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '5fd959a4eb269b383ac37c297d6c4839';
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number){
    return( this.http.get(this.baseUrl+"movie/now_playing?api_key="+this.apiKey+"&page="+page+"&language="+this.language+"&region="+this.region))
  }

  getMovie(id: number){
    return this.http.get(this.baseUrl+"movie/"+id+"?api_key="+this.apiKey);
  }
  
  getVideos(id: number){
    return this.http.get(this.baseUrl+"movie/"+id+"/videos?api_key="+this.apiKey+"&language="+this.language);    
  }

  getCast(id:number){
    return this.http.get(this.baseUrl+"movie/"+id+"/credits?api_key="+this.apiKey);
  }
  
}

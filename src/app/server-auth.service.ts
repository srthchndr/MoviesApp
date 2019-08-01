import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface serverResponse{
  authenticated: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class ServerAuthService {

  constructor(private http: HttpClient) { }

  authenticateUser(uname: string, pword: string){
    return(this.http.post<serverResponse>('/api/login', {username: uname, password: pword}));
  }

  registerUser(username: string, password: string){
    return(this.http.post<serverResponse>('/api/register', {username, password}));
  }
}

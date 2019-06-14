import { Component, OnInit } from '@angular/core';
import { ServerAuthService } from "../server-auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public show: boolean = false;
  public showP: boolean = false;
  constructor(
    private register: ServerAuthService,
    private route: Router
  ) { }

  ngOnInit() { }

  onRegister(username: string, password: string, confirmPassword: string){
    // this.show = !this.show;
    if(password != confirmPassword){
      this.show = this.show;
    }else{
      this.register.registerUser(username, password).subscribe( 
        res => {
          if(res.authenticated){
            this.route.navigate(['movie']);
          }else{
            this.show = this.show;
          }
        }
      );
    }
  }


}

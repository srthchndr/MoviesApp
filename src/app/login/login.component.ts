import { Component, OnInit } from '@angular/core';
import { ServerAuthService } from "../server-auth.service";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  constructor(
    private iconReg: MatIconRegistry,
    private sanitize: DomSanitizer,
    private auth: ServerAuthService,
    private route: Router) { 
      iconReg.addSvgIcon('right-key', sanitize.bypassSecurityTrustResourceUrl('assets/Images/rightKey.svg'));
    }

  ngOnInit() {
  }

  onLogin(username: string, password: string){
    this.auth.authenticateUser(username, password).subscribe( 
      res => {
        if(res.authenticated){
          this.route.navigate(['movie']);
        }else{
          this.show = this.show;
        }
      }
    );
    // console.log(username, password);
  }

}

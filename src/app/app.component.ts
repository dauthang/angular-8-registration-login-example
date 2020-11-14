import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    tabHome = true;
    tabSearchAddress = false;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      
    }

    // logout() {
    //     this.authenticationService.logout();
    //     this.router.navigate(['/login']);
    // }

   
    testTab(item? : any){
        if(item + "" === "1"){
            console.log("ok")
            this.tabHome = true;
            this.tabSearchAddress = false;
        }   
        else if(item + "" === "2"){
            this.tabHome = false;
            this.tabSearchAddress = true;
        }else{
            this.tabHome = false;
            this.tabSearchAddress = false;
        }
    }
}
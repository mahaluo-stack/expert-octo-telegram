import { Component } from '@angular/core';
import { CurrentUserService } from './core/services/current.user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private currentUserService: CurrentUserService
  ) {
    this.currentUserService.setCurrentUser(localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') : "");
  }

}

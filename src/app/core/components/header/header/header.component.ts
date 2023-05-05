import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/core/services/current.user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkList: Array<string> = [];

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
  ) {
    this.setLinkList();
  }

  ngOnInit(): void {
    this.currentUserService.currentUser.subscribe(() => { this.setLinkList(); });
  }

  setLinkList(): void {
    this.linkList = [
      ...this.currentUserService.currentUser.value.name !== '' ? ['home', 'profile', 'sign out'] : ['register', 'sign in'],
    ];
  }

  handleClick(link: string) {
    if (link === 'sign out') {
      if (!localStorage.getItem("rememberMe")) { localStorage.removeItem('rememberMe'); }
      
      this.currentUserService.setCurrentUser("");
      this.setLinkList();
      this.router.navigateByUrl('sign in');
    }
  }
}

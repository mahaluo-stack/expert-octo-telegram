import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/core/services/current.user.service';

@Component({
  selector: 'app-sign.in',
  templateUrl: './sign.in.component.html',
  styleUrls: ['./sign.in.component.css']
})
export class SignInComponent {

  isSubmitted: boolean = false;

  signInForm = this.formBuilder.group({
    email: [localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [localStorage.getItem("rememberMe") ? true : false]
  });

  constructor(
    private formBuilder: FormBuilder,
    private currentUserService: CurrentUserService,
    private route: Router
  ) {}

  onSubmit(): void {
    if (!this.signInForm.invalid) {
      localStorage.setItem("token", "tokenation tokeroo");
      if (this.signInForm.value.rememberMe) { 
        localStorage.setItem("rememberMe", this.signInForm.value.email!); 
      }
      else {
        localStorage.removeItem("rememberMe");
      }

      this.currentUserService.setCurrentUser(this.signInForm.value.email!);
      this.signInForm.reset();
      this.route.navigateByUrl("home");
    }
    this.isSubmitted = true;
  }
}

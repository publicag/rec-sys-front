import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnDestroy {
  private subscribtion: Subscription = new Subscription();

  loginForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5)])
    ]
  });

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private router: Router) {
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  get form() { return this.loginForm.controls; }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.subscribtion.add(this.authService.login(this.form.email.value, this.form.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: error => {
          console.log(error);
        }
      }))
  }
}

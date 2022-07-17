import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnDestroy {
  private subscribtion: Subscription = new Subscription();

  registerForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5)])
    ]
  });

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private router: Router) { }

  get form() { return this.registerForm.controls; }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.subscribtion.add(this.authService.register(
      this.form.firstName.value,
      this.form.lastName.value,
      this.form.email.value,
      this.form.email.value,
      this.form.password.value
    ).pipe(first())
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/login')
      },
      error: error => {
        console.log(error);
      }
    }))
  }
}

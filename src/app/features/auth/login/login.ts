import { Component, signal, computed, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 applicationName = signal('TaskFlow Portal');
  loginCount = signal(0);
 private fb = inject(FormBuilder);
isLoading = signal(false);
  loginForm = this.fb.group({
   email: ['', [Validators.required, Validators.email]],
   password: ['', Validators.required],
   role: [{ value: 'Admin', disabled: true }]
});
login() {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.isLoading.set(true);

  setTimeout(() => {

    console.log(this.loginForm.getRawValue());

    this.isLoading.set(false);

  }, 2000);
}

errorMessage = '';

}

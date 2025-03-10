import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message = '';
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      role: new FormControl('', [Validators.required]),
    });
  }

  async register() {
    if (this.registerForm.valid) {
      const data: User = {
        id: 0,
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        role: this.registerForm.get('role')?.value,
      };

      console.log(data);
      (await this.authService.AddUser(data)).subscribe({
        next: (res) => {
          console.log('success!!', res);
          this.message = 'Registration successful!'; // הודעה למשתמש

          // שמירה של הטוקן וה-ID ב-localStorage
          localStorage.setItem('token', res.token); // הנחה שיש לך טוקן בחזרה מהשרת
          localStorage.setItem('userId', res.userId.toString()); // הנחה שיש לך ID בחזרה מהשרת

          // ניתוב לדף הבית
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
          this.message = 'Failed, try again'; // הודעה למשתמש
        }
      });
    } else {
      this.message = 'Form is invalid, please check the fields.'; // טיפול במקרה שהטופס לא תקין
    }
  }

  hide: boolean = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}  
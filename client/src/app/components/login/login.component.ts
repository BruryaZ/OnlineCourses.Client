import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Login } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  messege = '';
  constructor(private AuthService: AuthService, private router: Router) { }

  async PostData() {
    try {
      const res = await this.AuthService.Login({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      });
      console.log('success');

      // שמירה של הטוקן וה-ID ב-localStorage
      localStorage.setItem('token', res.token); // הנחה שיש לך טוקן בחזרה מהשרת
      localStorage.setItem('userId', res.userId.toString()); // הנחה שיש לך ID בחזרה מהשרת
      
    } catch (err: any) {
      this.messege = 'You must register';

      // ניווט להרשמה
      this.router.navigate(['/register']);
    }
  }

  loginForm: FormGroup<Login | any> = new FormGroup({});
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  hide: boolean = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}

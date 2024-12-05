import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const credentials = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/api/login', credentials).subscribe(
      (response: any) => {
        localStorage.setItem('authToken', response.token); // Save the token
        this.router.navigate(['/dashboard']); // Navigate to the dashboard
      },
      (error) => {
        this.errorMessage = 'Invalid username or password.';
      }
    );
  }

}

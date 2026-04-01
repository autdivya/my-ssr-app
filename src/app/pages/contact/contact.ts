import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    service: 'Plumbing'
  };

  successMessage = '';

  constructor(private http: HttpClient) {}

  submitForm() {
  console.log("Clicked"); // ✅ ADD THIS

  this.http.post('http://localhost/quickserve-api/book.php', this.formData)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert('Booking Successful!');
      },
      error: (err) => {
        console.error(err);
        alert('Error occurred');
      }
    });
}
}
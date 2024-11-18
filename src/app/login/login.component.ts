import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  openEmailModal() {
    const emailModal = new bootstrap.Modal(document.getElementById('emailModal'));
    emailModal.show();
  }
}

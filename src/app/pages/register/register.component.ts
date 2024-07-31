import { Component } from '@angular/core';
import { RegisterService } from '../../register.service';
import { NgForm } from '@angular/forms';
import { error } from 'console';

interface RegisterResponse {
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  titleText: string = 'Register';

  user = {
    name: '',
    username: '',
    email: '',
    password: '',
  };

  constructor(private registerService: RegisterService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form data:', this.user);
      this.registerService.registerUser(this.user).subscribe(
        (response) => {
          console.log('Sucess:', response);
          alert(response.message);
          form.reset();
        },
        (error) => {
          console.error('Error:', error);
          alert('Houve um erro ao registrar o usuário');
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}

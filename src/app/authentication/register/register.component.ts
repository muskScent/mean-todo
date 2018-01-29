import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerSuccess: boolean = false;
  registerFailure: boolean = false;
  submitted: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit(registrationForm: NgForm) {
    this.authenticationService.register(registrationForm.value.firstName, registrationForm.value.lastName,
    registrationForm.value.userName, registrationForm.value.password).subscribe(
      (response) => {
        this.registerSuccess = response.registrationSuccess;
        this.registerFailure = !response.registrationSuccess;
        if (this.registerSuccess) {
          this.submitted = true;
        }
      }
    );
  }

}

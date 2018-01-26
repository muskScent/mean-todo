import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit(registrationForm: NgForm) {
    console.log(registrationForm);
    this.authenticationService.register(registrationForm.value.firstName, registrationForm.value.lastName, 
    registrationForm.value.userName, registrationForm.value.password).subscribe(
      () => {
        alert('Successfully registered');
      }
    );;
  }

}
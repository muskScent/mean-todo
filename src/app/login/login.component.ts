import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/Router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  @ViewChild('trick') trick:ElementRef;

  constructor(private authenticationService: AuthenticationService, private renderer:Renderer) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let event = new MouseEvent('click', {bubbles: true});
    this.authenticationService.login(this.myForm.value.login, this.myForm.value.password)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.renderer.invokeElementMethod(
            this.trick.nativeElement, 'dispatchEvent', [event]);
        }
      );
    this.myForm.reset();
  }

  onClick() {
    console.log('on click');
  }

}

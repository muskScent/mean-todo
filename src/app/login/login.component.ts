import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth-service.service';
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

  constructor(private authService: AuthService, private renderer:Renderer) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log('submitted');
    let event = new MouseEvent('click', {bubbles: true});
    this.authService.login(this.myForm.value.login, this.myForm.value.password)
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

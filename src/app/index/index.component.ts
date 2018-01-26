import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  login: boolean = true;
  register: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setLogin() {
    this.login = true;
    this.register = false;
  }

  setRegister() {
    this.register = true;
    this.login = false;
  }

}

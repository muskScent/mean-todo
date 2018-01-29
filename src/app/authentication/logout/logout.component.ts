import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @ViewChild('trick') trick: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  logout() {
    const event = new MouseEvent('click', {bubbles: true});
    localStorage.clear();
    this.router.navigate(['/']);
  }

}

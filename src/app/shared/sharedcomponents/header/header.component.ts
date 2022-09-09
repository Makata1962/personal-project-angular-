import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

 @Input() logOut() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }
  }

}

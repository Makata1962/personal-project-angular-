import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private http:HttpClient, 
    private api:ApiService) {}

  ngOnInit(): void {
    this.showAllLeptops();
  }

  showAllLeptops() {
    this.api.getAllLaptops().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  showLaptop(id: number) {
    this.api.getLaptop(id).subscribe({
      next: (res) => {},
    });
  }
}

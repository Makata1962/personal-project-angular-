import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface LaptopData {
  laptop: {
    image: string;
    name: string;
    id: number;
  };
  user: {
    name: string;
    surname: string;
  };
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  laptopData: any = []; // Laptop Data interface should be data type
  laptopImg: string[] = [];
  laptopInfo: any = [];
  clicked: boolean = true;

  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit(): void {
    this.showAllLeptops();
  }

  showAllLeptops() {
    this.api.getAllLaptops().subscribe({
      next: (res) => {
        this.laptopData = res;
        for (let i = 0; i < this.laptopData.data.length; i++) {
          this.laptopImg.push(this.laptopData.data[i].laptop.image);
        }
      },
    });
  }

  showLaptop(id: number) {
    this.api.getLaptop(id).subscribe({
      next: (res) => {
        this.laptopInfo = res;
      },
    });
    this.clicked = !this.clicked;
  }

  goBack() {
    this.clicked = !this.clicked;
  }
}

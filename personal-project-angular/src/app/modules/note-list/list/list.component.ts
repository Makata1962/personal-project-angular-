import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  // laptopName: string[] = [];
  // userName: string[] = [];
  // userSurname: string[] = [];

  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit(): void {
    this.showAllLeptops();
  }

  showAllLeptops() {
    this.api.getAllLaptops().subscribe({
      next: (res) => {
        this.laptopData = res;
      // console.log(this.laptopData.data[0].laptop.image)
        for (let i = 0; i < this.laptopData.data.length; i++) {
          this.laptopImg.push(this.laptopData.data[i].laptop.image)
        //   this.laptopName.push(this.laptopData.data[i].laptop.name)
        //   this.userName.push(this.laptopData.data[i].user.name)
        //   this.userSurname.push(this.laptopData.data[i].user.surname)
        
        }
      },
    });
  }

  showLaptop(id: number) {
    this.api.getLaptop(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}

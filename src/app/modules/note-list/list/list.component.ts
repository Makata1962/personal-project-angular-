import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



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
  team!:string;
  position!:string;
  brand!:string;

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
          if(this.laptopInfo.data.user.team_id === 1) {
            this.team = 'დეველოპერი'
          } else if (this.laptopInfo.data.user.team_id === 2 ) {
            this.team = 'HR'
          } else if (this.laptopInfo.data.user.team_id === 3 ) {
            this.team = 'გაყიდვები'
          } else if (this.laptopInfo.data.user.team_id === 4 ) {
            this.team = 'დიზაინი'
          } else {
            this.team = 'მარკეტინგი'
          }
          if(this.laptopInfo.data.user.position_id === 1) {
            this.position = 'ინტერნი'
          } else if (this.laptopInfo.data.user.position_id === 2) {
            this.position = 'ჯუნიორ დეველოპერი'
          } else if (this.laptopInfo.data.user.position_id === 3) {
            this.position = 'მიდლ დეველოპერი'
          } else if (this.laptopInfo.data.user.position_id === 4) {
            this.position = 'სენიორ დეველოპერი'
          }else if (this.laptopInfo.data.user.position_id === 6) {
            this.position = 'ლიდ დეველოპერი'
          }else if (this.laptopInfo.data.user.position_id === 7) {
            this.position = 'HR სპეციალისტი'
          }else if (this.laptopInfo.data.user.position_id === 8) {
            this.position = 'HR პროექტ მენეჯერი'
          }else if (this.laptopInfo.data.user.position_id === 9) {
            this.position = 'HR ბიზნეს პარტნიორი'
          }else if (this.laptopInfo.data.user.position_id === 10) {
            this.position = 'ჯუნიორ ბიზნეს დეველოპერი'
          }else if (this.laptopInfo.data.user.position_id === 11) {
            this.position = 'ბიზნეს დეველოპერი'
          }else if (this.laptopInfo.data.user.position_id === 12) {
            this.position = 'სენიორ ბიზნეს დეველოპერი'
          }else if (this.laptopInfo.data.user.position_id === 13) {
            this.position = 'ჯუნიორ UI/UX დიზაინერი'
          }else if (this.laptopInfo.data.user.position_id === 14) {
            this.position = 'UI/UX დიზაინერი'
          } else if (this.laptopInfo.data.user.position_id === 15) {
            this.position = 'სენიორ UI/UX დიზაინერი'
          }else if (this.laptopInfo.data.user.position_id === 16) {
            this.position = 'ლიდ UI/UX დიზაინერი'
          }else if (this.laptopInfo.data.user.position_id === 17) {
            this.position = 'ბლოგერი'
          }else if (this.laptopInfo.data.user.position_id === 18) {
            this.position = 'growth მარკეტინგის სპეციალისტი'
          } else   {
            this.position = 'მარკეტინგის თიმ ლიდი'
          }

          if(this.laptopInfo.data.laptop.brand_id === 1){
            this.brand = 'HP'
          } else if (this.laptopInfo.data.laptop.brand_id === 2) {
            this.brand = 'Dell'
          }else if (this.laptopInfo.data.laptop.brand_id === 3) {
            this.brand = 'Microsoft'
          }else if (this.laptopInfo.data.laptop.brand_id === 4) {
            this.brand = 'Apple'
          }else if (this.laptopInfo.data.laptop.brand_id === 5) {
            this.brand = 'Lenovo'
          }else  {
            this.brand = 'Acer'
          }

      },
    });
    this.clicked = !this.clicked;
  }

  goBack() {
    this.clicked = !this.clicked;
  }
}

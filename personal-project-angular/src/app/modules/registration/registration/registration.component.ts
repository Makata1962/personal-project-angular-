import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { NgxFileDropEntry } from 'ngx-file-drop';
import { ApiService } from 'src/app/services/api.service';
import { subscribeOn } from 'rxjs';

interface Team {
  id: number;
  name: string;
}

interface Positions {
  id: number;
  name: string;
  teams_id: number;
}
export interface Brands {
  id: number;
  name: string;
}

interface Cpus {
  id: number;
  name: string;
}

export interface PostLaptop {
  name: string;
  surname: string;
  team_id: number;
  position_id: number;
  phone_number: string;
  email: string;
  token: string;
  laptop_name: string;
  laptop_image: string;
  laptop_brand_id: number;
  laptop_cpu: string;
  laptop_cpu_cores: number;
  laptop_cpu_threads: number;
  laptop_ram: number;
  laptop_hard_drive_type: string;
  laptop_state: string;
  laptop_purchase_date?: string;
  laptop_price: number;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  disabled: boolean = true;
  clicked: boolean = false;
  public files: NgxFileDropEntry[] = [];
  teams: Team[] = [];
  positions: Positions[] = [];
  brands: Brands[] = [];
  cpus: Cpus[] = [];
  token: string = '4479704264a9c309e38267981be57000';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.showTeams();
    this.showPositions();
    this.showBrands();
    this.showCpus();
    this.showAllLeptops(); 
  }

  form = this.formBuilder.group({
    name: [''],
    surname: [''],
    team_id: [{ id: 0, name: '' }],
    position_id: [{ id: 0, name: '' }],
    email: [''], // should be end on @redberry.ge needs regex
    phone_number: [
      '',
      // Validators.pattern('/^(+?995)?(79d{7}|5d{8})$'),
    ], // უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს რეჯექსით

    laptop_image: [''],

    laptop_name: [''],
    laptop_brand_id: [{ id: 0, name: '' }],
    laptop_cpu: [''],
    laptop_cpu_cores: [0],
    laptop_cpu_threads: [0],
    laptop_ram: [0],
    laptop_hard_drive_type: [''],
    laptop_state: [''],
    laptop_purchase_date: [''],
    laptop_price: [0],
  });

  onClick() {
    return (this.clicked = !this.clicked);
  }

  showTeams() {
    this.api.getTeams().subscribe({
      next: (res) => {
        this.teams = res.data;
      },
    });
  }

  showPositions() {
    this.api.getPositions().subscribe({
      next: (res) => {
        this.positions = res.data;
      },
    });
  }

  showBrands() {
    this.api.getBrands().subscribe({
      next: (res) => {
        this.brands = res.data;
      },
    });
  }

  showCpus() {
    this.api.getCpus().subscribe({
      next: (res) => {
        this.cpus = res.data;
      },
    });
  }

  showAllLeptops() {
    this.api.getAllLaptops().subscribe({
      next:(res) => {
        console.log(res);
      }
    })
  }

  showLaptop() {
    this.api.getLaptop().subscribe({
      next:(res)=> {
        
      }
    })
  }

  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    console.log(this.files);
  }

  fileUpload() {
    const data = {
      ...this.form.value,
      token: this.token,
      team_id: this.form.value.team_id?.id ?? 0,
      position_id: this.form.value.position_id?.id ?? 0,
      laptop_brand_id: this.form.value.laptop_brand_id?.id ?? 0,
    } as PostLaptop;

    
    this.api.postLaptop(data).subscribe({
      next: (res) => {
        alert('Success');
        console.log(res)
        // this.form.reset();
      },
    });
  }
}

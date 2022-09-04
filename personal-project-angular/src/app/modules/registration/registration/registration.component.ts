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
import { getItem } from 'src/app/shared/local-storage';

const formData = new FormData();

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
  file: File | undefined = undefined;

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
  }

  form = this.formBuilder.group({
    name: [getItem('name') ?? ''],
    surname: [getItem('surname') ?? ''],
    team_id: [getItem('team_id') && JSON.parse(getItem('team_id'))],
    position_id: [getItem('position_id') && JSON.parse(getItem('position_id'))],
    email: [getItem('email') ?? ''], // should be end on @redberry.ge needs regex
    phone_number: [
      getItem('phone_number') ?? '',
      // Validators.pattern('/^(+?995)?(79d{7}|5d{8})$'),
    ], // უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს რეჯექსით

    laptop_image: [''],
    laptop_name: [''],
    laptop_brand_id: [{ id: 0, name: '' }],
    laptop_cpu: [{ id: null, name: '' }],
    laptop_cpu_cores: [null],
    laptop_cpu_threads: [0],
    laptop_ram: [0],
    laptop_hard_drive_type: [''],
    laptop_state: [''],
    laptop_purchase_date: [''],
    laptop_price: [0],
  });

  onLocalStorageSave() {
    this.form.value.name && localStorage.setItem('name', this.form.value.name);
    this.form.value.surname &&
      localStorage.setItem('surname', this.form.value.surname);
    this.form.value.team_id?.id &&
      localStorage.setItem(
        'team_id',
        JSON.stringify({
          id: this.form.value.team_id?.id,
          name: this.form.value.team_id?.name,
        })
      );
    this.form.value.position_id?.id &&
      this.form.value.position_id !== null &&
      localStorage.setItem(
        'position_id',
        JSON.stringify({
          id: this.form.value.position_id?.id,
          name: this.form.value.position_id?.name,
        })
      );
    this.form.value.email &&
      localStorage.setItem('email', this.form.value.email);
    this.form.value.phone_number &&
      localStorage.setItem('phone_number', this.form.value.phone_number);

    return (this.clicked = !this.clicked);
  }

  changeClicked() {
    this.clicked = !this.clicked;
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

  onChange(event: any) {
    this.file = event.target.files[0];
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

  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    console.log(this.files);
  }

  fileUpload() {
    const data: any = {
      ...this.form.value,
      token: this.token,
      team_id: this.form.value.team_id?.id,
      position_id: this.form.value.position_id?.id,
      laptop_brand_id: this.form.value.laptop_brand_id?.id,
      laptop_image: this.file,
      laptop_cpu_threads: Number(this.form.value.laptop_cpu_threads),
      laptop_cpu_cores: Number(this.form.value.laptop_cpu_cores),
      laptop_cpu: this.form.value.laptop_cpu?.name,
    };

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    console.log(this.form.value);

    this.api.postLaptop(formData).subscribe({
      next: (res) => {
        alert('Success');
        console.log(res);
        this.form.reset();
      },
    });
  }
}

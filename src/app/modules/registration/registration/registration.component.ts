import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  FormBuilder
} from '@angular/forms';

import { NgxFileDropEntry } from 'ngx-file-drop';
import { ApiService } from 'src/app/services/api.service';
import { getItem } from 'src/app/shared/localstorage/local-storage';
import { Team, Positions, Brands, Cpus } from 'src/app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

const formData = new FormData();

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  disabled: boolean = true;
  clicked: boolean = false;
  page: string = 'თანამშრომლის ინფო';
  public files: NgxFileDropEntry[] = [];
  teams: Team[] = [];
  positions: Positions[] = [];
  brands: Brands[] = [];
  cpus: Cpus[] = [];
  token: string = '4479704264a9c309e38267981be57000';
  file: File | undefined = undefined;
  teamSelected!:string;
  sorteredPositions: Positions[]= []
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showTeams();
    this.showPositions();
    this.showBrands()
    this.showCpus();
  }

  form = this.formBuilder.group({
    name: [getItem('name') ?? ''],
    surname: [getItem('surname') ?? ''],
    team_id: [getItem('team_id') && JSON.parse(getItem('team_id'))],
    position_id: [getItem('position_id') && JSON.parse(getItem('position_id'))],
    email: [getItem('email') ?? ''],
    phone_number: [
      getItem('phone_number') ?? ''
    ], 

    laptop_image: [''],
    laptop_name: [''],
    laptop_brand_id: [{ id: 0, name: '' }],
    laptop_cpu: [{ id: null, name: '' }],
    laptop_cpu_cores: [null],
    laptop_cpu_threads: [null],
    laptop_ram: [null],
    laptop_hard_drive_type: [''],
    laptop_state: [''],
    laptop_purchase_date: [''],
    laptop_price: [null],
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

    this.clicked = !this.clicked;
    console.log(this.form.value.team_id.id)
    this.page = 'ლეპტოპის ინფო';
  }

  changeClicked() {
    this.clicked = !this.clicked;
    this.page = 'თანამშრომლის ინფო';
  }

  showTeams() {
    this.api.getTeams().subscribe({
      next: (res) => {
        this.teams = res.data;

      },
    });
  }

  renderPositions(team_id: any) {
    this.sorteredPositions = this.positions.filter(el => el.team_id === team_id.id)
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

  fileUpload() {
    const data: any = {
      ...this.form.value,
      token: this.token,
      team_id: Number(this.form.value.team_id?.id),
      position_id:Number( this.form.value.position_id?.id),
      laptop_brand_id: Number(this.form.value.laptop_brand_id?.id),
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
        alert('Laptop information successfully saved');
        console.log(res);
        this.form.reset();
        this.router.navigate(['landingpage'])
      },
    });
    localStorage.clear();
  }
}

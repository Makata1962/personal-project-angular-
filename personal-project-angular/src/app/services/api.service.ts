import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Brands,
  PostLaptop,
} from '../modules/registration/registration/registration.component';

interface BrandsRequest {
  data: Brands[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://pcfy.redberryinternship.ge/api/';

  constructor(private http: HttpClient) {}
  getTeams() {
    return this.http.get<any>(this.baseUrl + 'teams');
  }

  getPositions() {
    return this.http.get<any>(this.baseUrl + 'positions');
  }

  getBrands() {
    return this.http.get<BrandsRequest>(this.baseUrl + 'brands');
  }

  getCpus() {
    return this.http.get<any>(this.baseUrl + 'cpus');
  }

  postLaptop(data: PostLaptop) {
    console.log('dataaa', data);
    return this.http.post<PostLaptop>(this.baseUrl + 'laptop/create', data, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'form-data/json',
      },
    });
  }

  getAllLaptops() {
    return this.http.get(this.baseUrl + 'laptops')
  }
  getLaptop(){
    return this.http.get(this.baseUrl + 'laptop/{id}')
  }
}

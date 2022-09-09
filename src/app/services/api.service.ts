import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brands, PostLaptop } from '../shared/interfaces/interfaces';

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

  postLaptop(data: FormData) {
    console.log('dataaa', data);
    return this.http.post<PostLaptop>(this.baseUrl + 'laptop/create', data, {
      headers: {
        accept: 'application/json',
      },
    });
  }

  getAllLaptops() {
    return this.http.get(
      this.baseUrl + 'laptops?token=4479704264a9c309e38267981be57000'
    );
  }

  getLaptop(id: number) {
    return this.http.get(
      this.baseUrl +
        'laptop/' +
        id.toString() +
        '?token=4479704264a9c309e38267981be57000'
    );
  }
}

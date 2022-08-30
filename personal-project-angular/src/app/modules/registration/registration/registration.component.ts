import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  file: any;
  clicked: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onClick() {
    // this.clickedOnEmployeeForm =
    //   !this.clickedOnEmployeeForm && !this.clickedOnLaptopForm;
    return (this.clicked = true);
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  uploadFile() {
    let formData = new FormData();
    formData.set('file', this.file);

    //call API
    this.http
      .post('https://pcfy.redberryinternship.ge/api/teams', formData)
      .subscribe((res) => {});
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  file: any;
  clicked: boolean = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  form = this.formBuilder.group({
    firstname: ['', Validators.required, Validators.minLength(2)],
    lastname: ['', Validators.required, Validators.minLength(2)],
    team: ['', Validators.required],
    position: ['', Validators.required],
    email: [
      '',
      Validators.required,
      Validators.pattern('/^[A-Za-z0-9._%+-]+@redberry.ge$/'),
    ], // should be end on @redberry.ge needs regex
    phoneNumber: [
      '',
      Validators.required,
      // Validators.pattern('/^(+?995)?(79d{7}|5d{8})$'),
    ], // უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს რეჯექსით

    photo: ['', Validators.required],

    laptopName: [
      '',
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9?><;,{}[]-!@#$%^&*()_+='),
    ],
    brand: ['', Validators.required],
    laptopCPU: ['', Validators.required],
    coreCPU: ['', Validators.required, Validators.pattern('^[0-9]')],
    flowCPU: ['', Validators.required, Validators.pattern('^[0-9]')],
    ram: ['', Validators.required, Validators.pattern('^[0-9]')],
    storage: ['', Validators.required],
    newOrUsed: ['', Validators.required],
    date: [''],
    price: ['', Validators.required, Validators.pattern('^[0-9]')],
  });

  onClick() {
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

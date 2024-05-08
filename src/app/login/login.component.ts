import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedDataService } from '../cards/shared/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onFormSubmit(form: NgForm) {
    return form.value.name;
  }

  constructor(private sharedDataService: SharedDataService) {}

  setData(data: any) {
    this.sharedDataService.setData(data);
  }
}

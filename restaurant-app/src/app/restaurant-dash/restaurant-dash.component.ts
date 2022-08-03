import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  formValue!: FormGroup
  restaurantModelObj: RestaurantData = new RestaurantData
  allRestaurantData: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      Mobile: [''],
      Address: [''],
      services: ['']
    })
    this.getAllData()
  }
  // Now Subscribing our data which is maped via services
  addResto() {
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurantModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurant Records Added Successfull");
      this.formValue.reset()
    },
      err => {
        alert("something is Wrong!")
      }
    )
  }

  close() {
    this.formValue.reset();
  }

  // Get All Data
  getAllData() {
    this.api.getRestaurant().subscribe(res => {
      this.allRestaurantData = res;
    })
  }
}




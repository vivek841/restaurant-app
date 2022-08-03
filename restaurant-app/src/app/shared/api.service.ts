import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // Now here i will define the POST, GET, PUT, DELETE
  // create Restaurant using post method
  postRestaurant(data:any){
    return this._http.post<any>("https://3000-vivek841-restaurantapp-q43wumih557.ws-us59.gitpod.io/posts",data).pipe(map((res:any)=>{return res;}))
  }
  //Get Restaurant data using Get Method
  getRestaurant(){
    return this._http.get<any>("").pipe(map((res:any)=>{return res;}))
  }
  //Update Restaurant using PUT Method
  updateRestaurant(data:any, id:number){
    return this._http.put<any>(""+id,data).pipe(map((res:any)=>{return res;}))
  }
  //Delete Restaurant using DELETE Method
  deleteRestaurant(id:number){
    return this._http.delete<any>(""+id).pipe(map((res:any)=>{return res;}))
  }

}

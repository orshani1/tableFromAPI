import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly SERVER = 'https://fakestoreapi.com/users';

  constructor(private _http:HttpClient) {

   }
   getAllInfo(){
     return this._http.get(this.SERVER);
   }
   getSingleUser(id:number){
     return this._http.get(`${this.SERVER}/${id}`);
   }
}

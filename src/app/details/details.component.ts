import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number = 0;
  user:any =
  {

  }

  constructor(private service:HttpService,private aRoute:ActivatedRoute) {
    aRoute.params.subscribe(param =>{
      this.id = param['id'];
      console.log('id is ', this.id);
    })
    this.service.getSingleUser(this.id).subscribe(res=>{
      this.user = res;
    })
   }

  ngOnInit(): void {
  }

}

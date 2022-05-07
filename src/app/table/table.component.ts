import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:any[]=[];


   constructor(private service:HttpService) {
      this.service.getAllInfo().subscribe((params:any)=>{
        this.users = params;
      })
    }

  ngOnInit(): void {
  }

}

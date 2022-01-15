import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }


  ngOnInit(): void {
   
  }
  cards=[{
    "category":'Quiz',
    'tite':'CET 2021',
    'content':'50  Questions',
    'action':'Take Test',
    'path':'cet.2021'
  },{
    "category":'Quiz',
    'tite':'PGCET 2021',
    'content':'50  Questions',
    'action':'Take Test',
    'path':'PG CET.2021'
  },{
    "category":'Quiz',
    'tite':'CET 2020',
    'content':'50  Questions',
    'action':'Take Test',
    'path':'CET.2021'
  } ]

  redirect(path:string)
  {
    console.log(path)
    this.router.navigate(['/quiz',path])

  }
  
}

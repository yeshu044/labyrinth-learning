import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards=[{
    "category":'Quiz',
    'tite':'CET 2021',
    'content':'50  Questions',
    'action':'Take Test'
  },{
    "category":'Quiz',
    'tite':'CET 2021',
    'content':'50  Questions',
    'action':'Take Test'
  },{
    "category":'Quiz',
    'tite':'CET 2021',
    'content':'50  Questions',
    'action':'Take Test'
  } ]
}

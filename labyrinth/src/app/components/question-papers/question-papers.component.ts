import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileService } from './file.service';
import * as fileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import { HttpResponse } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { DownloadService } from './downloadService';

@Component({
  selector: 'app-question-papers',
  templateUrl: './question-papers.component.html',
  styleUrls: ['./question-papers.component.css']
})
export class QuestionPapersComponent implements OnInit {


  questionPaper = {
    "type": "list",
    "questionPaper": [],
    "title": "",
    "subject": "",
    "list": 
      {
      "CET": {
        "type": "list",
        "questions": [],
        "title": "",
        "subject": "",
        "list": {
          "2021": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "CET-MATHS-2021",
            "questionPapersLink": "https://docs.google.com/spreadsheets/d/1MKf7FC8YfxG4boHfkurC_y1DYVeTKcehKh9NA0OQRlc/edit#gid=0"

          },
          "2020": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "CET-MATHS-2020",
            "questionPapersLink": "https://docs.google.com/spreadsheets/d/1MKf7FC8YfxG4boHfkurC_y1DYVeTKcehKh9NA0OQRlc/edit#gid=0"

          }
        }
      }
      ,"PGCET": {
        "type": "list",
        "questions": [],
        "title": "",
        "subject": "",
        "list": {
          "2021": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "PGCET-MATHS-2021",
            "questionPapersLink": "https://docs.google.com/spreadsheets/d/1MKf7FC8YfxG4boHfkurC_y1DYVeTKcehKh9NA0OQRlc/edit#gid=0"

          },
          "2020": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "PGCET-MATHS-2020",
            "questionPapersLink": "https://docs.google.com/spreadsheets/d/1MKf7FC8YfxG4boHfkurC_y1DYVeTKcehKh9NA0OQRlc/edit#gid=0"

          }
        }
      }

    }
    
  }

  keysType:any=[];
  keysYear:any=[];
  disObj:any;
  disableType:boolean = true;
  disableYear:boolean = false;
  disableContent:boolean = false;
  type:any;

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient,
    private FileSaverService: FileSaverService) {
      this.keysType = Object.keys(this.questionPaper.list)
      console.log(this.keysType)
     }
     forward(data:any){
       this.disableType = false;
       this.disableYear = true;
        this.type = data
      const temp = JSON.parse(JSON.stringify(this.questionPaper.list))[data]['list']     
      this.keysYear = Object.keys(temp)
      // console.log(this.keysYear)
     }
     forward_internal(year:any){
      this.disableYear = false ;
      this.disableContent = true;
      this.disObj = JSON.parse(JSON.stringify(this.questionPaper.list))[this.type]['list'][year]
     }
  ngOnInit(): void {
  }
  enableType(){
    this.disableType = true;
    this.disableYear = false;
    this.disableContent = false;
  }
  enableYear(){
    this.disableType = false;
    this.disableYear = true;
    this.disableContent = false;

  }
}

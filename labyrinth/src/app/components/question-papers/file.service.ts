import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  
  constructor(private http: HttpClient) {}

  downloadFile(): any {
		return this.http.get('https://docs.google.com/spreadsheets/d/1MKf7FC8YfxG4boHfkurC_y1DYVeTKcehKh9NA0OQRlc/edit#gid=0', {responseType: 'blob'});
  }
   
}

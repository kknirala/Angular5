import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	cities: any;
	ids: any;
	profiles: any;
 	constructor(private http: HttpClient) { }

 	ngOnInit() {
 		this.http.get('').subscribe(data => {
  	  	this.cities = data;
  	});

  	this.http.post('', {}).subscribe(data => {
  	  this.ids = data.obj.data;
  	  this.http.post('', {}).subscribe(data => {
  	 this.profiles = data.obj.data;
  	});
  	});

  }

}

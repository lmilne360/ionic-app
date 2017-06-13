import { Component } from '@angular/core';
import { ACTIVITIES } from '../../assets/mock-data/mock-activities';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items: any[];

  constructor(public navCtrl: NavController ) { 
  	this.items = ACTIVITIES;
  }
 
 ngOnInit(){
 	console.log(this.items)
 }
}
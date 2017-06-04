import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	contacts:any[];
  constructor(public navCtrl: NavController) {
  	this.contacts = [];
  	for (var i = 0; i < 5; i++) {
  		this.contacts.push({
  			id: i,
  			name: "Contact" + i,
  			number: Math.floor( Math.random() * (9)+1)
  		})
  	}
  }

  selectContact(contact){
  	this.navCtrl.push(DetailPage, {contact} )
  }


}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
	activities: any[]
	myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController) {
  	this.activities = [ {name: "Chest", date: this.myDate }]
  }

  addActivity(){
  	let activity = {name: "New Activity", date: this.myDate}
  	this.activities.push(activity)
  	console.log(activity)
  }
}
